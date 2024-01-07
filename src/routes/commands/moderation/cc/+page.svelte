<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>

<Sidebar/>
<div class="page">
    <Header title="CC" description="Deletes the last x amount of messages within the last 24h from a channel" type="command"/>

    <h2>Usage</h2>
    <p><code>/cc [amount]</code></p>
    <br/>

    <h2>Options</h2>
    <p><code>Name: Amount | Type: Number</code></p> - The amount of messages to delete (required)

    <h2>Example</h2>
    <p><code>/cc 10</code></p>
</div>