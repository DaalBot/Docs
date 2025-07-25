# Documentation Search Implementation

This implementation provides a comprehensive search functionality for your DaalBot documentation using `import.meta.glob` to dynamically discover and index all markdown documentation pages.

## Features

✅ **Automatic Page Discovery**: Uses `import.meta.glob` to find all `.md` files in `/src/routes/docs/`  
✅ **Frontmatter Support**: Extracts title and description from YAML frontmatter  
✅ **Relevance Ranking**: Intelligent scoring based on title matches, content matches, and other factors  
✅ **Content Excerpts**: Generates relevant excerpts around search terms  
✅ **Flexible Matching**: Handles partial matches and word variations  

## How It Works

### 1. Page Discovery
```javascript
// Finds all markdown files in the docs directory
const modules = import.meta.glob('/src/routes/docs/**/*.md', { 
    eager: true, 
    import: 'default',
    query: '?raw'
});
```

### 2. Content Parsing
- Extracts YAML frontmatter (title, description)
- Falls back to first `#` heading if no frontmatter title
- Generates URL-friendly paths from file structure

### 3. Relevance Scoring
The search uses a weighted scoring system:

- **Exact title match**: 100 points
- **Title contains search term**: 50 points
- **Partial title word matches**: 20 points per match
- **Description matches**: 30 points
- **Content matches**: 5 points per match (capped at 25)
- **Short title bonus**: +10 points (for focused content)
- **Has description bonus**: +5 points

### 4. Search Result Format
```javascript
{
    name: "Getting Started",           // Page title
    path: "/docs/general/getting-started", // URL path
    meta: {
        description: "Get started with DaalBot...",
        excerpt: "To get started with DaalBot you first need...",
        // ... any additional metadata from frontmatter
    },
    score: 85                         // Relevance score
}
```

## Usage

### Basic Search
```javascript
import { search } from '$lib/search.js';

const results = await search('getting started');
console.log(results); // Array of matching pages, sorted by relevance
```

### In a Svelte Component
```svelte
<script>
    import { search } from '$lib/search.js';
    
    let query = '';
    let results = [];
    
    async function handleSearch() {
        results = await search(query);
    }
</script>

<input bind:value={query} on:input={handleSearch} />

{#each results as result}
    <a href={result.path}>
        <h3>{result.name}</h3>
        {#if result.meta?.description}
            <p>{result.meta.description}</p>
        {/if}
    </a>
{/each}
```

## File Structure Requirements

Your documentation should follow this structure:

```
src/routes/docs/
├── general/
│   ├── getting-started/
│   │   └── +page.md
│   └── feature-list/
│       └── +page.md
├── commands/
│   ├── autorole/
│   │   └── +page.md
│   └── selfrole/
│       └── +page.md
└── events/
    └── getting-started/
        └── +page.md
```

## Markdown Format

### With Frontmatter (Recommended)
```markdown
---
title: Getting Started
description: Get started with DaalBot by inviting it to your server
---

# Getting Started

Your content here...
```

### Without Frontmatter
```markdown
# Getting Started

Your content here...
```

## Customization

### Adjusting Relevance Scoring
You can modify the `calculateRelevanceScore` function to adjust how pages are ranked:

```javascript
function calculateRelevanceScore(searchTerm, title, description, content) {
    // Modify scoring weights here
    // Example: Increase weight for description matches
    if (descriptionLower.includes(searchTerm)) {
        score += 50; // Increased from 30
    }
    // ... rest of scoring logic
}
```

### Adding Search Filters
You can extend the search to support filters:

```javascript
async function search(input, options = {}) {
    const { category, type } = options;
    
    // Filter by category
    if (category) {
        // Only include pages from specific category
        const categoryPath = `/docs/${category}/`;
        // ... filter logic
    }
}
```

## Performance Considerations

- **Eager Loading**: Uses `eager: true` for immediate availability
- **Raw Content**: Uses `query: '?raw'` for text content access
- **Client-Side**: All searching happens on the client for fast response
- **Caching**: Consider implementing result caching for frequently searched terms

## Troubleshooting

### Import.meta.glob Not Available
This error occurs when running outside of a Vite environment:
```
TypeError: (intermediate value).glob is not a function
```

**Solution**: The search function includes error handling and will gracefully fail outside Vite environments.

### No Results Found
1. Check that your markdown files are in `/src/routes/docs/`
2. Ensure files follow the `+page.md` naming convention
3. Verify frontmatter is properly formatted (YAML between `---`)

### Poor Search Results
1. Add descriptive frontmatter to your pages
2. Use clear, searchable titles
3. Include relevant keywords in your content
4. Adjust scoring weights in `calculateRelevanceScore`

## Example Integration

See `SearchComponent.svelte` for a complete example with:
- Debounced search input
- Loading states
- Result highlighting
- Responsive design
- Keyboard navigation

The search functionality is now ready to use in your DaalBot documentation site!
