<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>
<Sidebar/>
<div class="page">
    <Header title="XP" description="Command that modifies a user's XP" type="command"/>

    <h2>Usage</h2>
    <p><code>/xp [user] [amount] [action]</code></p> - This command modifies a user's XP. It takes three required options: 'user', which is the user whose XP you want to modify; 'amount', which is the amount of XP to add, remove, or set; and 'action', which is either 'Add', 'Remove', or 'Set'.

    <h2>Example</h2>
    <p><code>/xp @daalbot 100 Add</code></p> | <code>Adds 100 XP to daalbot</code>
    <p><code>/xp @daalbot 50 Remove</code></p> | <code>Removes 50 XP from daalbot</code>
    <p><code>/xp @daalbot 200 Set</code></p> | <code>Sets daalbot's XP to 200</code>
</div>