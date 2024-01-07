<script>
    export let query = '';
    /**
     * @type {Array<{name: string, url: string}>}
    */
    export let results = [];

    let selectedResult = {
        name: '',
        url: ''
    };

    import { browser } from '$app/environment';
    import commandMap from '$lib/data/commandMap'

    if (browser) {
        // Detect Ctrl + K
        window.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault(); // Prevent the browser from opening the search bar
                openSearch();
            }
        });
    }

    $: {
        query = query.toLowerCase();
        
        if (query.length > 0) {
            (async () => {
                results = await findBestResults();
            })();
        } else {
            results = [];
        }
    }

    async function findBestResults() {
        /**
         * @type {Array<{name: string, url: string}>}
         */
        let bestResults = [];

        /**
         * @type {Array<{name: string, url: string}>}
        */
        let overrideResults = [];

        const filteredCommands = commandMap.filter(c => (c.name.includes(query) && c.name !== 'explination')); // Filter out commands that don't match the query / are just explination pages

        if (query.startsWith('/')) overrideResults = filteredCommands;

        for (let i = 0; i < filteredCommands.length; i++) {
            const command = filteredCommands[i];
            const name = command.name;

            if (name.includes(query)) {
                bestResults.push({
                    name: `/${name}`,
                    url: command.url
                });
            }
        }

        selectedResult = (bestResults[0] || overrideResults[0]) ?? { name: '', url: '' }; // Set the selected result to the first result if there is one, otherwise set it to an empty object
        return overrideResults.length > 0 ? overrideResults : bestResults; // Return override results if there are any, otherwise return best results
    }

    export async function closeSearch() {
        query = '';
        results = [];

        if (browser) {
            const searchPopupModal = document.getElementById('search-popup-modal');
            const searchPopupOverlay = document.getElementById('search-popup-overlay');

            if (searchPopupModal && searchPopupOverlay) {
                searchPopupModal.style.display = 'none';
                searchPopupOverlay.style.display = 'none';
            }
        }
    }

    export async function openSearch() {
        if (browser) {
            const searchPopupModal = document.getElementById('search-popup-modal');
            const searchPopupOverlay = document.getElementById('search-popup-overlay');

            if (searchPopupModal && searchPopupOverlay) {
                searchPopupModal.style.display = 'flex';
                searchPopupOverlay.style.display = 'block';
            }
        }
    }

    if (browser) {
        window.addEventListener('keydown', (e) => {
            const searchVisable = document.getElementById('search-popup-modal')?.style.display !== 'none';
            if (!searchVisable) return; 
            
            // Focus the search bar
            const searchInput = document.getElementById('search-popup-input')
            if (searchInput) searchInput.focus();

            if (e.key === 'Escape') {
                if (searchVisable) {
                    closeSearch();
                }
            }

            if (e.key === 'ArrowUp') {
                if (searchVisable) {
                    e.preventDefault(); // Prevent scrolling of text area when arrow keys are pressed
                    const index = results.indexOf(selectedResult);
                
                    if (index > 0) {
                        selectedResult = results[index - 1];

                        // Scroll to the selected result
                        const selectedResultElement = document.querySelector('.searchitem-selected');
                        if (selectedResultElement) selectedResultElement.scrollIntoView({
                            // behavior: 'smooth',
                            block: 'end',
                            inline: 'start'
                        });
                    }
                }
            }

            if (e.key === 'ArrowDown') {
                if (searchVisable) {
                    e.preventDefault(); // Prevent scrolling of text area when arrow keys are pressed
                    const index = results.indexOf(selectedResult);
                
                    if (index < results.length - 1) {
                        selectedResult = results[index + 1];

                        // Scroll to the selected result
                        const selectedResultElement = document.querySelector('.searchitem-selected');
                        if (selectedResultElement) selectedResultElement.scrollIntoView({ 
                            // behavior: 'smooth', 
                            block: 'end', 
                            inline: 'start'
                         });
                    }
                }
            }

            if (e.key === 'Enter') {
                if (searchVisable) {
                    e.preventDefault(); // Prevent the browser from doing other things when enter is pressed
                    if (selectedResult.url) {
                        window.location.href = selectedResult.url;
                    }
                }
            }
        });
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="overlay" id="search-popup-overlay" on:click={() => closeSearch()} style="display: none;"></div>
<div class="search" id="search-popup-modal" style="display: none;">
    <input type="text" placeholder="Search" bind:value={query} id="search-popup-input"/>
    <div class="results">
        {#each results as result}
            <a href="{result.url}" class:searchitem-selected="{selectedResult.url === result.url}">{result.name}</a>
        {/each}
    </div>
</div>

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9998;
    }

    .search {
        position: fixed;

        /* Center of page */
        margin: auto;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;

        width: 25%;
        height: 50%;

        background-color: #3e385f;
        border-radius: 1em;
        color: #fff;

        z-index: 9999;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        /* Add shadow */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    .search input {
        width: 50%;
        height: 2em;

        margin-bottom: 1em;

        border-radius: 1em;
        border: none;
        outline: none;

        padding-left: 1em;
        padding-right: 1em;

        font-family: 'Poppins', sans-serif;
        font-size: 1.5em;
    }

    .search .results {
        width: 50%;
        height: 50%;

        overflow-y: scroll;
    }

    .search .results a {
        display: block;
        margin-bottom: 1em;

        padding: 0.25em;

        border-radius: 1em;

        text-align: center;

        text-decoration: none;
        color: #fff;
        font-weight: bold;
        font-size: 1.5em;

        font-family: 'Poppins', sans-serif;
    }

    .search .results a:hover {
        background-color: #3a3c41;
        transition: background-color 0.2s ease-in-out;
    }

    .searchitem-selected {
        background-color: #2f3136;
    }
</style>