<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>
<Sidebar/>
<div class="page">
    <Header title="Hello" description="Replies with 'Hello There!'" type="command"/>

    <h2>Usage</h2>
    <p><code>/hello</code></p> - Simply type this command to get a 'Hello There!' response.

    <h2>Example</h2>
    <p><code>/hello</code></p> | <code>Literally just replies with Hello There!</code>
</div>