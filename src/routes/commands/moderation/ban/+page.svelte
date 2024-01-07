<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>

<Sidebar/>
<div class="page">
    <Header title="Ban" description="Bans a user from the server" type="command"/>

    <h2>Usage</h2>
    <p><code>/ban [options]</code></p>
    <br/>

    <h2>Options</h2>
    <p><code>Name: User | Type: User</code></p> - The user to ban (required)
    <p><code>Name: Reason | Type: String</code></p> - The reason for the ban (required)

    <h2>Example</h2>
    <p><code>/ban user:daalbot reason:Being a big meanie</code></p>
</div>