<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>

<Sidebar/>
<div class="page">
    <Header title="Stats" description="Shows bot statistics" type="command"/>

    <h2>Usage</h2>
    <p><code>/stats</code></p>
    <br/>

    <h2>Behaviour</h2>
    <p>Shows bot statistics</p>
</div>

<style>
    * {
        font-family: Poppins, sans-serif;
    }
</style>