<script>
    import { onMount } from "svelte";
    import SvelteMarkdown from "svelte-markdown";
    import homeIcon from '$lib/images/home.svg';
    import homeIconFilled from '$lib/images/home-filled.svg';
    import './md.css';

    let content = `# Loading...`;

    let isMobile = false;

    // @ts-ignore
    export let data;

    const styleizedTitle = data.item.replace('-', ' ').replace(/\b\w/g, (/** @type {string} */ l) => l.toUpperCase());

    onMount(async() => {
        async function loadMd() {
            const res = await fetch(`/md/${data.category}/${data.item}.md`).then(res => res.text());
    
            content = res;
        }

        await loadMd();

        // @ts-ignore
        isMobile = window.navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);

        // Reload the page if the user changes the route
        document.querySelectorAll('a').forEach((/** @type {HTMLAnchorElement} */ a) => {
            a.addEventListener('click', () => {
                setTimeout(async() => {
                    await loadMd();
                }, 100)
            });
        });

        // Reload the page if the user changes the pathname
        window.addEventListener('popstate', async() => {
            await loadMd();
        });
    });
</script>

<svelte:head>
    <title>{styleizedTitle} - DaalBot Docs</title>
</svelte:head>

<div class="page {isMobile ? 'mode-phone' : 'mode-pc'}">
    <div class="overlay">
        <a href="/">
            <img src={isMobile ? homeIconFilled : homeIcon} alt="Home" />
        </a>
    </div>
    <div class="content">
        <SvelteMarkdown source={content} options={{ gfm: true }}/>
    </div>
</div>

<style>
    .content {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }

    .overlay a {
        position: fixed;
        top: 1rem;
        left: 1rem;
        color: white;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .mode-phone .overlay a {
        position: absolute;

        /* Center */
        top: 2.5em;
        left: 50%;
        transform: translate(-50%, -50%);

        /* background-color: #363636;
        padding: 7.5px;
        border-radius: 50%; */
    }

    .mode-phone .overlay a img {
        height: 50px;
        width: 50px;
    }

    .mode-pc .overlay a img {
        height: 50px;
        width: 50px;
    }

    .mode-pc .overlay a {
        top: 2rem;
        left: 2rem;
    }
</style>