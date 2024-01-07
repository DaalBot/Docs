<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>

<Sidebar/>
<div class="page">
    <Header title="Role" description="Adds or removes a role from a user" type="command"/>

    <h2>Usage</h2>
    <p><code>/role [user] [role] [+/-]</code></p>
    <br/>

    <h2>Options</h2>
    <p><code>Name: User | Type: User</code></p> - The user to add or remove the role from (required)<br/>
    <p><code>Name: Role | Type: Role</code></p> - The role to add or remove (required)<br/>
    <p><code>Name: Action | Type: String</code></p> - Whether to add or remove the role (required)

    <h2>Example</h2>
    <p><code>/role user:daalbot role:@moderator action:add</code></p>
</div>