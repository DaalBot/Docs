<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>

<Sidebar/>
<div class="page">
    <Header title="Kick" description="Kicks a user from the server" type="command"/>

    <h2>Usage</h2>
    <p><code>/kick [user] [reason]</code></p>
    <br/>

    <h2>Options</h2>
    <p><code>Name: User | Type: User</code></p> - The user to kick (required)<br/>
    <p><code>Name: Reason | Type: String</code></p> - The reason for the kick (required)

    <h2>Example</h2>
    <p><code>/kick user:daalbot reason:becoming sentient</code></p>
</div>