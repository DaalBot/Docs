<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>

<Sidebar/>
<div class="page">
    <Header title="Send" description="Sends a message to a channel" type="command"/>

    <h2>Usage</h2>
    <p><code>/send [options]</code></p>
    <br/>

    <h2>Options</h2>
    <p><code>Name: Channel | Type: Channel</code></p> - The channel to send the message in (required)
    <p><code>Name: Text | Type: String</code></p> - The message to send (required)

    <h2>Example</h2>
    <p><code>/send channel:#general text:Hello World!</code></p>

    <h2>Notes</h2>
    <p>For more advanced messages, use the <a href="/commands/message/embed">embed</a> command</p>
</div>

<style>
    a {
        color: #7289da;

        text-decoration: none;
    }
</style>