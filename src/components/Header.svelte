<script>
    import { browser } from "$app/environment";
    import Popup from "./Popup.svelte";
    /**
     * @type {string}
    */
    export let title;

    /**
     * @type {string}
    */
    export let description;

    /**
     * @type {"command" | "other"}
    */
    export let type;

    let clickable = false;

    if (type === "command") {
        clickable = true;
    }

    async function command_title_click() {
        if (!browser) return; // No SSR loading popups early

        // Write the command to the clipboard
        await navigator.clipboard.writeText(`/${title.toLowerCase().replace(/ /g, "")}`);

        // Notify the user
        new Popup({
            target: document.body,
            props: {
                text: `Copied "/${title.toLowerCase().replace(/ /g, "")}" to clipboard!`
            }
        });
    }
</script>

{#if clickable === true}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <h1 id="page-title"><b on:click={command_title_click}>{title}</b></h1>
{:else}
    <h1 id="page-title"><b>{title}</b></h1>
{/if}
<p id="page-description">{description}</p>
<hr/>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    #page-title {
        margin-bottom: 0px;
        font-family: poppins, sans-serif;
    }

    #page-description {
        margin-top: 0px;
    }

    h1 {
        font-size: 3em;
    }
</style>