<script>

    import Sidebar from "../../../../components/Sidebar.svelte";
    import Header from "../../../../components/Header.svelte";
    import Switch from "../../../../components/Switch.svelte";

    let subCommandGroup = '';
    let subCommand = '';
</script>
<Sidebar/>
<div class="page">
    <Header title="Config" description="Configures DaalBot for the server" type="command"/>

    <h2>Usage</h2>
    <p><code>/config [subcommand] [value]</code></p>
    <br/>

    <h2>Subcommand Groups</h2>
    <Switch bind:selected={subCommandGroup} 
        options={[
            { name: 'channels', value: 'channels' }
        ]}
    />

    {#if subCommandGroup === 'channels'}
        <h3>Description:</h3>
        <p>Configures channel related settings in daalbot</p>
        <br/>

        <h3>Subcommands:</h3>
        <Switch bind:selected={subCommand} options={[
            { name: 'levels', value: 'levels' },
            { name: 'logs', value: 'logs' }
        ]}/>

        {#if subCommand === 'levels'}
            <h3>Description:</h3>
            <p>Configures the channel where level up messages are sent</p>
            <br/>

            <h3><b>Options:</b></h3>
            <p><b>Name: channel | Type: Channel</b></p> - The channel where level up messages are sent
        {:else if subCommand === 'logs'}
            <h3>Description:</h3>
            <p>Configures the channel where logs are sent</p>
            <br/>

            <h3><b>Options:</b></h3>
            <p><b>Name: channel | Type: Channel</b></p> - The channel where logs are sent
        {/if}
    {/if}
</div>