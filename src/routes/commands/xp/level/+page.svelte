<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>
<Sidebar/>
<div class="page">
    <Header title="Level" description="Command that shows someone's level and how much XP they need to level up" type="command"/>

    <h2>Usage</h2>
    <p><code>/level [user]</code></p> - This command shows someone's level and how much XP they need to level up. It takes one required option: 'user', which is the user whose level and XP you want to check.

    <h2>Example</h2>
    <p><code>/level @daalbot</code></p> | <code>Shows daalbot's level and how much XP they need to level up</code>
</div>