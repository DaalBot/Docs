<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>
<Sidebar/>
<div class="page">
    <Header title="UserInfo" description="Replies with info about a user (Deprecated)" type="command"/>

    <h2>Note</h2>
    <p>This command is now deprecated and replaced by <code>/lookup</code>.</p>

    <h2>Usage</h2>
    <p><code>/userinfo [user]</code></p> - Simply type this command followed by a user to get info about them. 

    <h2>Example</h2>
    <p><code>/userinfo JohnDoe</code></p> | <code>Replies with info about JohnDoe</code>
</div>