<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
    import Switch from "../../../../components/Switch.svelte";
    
    let selected = '';
</script>

<Sidebar/>

<div class="page">
    <Header title="Logs" description="Configures the what daalbot logs in the server" type="command"/>

    <h2>Usage</h2>
    <p><code>/logs [subcommand] ([channel] / [event])</code></p>
    <br/>
    <h2>Subcommands</h2>
    <Switch bind:selected={selected} options={[
        {name: 'Channel', value: 'channel'},
        {name: 'Toggle', value: 'toggle'},
        {name: 'Exclude', value: 'exclude'}
    ]}/>

    {#if selected === 'channel'}
        <h3>Description:</h3>
        <p>Configures the channel where daalbot logs events</p>
        <br/>
        <h3><b>Options:</b></h3>
        <p><b>Name: channel | Type: Channel</b></p> - The channel send logged events to.
    {:else if selected === 'toggle'}
        <h3>Description:</h3>
        <p>Toggles whether daalbot logs a specific event or not</p>
        <br/>
        <h3><b>Options:</b></h3>
        <p><b>Name: event | Type: String</b></p> - The event to toggle logging for
        <p><b>Name: enabled | Type: Boolean</b></p> - Whether to enable or disable logging for the event
    {:else if selected === 'exclude'}
        <h3>Description:</h3>
        <p>Excludes a channel from triggering logs</p>
        <br/>
        <h3><b>Options:</b></h3>
        <p><b>Name: channel | Type: Channel</b></p> - The channel to exclude from logging
    {/if}
</div>

<style>
    * {
        font-family: Poppins, sans-serif;
    }
</style>