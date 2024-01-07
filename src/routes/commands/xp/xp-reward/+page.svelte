<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>
<Sidebar/>
<div class="page">
    <Header title="XP-Reward" description="Command that sets a role reward for reaching a certain level" type="command"/>

    <h2>Usage</h2>
    <p><code>/xp-reward [level] [role]</code></p> - This command sets a role reward for reaching a certain level. It takes two required options: 'level', which is the level to grant the reward upon reaching, and 'role', which is the role to grant upon reaching the level.

    <h2>Example</h2>
    <p><code>/xp-reward 10 @Blue</code></p> | <code>Sets the 'Blue' role as a reward for reaching level 10</code>
</div>