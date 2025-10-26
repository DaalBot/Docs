<script>
    import { page } from '$app/state';
    import { search } from '$lib/search';

    let query = page.url.searchParams.get('q') || '';

    /**
     * @type {{ name: string, path: string, meta?: any }[]}
    */
    let results = [];

    $: {
        (async () => {
            if (query == '') return results = [];
            results = await search(query);
        })();
    }
</script>

<main>
    <input type="text" bind:value={query} placeholder="Search..." class="search-input" />
    <center>
        {#if results.length > 0}
            <div class="results">
                {#each results as result}
                    <a href="{result.path}" style="color: white; text-decoration: none;" class="result">
                        <div style="margin: 5px;">
                            <h2>
                                {result.name}
                            </h2>
                            <p>
                                {result.path.replace('/docs/', '').split('/')[0].replace(/\b\w/g, (/** @type {string} */ l) => l.toUpperCase())} • {result.meta?.description || 'No description available.'}
                            </p>
                        </div>
                    </a>
                {/each}
            </div>
        {:else}
            <p>No results found.</p>
        {/if}
    </center>
</main>

<style>
    main {
        padding: 2rem;
    }

    .search-input {
        width: calc(100% - 2rem);
        padding: 0.75rem 1rem;
        font-size: 1.2rem;
        border: 2px solid #555;
        background-color: #2f2f2f;
        color: #d9d9d9;
        font-size: 2rem;
        border-radius: 5px;
    }

    .results {
        width: fit-content;

        margin-top: 1rem;

        padding: 1rem;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .result:nth-child(1) {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .result:last-child {
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .result {
        padding: 0.5rem;
        border: 1px solid #555;
        border-radius: 10px;

        font-size: 1.2rem;

        transition: background-color 0.2s;
        background-color: #3a3a3a;

        &:hover {
            background-color: #555;
        }
    }

    @media (max-width: 600px) {
        .results {
            width: 100%;
            margin: 0;
            margin-top: 1rem;
            padding: 0rem;
        }

        .result {
            font-size: 1rem;
            width: calc(100% - 1rem);
            margin: 0;
        }
    }

    .result p {
        margin: 0;
        margin-top: 0.25rem;
        color: #cccccc;
        font-size: 0.9rem;
    }

    h2 {
        margin: 0;
        color: #ffffff;
    }
</style>