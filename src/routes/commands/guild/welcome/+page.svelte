<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
    import Switch from "../../../../components/Switch.svelte";

    let selected = '';
</script>

<Sidebar/>
<div class="page">
    <Header title="Welcome" description="Configures welcome messages for the server" type="command"/>

    <h2>Usage</h2>
    <p><code>/welcome [options]</code></p>
    <br/>

    <h2>Options</h2>
    <p><b>Name: Channel | Type: Channel</b></p> - The channel where welcome messages are sent
    <p><b>Name: Message | Type: String</b></p> - The message to send when a user joins (&#123;user&#125; will be replaced with by the user's mention)
    <p><b>Name: Embed | Type: String</b></p> - The JSON representation of the embed to send when a user joins (supports variables)
    <hr/>
    <br/>

    <h2>Behaviour</h2>
    <p>Sends a message to a channel when a user joins</p>
</div>

<style>
    * {
        font-family: Poppins, sans-serif;
    }
</style>