<!-- Example Svelte component showing how to use the search function -->
<script>
    import { search } from '$lib/search.js';
    import { onMount } from 'svelte';

    let searchQuery = '';
    /** @type {Array<{name: string, path: string, meta?: any, score: number}>} */
    let searchResults = [];
    let isSearching = false;

    // Debounce search to avoid excessive calls
    /** @type {number | undefined} */
    let searchTimeout;
    
    $: if (searchQuery) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(async () => {
            await performSearch();
        }, 300);
    } else {
        searchResults = [];
    }

    async function performSearch() {
        if (!searchQuery.trim()) {
            searchResults = [];
            return;
        }

        isSearching = true;
        try {
            searchResults = await search(searchQuery);
        } catch (error) {
            console.error('Search error:', error);
            searchResults = [];
        } finally {
            isSearching = false;
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    function handleKeydown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    }
</script>

<div class="search-container">
    <div class="search-input-wrapper">
        <input
            type="text"
            placeholder="Search documentation..."
            bind:value={searchQuery}
            on:keydown={handleKeydown}
            class="search-input"
        />
        {#if isSearching}
            <div class="search-loading">Searching...</div>
        {/if}
    </div>

    {#if searchResults.length > 0}
        <div class="search-results">
            <div class="results-header">
                Found {searchResults.length} result{searchResults.length === 1 ? '' : 's'}
            </div>
            
            {#each searchResults as result}
                <a href={result.path} class="search-result-item">
                    <div class="result-title">{result.name}</div>
                    {#if result.meta?.description}
                        <div class="result-description">{result.meta.description}</div>
                    {/if}
                    {#if result.meta?.excerpt}
                        <div class="result-excerpt">{result.meta.excerpt}</div>
                    {/if}
                    <div class="result-path">{result.path}</div>
                    <div class="result-score">Relevance: {result.score}</div>
                </a>
            {/each}
        </div>
    {:else if searchQuery && !isSearching}
        <div class="no-results">
            No results found for "{searchQuery}"
        </div>
    {/if}
</div>

<style>
    .search-container {
        max-width: 600px;
        margin: 0 auto;
    }

    .search-input-wrapper {
        position: relative;
        margin-bottom: 1rem;
    }

    .search-input {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #e5e7eb;
        border-radius: 0.5rem;
        font-size: 1rem;
        transition: border-color 0.2s;
    }

    .search-input:focus {
        outline: none;
        border-color: #3b82f6;
    }

    .search-loading {
        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0.875rem;
        color: #6b7280;
    }

    .search-results {
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        background: white;
        max-height: 400px;
        overflow-y: auto;
    }

    .results-header {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #e5e7eb;
        font-size: 0.875rem;
        color: #6b7280;
        background: #f9fafb;
    }

    .search-result-item {
        display: block;
        padding: 1rem;
        border-bottom: 1px solid #e5e7eb;
        text-decoration: none;
        color: inherit;
        transition: background-color 0.2s;
    }

    .search-result-item:hover {
        background: #f3f4f6;
    }

    .search-result-item:last-child {
        border-bottom: none;
    }

    .result-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 0.25rem;
    }

    .result-description {
        font-size: 0.875rem;
        color: #4b5563;
        margin-bottom: 0.5rem;
    }

    .result-excerpt {
        font-size: 0.875rem;
        color: #6b7280;
        margin-bottom: 0.5rem;
        line-height: 1.4;
    }

    .result-path {
        font-size: 0.75rem;
        color: #9ca3af;
        font-family: monospace;
    }

    .result-score {
        font-size: 0.75rem;
        color: #9ca3af;
        margin-top: 0.25rem;
    }

    .no-results {
        padding: 2rem;
        text-align: center;
        color: #6b7280;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        background: #f9fafb;
    }
</style>
