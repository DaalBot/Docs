<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
    
</script>

<Sidebar/>
<div class="page">
    <Header title="Verify" description="Configures verification for the server" type="command"/>

    <h2>Usage</h2>
    <p><code>/verify [options]</code></p>
    <br/>

    <h2>Options</h2>
    <p><b>Name: Verified Role | Type: Role</b></p> - The role to give to users when they verify
    <p><b>Name: Channel | Type: Channel</b></p> - The channel where users verify
    <p><b>Name: Message ID | Type: String</b></p> - If used the message id will be edited instead of sending a new message
    <hr/>

    <h2>Behaviour</h2>
    <p>Creates a verification message that when clicked on a user will recive the verified role</p>
</div>

<style>
    * {
        font-family: Poppins, sans-serif;
    }
</style>