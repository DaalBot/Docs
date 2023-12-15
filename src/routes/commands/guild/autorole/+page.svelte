<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
    import Switch from "../../../../components/Switch.svelte";

    let selected = 'add';
</script>

<body>
    <Sidebar/>
    <div class="page">
        <Header title="Auto role" description="Modifies / Lists the roles assigned to a user when they join the server" type="command"/>

        <h2>Usage</h2>
        <p><code>/autorole [subcommand] [role]</code></p>
        <br/>
        <h2>Subcommands</h2>
        <Switch bind:selected={selected} options={[{name: 'add', value: 'add'}, {name: 'remove', value: 'remove'}, {name: 'list', value: 'list'}]}/>
        {#if selected === 'add'}
            <h3>Description:</h3>
            <p>Adds a role to the list of roles added to server members when they join</p>
            <br/>
            <h3><b>Options:</b></h3>
            <p><b>Name: role | Type: Role</b></p> - The role to add to the user when they join the server
        {:else if selected === 'remove'}
            <h3>Description:</h3>
            <p>Removes a role from the list of roles added to server members when they join</p>
            <br/>
            <h3><b>Options:</b></h3>
            <p><b>Name: role | Type: Role</b></p> - The role to remove from the list
        {:else if selected === 'list'}
            <h3>Description:</h3>
            <p>Lists the roles added to server members when they join</p>
            <br/>
            <h3><b>Options: None</b></h3>
        {/if}
    </div>
</body>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    body {
        background-color: #1e1e1e;
        color: #fff;
        height: 100vh;
        margin: 0px;

        font-family: 'Poppins', sans-serif;
    }

    code {
        background-color: #2f3136;
        border-radius: 5px;
        padding: 5px;

        font-family: Poppins, sans-serif;
    }
</style>