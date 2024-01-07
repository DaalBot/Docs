<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>
<Sidebar/>
<div class="page">
    <Header title="Ping" description="Replies with 'Pong'" type="command"/>

    <h2>Usage</h2>
    <p><code>/ping</code></p> - Simply type this command to get a 'Pong' response.

    <h2>Example</h2>
    <p><code>/ping</code></p> | <code>Replies with 'Pong'</code>
</div>