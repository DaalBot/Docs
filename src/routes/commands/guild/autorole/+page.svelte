<script>
    import Sidebar from "../../../../components/Sidebar.svelte";
    import Switch from "../../../../components/Switch.svelte";

    let selected = 'add';

    // Reactivity
    $: {
        if (selected === 'add') {
            // Load HTML for 'add'
        } else if (selected === 'remove') {
            // Load HTML for 'remove'
        } else if (selected === 'list') {
            // Load HTML for 'list'
        }
  }
</script>

<body>
    <Sidebar/>
    <div class="page">
        <h1 id=page-title><b>Autorole</b></h1>
        <p id="page-description">Modifies / Lists the roles assigned to a user when they join the server</p>
        <hr/>
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

    h1 {
        font-size: 3em;
    }

    #page-title {
        margin-bottom: 0px;
    }

    #page-description {
        margin-top: 0px;
    }
</style>