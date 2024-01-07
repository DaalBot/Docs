<!-- Note: This page isnt a actual command but instead explaining why /pen* commands exist -->
<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>
<Sidebar/>
<div class="page">
    <Header title="Pen Commands" description="Special category of commands for bot owners" type="other"/>

    <h2>About</h2>
    <p>Commands that start with <code>/pen</code> are a special category of commands that mimic the names of other commands but have different permissions. These commands allow bot owners to run them without needing dangerous permissions within a server.</p>

    <h2>Usage</h2>
    <p><code>/pen[command]</code></p> - Simply type this command followed by the name of the command you want to run with bot owner permissions.

    <h2>Example</h2>
    <p><code>/penuserinfo JohnDoe</code></p> | <code>Replies with info about JohnDoe, but can be run by bot owners without needing dangerous permissions.</code>
</div>