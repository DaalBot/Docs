<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
    import Switch from "../../../../components/Switch.svelte";

    let selected = '';
</script>

<Sidebar/>
<div class="page">
    <Header title="Embed" description="Sends an embed" type="command"/>

    <h2>Usage</h2>
    <p><code>/embed [subcommand]</code></p>
    <br/>

    <h2>Subcommands</h2>
    <Switch bind:selected={selected} options={[
        { name: 'Builder', value: 'builder' },
        { name: 'JSON', value: 'json' }
    ]}/>

    {#if selected === 'builder'}
        <p>Description: Sends an embed from command options</p>

        <h3>Options</h3>
        <p><code>Name: Channel | Type: Channel</code></p> - The channel to send the embed in (required)
        <p><code>Name: Title | Type: String</code></p> - The title of the embed
        <p><code>Name: Description | Type: String</code></p> - The description of the embed
        <p><code>Name: Color | Type: String</code></p> - The color of the embed
        <p><code>Name: Image | Type: Attachment</code></p> - The image of the embed
        <p><code>Name: Thumbnail | Type: Attachment</code></p> - The thumbnail of the embed
        <p><code>Name: Footer | Type: String</code></p> - The footer of the embed
        <p><code>Name: Footer image | Type: Attachment</code></p> - The image of the footer
        <p><code>Name: Author | Type: String</code></p> - The author of the embed
        <p><code>Name: Author Image | Type: Attachment</code></p> - The image of the author

        <h3>Example</h3>
        <p><code>/embed builder channel:#general title:Hello World! description:lorem ipsum ut dolore velit minim est ut laborum velit dolor incididunt</code></p>


    {:else if selected === 'json'}
        <p>Description: Sends an embed from JSON</p>

        <h3>Options</h3>
        <p><code>Name: Channel | Type: Channel</code></p><br/>

        <h3>Behaviour</h3>
        <p>Pops up a modal to paste JSON into which will be converted into a embed to be sent in the channel like from a <a href="https://glitchii.github.io/embedbuilder/">embed generator</a></p>
        <img src="https://picsum.photos/1920/1080" alt="Screenshot of modal from 'DaalBot' asking for a discord embed json">
    {/if}
</div>

<style>
    * {
        font-family: Poppins, sans-serif;
    }

    img {
        margin-left: 5em;
        margin-top: 2em;
        margin-bottom: 2em;
        display: block;
        width: 25vw;
        max-height: 25em;
    }

    a {
        color: #7289DA;
    }
</style>