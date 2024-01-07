<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>

<Sidebar/>
<div class="page">
    <Header title="Cmds" description="Lists all commands" type="command"/>

    <h2>Usage</h2>
    <p><code>/cmds</code></p>
    <br/>

    <h2>Behaviour</h2>
    <p>Lists all commands</p>
</div>

<style>
    * {
        font-family: Poppins, sans-serif;
    }
</style>