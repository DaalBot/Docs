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
     * @type {"command" | "other" | "guide"}
    */
    export let type;

    let clickable = false;

    const clickable_types = [
        "command",
        "guide"
    ];

    if (clickable_types.includes(type)) {
        clickable = true;
    }

    async function title_click() {
        if (!browser) return; // No SSR loading popups early

        switch (type) {
            case "command":
                command_title_click();
                break;
            case "guide":
                guide_title_click();
                break;
            default:
                break;
        }
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

    async function guide_title_click() {
        if (!browser) return; // No SSR loading popups early

        // Copy the current url
        await navigator.clipboard.writeText(window.location.href);

        // Notify the user
        new Popup({
            target: document.body,
            props: {
                text: `Copied link to clipboard!`
            }
        });
    }
</script>

{#if clickable === true}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <h1 id="page-title"><b on:click={title_click}>{title}</b></h1>
{:else}
    <h1 id="page-title"><b>{title}</b></h1>
{/if}
<p id="page-description">{description}</p>
<hr/>

<style>
    #page-title {
        margin-bottom: 0px;
        font-family: Poppins, sans-serif;
    }

    #page-description {
        margin-top: 0px;

        font-family: Poppins, sans-serif;
    }

    h1 {
        font-size: 3em;
    }
</style>