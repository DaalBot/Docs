<script>
    /**
     * @type {string}
    */
    export let text;

    // Check if there are other popups on the page and if so remove them
    let popups = document.querySelectorAll("div.popup");
    for (let i = 0; i < popups.length; i++) {
        popups[i].remove();
    }

    // Remove the popup after 5 seconds
    setTimeout(() => {
        /**
         * @type {HTMLElement}
         */
        // @ts-ignore
        const popupElement = document.querySelectorAll("div.popup")[0]; // Not sure why but svelte hates when i just use querySelector or getElementById so i have to use querySelectorAll and then get the first element

        popupElement.remove();
    }, 5000);
</script>

<center>
    <div class="popup">
        <p>{text}</p>
    </div>
</center>

<style>
    /* Align popup in bottom right */
    .popup {
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 10px;
        padding: 10px;
        background-color: #2f3136;
        border-radius: 1em;
        color: #fff;
        font-family: 'Poppins', sans-serif;
    }
</style>