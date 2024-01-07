<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>
<Sidebar/>
<div class="page">
    <Header title="Lookup" description="Command that looks up a Server, User, or Role by ID" type="command"/>

    <h2>Usage</h2>
    <p><code>/lookup [type] [id]</code></p> - This command looks up a Server, User, or Role by ID. It takes two required options: 'type', which is either 'Server', 'User', or 'Role', and 'id', which is the ID of the Server, User, or Role you want to look up.

    <h2>Example</h2>
    <p><code>/lookup User 1234567890</code></p> | <code>Looks up the User with the ID '1234567890'</code>
    <p><code>/lookup Role 1234567890</code></p> | <code>Looks up the Role with the ID '1234567890'</code>
    <p><code>/lookup Server 1234567890</code></p> | <code>Looks up the Server with the ID '1234567890'</code>
</div>