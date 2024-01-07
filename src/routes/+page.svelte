<script>
    import Sidebar from "../components/Sidebar.svelte";
    import SearchIcon from "$lib/icons/search.svg";
    import { browser } from "$app/environment";

    async function openSearch() {
        if (browser) {
            const searchModal = document.getElementById('search-popup-modal')
            if (searchModal) searchModal.style.display = 'flex';

            const searchOverlay = document.getElementById('search-popup-overlay')
            if (searchOverlay) searchOverlay.style.display = 'block';
        }
    }
</script>

<body>
    <Sidebar/>
    <div class="topbar">
        <div class="left">
            <a href="/">Home</a>
        </div>
        <div class="right">
            <button on:click={openSearch}><img src={SearchIcon} alt=""/></button>
        </div>
    </div>
    <div class="page">
        <h1><b>DaalBot Docs</b></h1>
        <p>
            Welcome to the DaalBot documentation! Here you can find all the information you will need to use DaalBot. To get started select a item from the sidebar or search for something by hitting the search button in the top right or hitting CTRL + K.
        </p>
    </div>
    <div class="footer">
        <span style="text-align: center; margin: auto; display: block;"><a href="/acknowledgements">Acknowledgements</a> | <a href="https://lnk.daalbot.xyz/Privacy">Privacy</a></span>
    </div>
</body>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    body {
        background-color: #1e1e1e;
        color: #fff;
        height: 100vh;
        margin: 0px;

        font-family: 'Poppins', sans-serif;

        z-index: 0;
    }

    h1 {
        font-size: 3em;
    }

    .page {
        padding-top: 5em;
    }

    .topbar {
        background-color: #343a4b;
        padding: 1em;

        margin: auto;

        width: 81%;
        margin-top: 1em;
        margin-bottom: 1em;

        z-index: 1;

        border-radius: 1rem;

        position: fixed;

        display: flex;
    }

    .topbar .left {
        width: 50%;
        text-align: left;
    }

    .topbar .right {
        width: 50%;
        text-align: right;
    }

    .topbar a {
        color: #fff;
        text-decoration: none;

        font-size: 1.5em;
    }

    .topbar a:hover {
        color: #fff;
        text-decoration: underline;
    }

    .footer {
        background-color: #2f2f2f;
        padding: 2.5em;

        width: 82%;
        margin-top: 1em;
        margin-left: -2.2em;

        z-index: 1;

        position: fixed;
        bottom: 0;
    }

    .footer a {
        color: #fff;
        text-decoration: none;
    }
</style>