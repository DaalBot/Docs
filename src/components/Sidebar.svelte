<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import commandMap from '$lib/data/commandMap';
    import guideMap from '$lib/data/guideMap';
    let active = '';

    /**
     * @type {Array<{name: string, data: Array<{name: string, url: string}>}>}
    */
    let commandCategories = []

    /**
     * @type {Array<{name: string, data: Array<{name: string, url: string}>}>}
    */
    let guideCategories = []

    for (let i = 0; i < commandMap.length; i++) {
        const command = commandMap[i];
        let category = command.url.replace('/commands/', '').split('/')[0];
        let name = command.name;

        // Set the first letter to uppercase
        name = name.charAt(0).toUpperCase() + name.slice(1);
        category = category.charAt(0).toUpperCase() + category.slice(1);

        if (commandCategories.filter(c => c.name === category).length === 0) {
            commandCategories.push({
                name: category,
                data: [
                    {
                        name: name,
                        url: command.url
                    }
                ]
            });
        } else {
            commandCategories.filter(c => c.name === category)[0].data.push({
                name: name,
                url: command.url
            });
        }
    }

    for (let i = 0; i < guideMap.length; i++) {
        const guide = guideMap[i];
        let category = guide.url.replace('/guides/', '').split('/')[0];
        let name = guide.name;

        // Set the first letter to uppercase
        name = name.charAt(0).toUpperCase() + name.slice(1);
        category = category.charAt(0).toUpperCase() + category.slice(1);

        if (guideCategories.filter(c => c.name === category).length === 0) {
            guideCategories.push({
                name: category,
                data: [
                    {
                        name: name,
                        url: guide.url
                    }
                ]
            });
        } else {
            guideCategories.filter(c => c.name === category)[0].data.push({
                name: name,
                url: guide.url
            });
        }
    }

    if (browser) {
        active = window.location.pathname;
    }

    onMount(() => {
        document.body.style.marginLeft = '19em';
        document.body.style.backgroundColor = '#1e1e1e';
        document.body.style.color = '#fff';

        // Automatically expand the details menu that the active a tag is in
        const detailsElements = document.querySelectorAll('details');
        for (let i = 0; i < detailsElements.length; i++) {
            const aElements = detailsElements[i].querySelectorAll('a');
            for (let j = 0; j < aElements.length; j++) {
                if (aElements[j].classList.contains('selected')) {
                    detailsElements[i].setAttribute('open', '');
                }
            }
        }
    });
</script>

<div class="sidebar" id="sidebar-element">
    <a href='/' class:selected={active === '/'}>Home</a>
    <hr>
    <details>
        <summary>Commands</summary>
        {#each commandCategories as category}
        <details>
            <summary>{category.name}</summary>
            {#each category.data as command}
                <a href={command.url} class:selected={active === command.url}>{command.name}</a>
            {/each}
        </details>
        {/each}
    </details>
    <details>
        <summary>Guides</summary>
        {#each guideCategories as category}
        <details>
            <summary>{category.name}</summary>
            {#each category.data as guide}
                <a href={guide.url} class:selected={active === guide.url}>{guide.name}</a>
            {/each}
        </details>
        {/each}
    </details>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    .sidebar {
        font-family: 'Poppins', sans-serif;
        position: fixed;
        left: 0;
        top: 0;
        width: 250px; /* Adjusted width */
        height: 100%; /* Adjusted height */
        background-color: #202225;
        border-radius: 1em;
        padding: 10px; /* Added padding */
        margin: 0; /* Removed margin */
        z-index: 1; /* Added z-index to make sidebar appear on top */
    }

    .selected {
        background-color: #2f3136;
    }

    a {
        color: #fff;
        text-decoration: none;
        padding: 10px;
        display: block;
        border-radius: 1em;
        margin: 5px;
    }

    a:hover {
        background-color: #2f3136;
        transition: background-color 0.2s ease-in-out;
    }

    details {
        background-color: #202225;
        margin: 5px;
        padding: 5px;
        position: relative;
        width: auto; /* Adjusted width */
        border-radius: 1em;
    }

    details summary {
        list-style: none;
        cursor: pointer;
    }

    details summary::-webkit-details-marker {
        position: absolute;
        right: 0;
    }

    details summary::after {
        content: '▶';
        position: absolute;
        right: 10px; /* Adjusted position */
        font-size: 0.8em;
    }

    details[open] summary::after {
        content: '▼';
    }

    details a {
        display: block;
    }
</style>