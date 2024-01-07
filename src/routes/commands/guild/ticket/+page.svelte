<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
    import Switch from "../../../../components/Switch.svelte";

    let selected = '';
</script>

<Sidebar/>
<div class="page">
    <Header title="Ticket" description="Configures ticketing for the server" type="command"/>

    <h2>Usage</h2>
    <p><code>/ticket [subcommand] [value]</code></p>
    <br/>

    <h2>Subcommands</h2>
    <Switch bind:selected={selected} options={[
        {name: 'Send', value: 'send'},
        {name: 'Close', value: 'close'},
        {name: 'Category', value: 'category'},
        {name: 'Permissions', value: 'permissions'},
        {name: 'Purge', value: 'purge'}
    ]}/>

    {#if selected === 'send'}
        <h3>Description:</h3>
        <p>Sends a ticket panel to a channel</p>

        <h3><b>Options:</b></h3>
        <p><b>Name: channel | Type: Channel</b></p> - The channel to send the ticket message to
        <p><b>Name: title | Type: String</b></p> - The title of the ticket panel
        <p><b>Name: colour | Type: String</b></p> - The colour of the ticket panel
        <hr/>
        <br/>

        <h3>Behaviour</h3>
        <p>Sends a panel to a channel where users can press a button to create a ticket</p>
    {:else if selected === 'close'}
        <h3>Description:</h3>
        <p>Closes a ticket</p>
        
        <h3><b>Options:</b></h3>
        <p><b>Name: channel | Type: Channel</b></p> - The channel of the ticket you want to close
        <p><b>Name: transcript | Type: Boolean</b></p> - Whether to send a transcript of the ticket to logs or not
        <hr/>
        <br/>

        <h3>Behaviour</h3>
        <p>When a ticket is closed it will automatically delete the channel and send a transcript of the ticket to logs</p>
    {:else if selected === 'category'}
        <h3>Description:</h3>
        <p>Configures the category where tickets are created</p>

        <h3><b>Options:</b></h3>
        <p><b>Name: category | Type: Channel</b></p> - The category where tickets are created
        <hr/>
        <br/>

        <h3>Behaviour</h3>
        <p>Controls in which category ticket channels are created</p>
    {:else if selected === 'permissions'}
        <h3>Description:</h3>
        <p>Configures the permissions for the ticketing system</p>

        <h3><b>Options:</b></h3>
        <p><b>Name: role | Type: Role</b></p> - The role to configure permissions for
        <p><b>Name: allow | Type: Boolean</b></p> - Whether to allow or deny the role to view the ticket
        <hr/>
        <br/>

        <h3>Behaviour</h3>
        <p>When a ticket is created it will use the set permissions as a reference and update the channel permissions accordingly</p>
    {:else if selected === 'purge'}
        <h3>Description:</h3>
        <p>Deletes all tickets in the server</p>

        <h3><b>Options: None</b></h3>
        <hr/>
        <br/>

        <h3>Behaviour</h3>
        <p>Once confirmed using the button in the response this will automatically go through and delete all tickets from both the server and daalbots database useful for if the ticket system gets clogged up and loses track</p>
    {/if}
</div>

<style>
    * {
        font-family: Poppins, sans-serif;
    }
</style>