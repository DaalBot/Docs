<script>
    let searchValue = '';
    /**
     * @type {{ name: string, path: string, meta?: any }[]}
    */
    let results = [];
    import { search } from '$lib/search'; 

    $: {
        (async () => {
            if (searchValue == '') return results = [];
            results = await search(searchValue);
        })();
    }
</script>

<svelte:head>
    <title>DaalBot Documentation</title>
    <meta name="description" content="The documentation for DaalBot."/>
    <meta name="keywords" content="DaalBot, Discord, Bot, Documentation, Docs"/>
</svelte:head>

<div class="page">
    <div class="content">
        <h1>DaalBot Docs</h1><br/>
        <div class="search">
            <input type="text" bind:value={searchValue} placeholder="Search"/>
            {#if results.length > 0}
                <div class="results">
                    {#each results as result}
                        <a href="/docs{result.path}" style="color: white; text-decoration: none;" class="result">
                            <div style="margin: 5px;">
                                {result.path.replace('/docs/', '').split('/')[0].replace(/\b\w/g, (/** @type {string} */ l) => l.toUpperCase())} > {result.name}
                            </div>
                        </a>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
    <div class="footer">
        <a href="/docs/general/getting-started">
            <span class="next-icon">➡️</span>
            <span class="text">Getting Started</span>
        </a>
    </div>
</div>

<style>
    .page {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 91.5vh;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 3em;
    }

    .search {
        width: 95%;
        padding: 10px;

        background-color: #2f2f2f;
        border: 1px solid #2f2f2f;
        border-radius: 15px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input[type="text"] {
        color: white;

        font-size: 1.5em;

        /* Center text */
        text-align: center;
        background-color: #2f2f2f;
        border: none;

        display: block;

        font-weight: bold;
    }

    .results {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-top: 15px;
    }

    .result {
        width: 75%;
        padding: 10px;

        background-color: #2f2f2f;
        border: 1px solid #2f2f2f;
        border-radius: 15px;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 5px;
    }

    .result:hover {
        background-color: #3f3f3f;

        font-weight: bold;
    }

    .footer {
        position: fixed;
        width: 92.5%;

        background-color: #2f2f2f;

        border: solid 7px #4d4d4d;
        border-radius: 15px;

        left: 50%;
        transform: translateX(-50%);
        bottom: 2em;

        padding: 10px;
        height: 5em;
    }

    .footer a {
        color: white;
        text-decoration: none;

        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;

        gap: 20px;
    }

    @media (max-width: 768px) {
        .footer {
            width: 85%;
        }
    }

    .next-icon {
        font-size: 2em;
    }

    .text {
        font-size: 1.5em;
        font-weight: 550;
    }
</style>