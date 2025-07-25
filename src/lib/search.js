/**
 * @param {string} input 
 * @returns {Promise<{ name: string, path: string, meta?: any, score: number }[]>}
*/
async function search(input) {
    if (!input || input.trim().length === 0) {
        return [];
    }

    const searchTerm = input.toLowerCase().trim();
    const results = [];

    try {
        // Use import.meta.glob to find all markdown documentation pages
        // This only works in a Vite environment
        const modules = import.meta.glob('/src/routes/docs/**/*.md', { 
            eager: true, 
            import: 'default',
            query: '?raw'
        });

        // Also get the metadata from the modules
        const modulesMeta = import.meta.glob('/src/routes/docs/**/*.md', { 
            eager: true 
        });

        for (const [path, content] of Object.entries(modules)) {
            // Convert file path to URL path
            const urlPath = path
                .replace('/src/routes', '')
                .replace('/+page.md', '')
                .replace('.md', '');

            // Get the module metadata if available
            const moduleMeta = modulesMeta[path];
            const metadata = (moduleMeta && typeof moduleMeta === 'object' && 'metadata' in moduleMeta) 
                ? moduleMeta.metadata 
                : {};

            // Extract content for searching
            const rawContent = typeof content === 'string' ? content : '';
            
            // Parse and process the content
            const pageData = parseMarkdownContent(rawContent, urlPath);
            
            // Calculate relevance score
            const score = calculateRelevanceScore(searchTerm, pageData.title, pageData.description, pageData.content);

            if (score > 0) {
                results.push({
                    name: pageData.title,
                    path: urlPath,
                    meta: {
                        description: pageData.description,
                        excerpt: extractExcerpt(pageData.content, searchTerm),
                        ...(typeof metadata === 'object' && metadata ? metadata : {})
                    },
                    score
                });
            }
        }
    } catch (error) {
        // If import.meta.glob is not available (e.g., in Node.js environment),
        // return empty results or throw a more descriptive error
        console.warn('Search functionality requires Vite environment (import.meta.glob not available)');
        return [];
    }

    // Sort by relevance score (highest first)
    return results.sort((a, b) => b.score - a.score);
}

/**
 * Parse markdown content and extract title, description, and body
 * @param {string} rawContent 
 * @param {string} urlPath 
 * @returns {{ title: string, description: string, content: string }}
 */
function parseMarkdownContent(rawContent, urlPath) {
    // Parse frontmatter and content
    const frontmatterMatch = rawContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    let title = '';
    let description = '';
    let bodyContent = rawContent;

    if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        bodyContent = frontmatterMatch[2];
        
        // Extract title and description from frontmatter
        const titleMatch = frontmatter.match(/title:\s*(.+)/i);
        const descMatch = frontmatter.match(/description:\s*(.+)/i);
        
        if (titleMatch) title = titleMatch[1].trim().replace(/['"]/g, '');
        if (descMatch) description = descMatch[1].trim().replace(/['"]/g, '');
    }

    // If no frontmatter title, try to extract from first heading
    if (!title) {
        const headingMatch = bodyContent.match(/^#\s+(.+)/m);
        if (headingMatch) {
            title = headingMatch[1].trim();
        }
    }

    // Fallback title from path
    if (!title) {
        title = urlPath.split('/').pop()?.replace(/-/g, ' ') || 'Untitled';
        title = title.charAt(0).toUpperCase() + title.slice(1);
    }

    return {
        title,
        description,
        content: bodyContent
    };
}

/**
 * Calculate relevance score based on search term matches
 * @param {string} searchTerm 
 * @param {string} title 
 * @param {string} description 
 * @param {string} content 
 * @returns {number}
 */
function calculateRelevanceScore(searchTerm, title, description, content) {
    let score = 0;
    const titleLower = title.toLowerCase();
    const descriptionLower = description.toLowerCase();
    const contentLower = content.toLowerCase();

    // Exact title match gets highest score
    if (titleLower === searchTerm) {
        score += 100;
    }
    // Title contains search term
    else if (titleLower.includes(searchTerm)) {
        score += 50;
    }
    // Title words match search term words
    else {
        const titleWords = titleLower.split(/\s+/);
        const searchWords = searchTerm.split(/\s+/);
        const matchingWords = searchWords.filter(word => 
            titleWords.some(titleWord => titleWord.includes(word) || word.includes(titleWord))
        );
        score += matchingWords.length * 20;
    }

    // Description matches
    if (descriptionLower.includes(searchTerm)) {
        score += 30;
    }

    // Content matches
    const contentMatches = (contentLower.match(new RegExp(searchTerm, 'g')) || []).length;
    score += Math.min(contentMatches * 5, 25); // Cap content score at 25

    // Boost score for shorter titles (likely more focused)
    if (title.length < 20 && score > 0) {
        score += 10;
    }

    // Boost score for pages with descriptions
    if (description && score > 0) {
        score += 5;
    }

    return score;
}

/**
 * Extract a relevant excerpt from content around search term
 * @param {string} content 
 * @param {string} searchTerm 
 * @returns {string}
 */
function extractExcerpt(content, searchTerm) {
    // Remove markdown syntax for cleaner excerpt
    const cleanContent = content
        .replace(/^---[\s\S]*?---\n/, '') // Remove frontmatter
        .replace(/```[\s\S]*?```/g, '') // Remove code blocks
        .replace(/`[^`]+`/g, '') // Remove inline code
        .replace(/#{1,6}\s+/g, '') // Remove heading markers
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
        .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
        .replace(/\*([^*]+)\*/g, '$1') // Remove italic
        .replace(/\n+/g, ' ') // Replace newlines with spaces
        .trim();

    const searchIndex = cleanContent.toLowerCase().indexOf(searchTerm.toLowerCase());
    
    if (searchIndex === -1) {
        // If search term not found, return first 150 characters
        return cleanContent.substring(0, 150) + (cleanContent.length > 150 ? '...' : '');
    }

    // Extract context around the search term
    const start = Math.max(0, searchIndex - 75);
    const end = Math.min(cleanContent.length, searchIndex + searchTerm.length + 75);
    
    let excerpt = cleanContent.substring(start, end);
    
    if (start > 0) excerpt = '...' + excerpt;
    if (end < cleanContent.length) excerpt = excerpt + '...';
    
    return excerpt;
}

export { search };