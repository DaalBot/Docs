<script>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    let active = '';

    if (browser) {
        active = window.location.pathname;
    }

    onMount(() => {
        document.body.style.marginLeft = '12em';
    });
</script>

<div class="sidebar" id="sidebar-element">
    <a href='/' class:selected={active === '/'}>Home</a>
    <hr>
    <details>
        <summary>Commands</summary>
        <a href='/commands/addemote' id="commands-addemote" class:selected={active === '/commands/addemote'}>addemote</a>
    </details>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    .sidebar {
        font-family: 'Poppins', sans-serif;
        position: fixed;
        left: 0;
        top: 0;
        width: 150px; /* Adjusted width */
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