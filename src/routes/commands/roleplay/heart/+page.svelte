<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>
<Sidebar/>
<div class="page">
    <Header title="Heart" description="Roleplay command that takes a user as input" type="command"/>

    <h2>Usage</h2>
    <p><code>/heart [user]</code></p> - Simply type this command followed by a user to send them a heart.

    <h2>Example</h2>
    <p><code>/heart daalbot</code></p> | <code>Sends a heart to daalbot</code>
</div>