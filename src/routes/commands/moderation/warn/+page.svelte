<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
    import Switch from "../../../../components/Switch.svelte";

    let selected = ''
</script>
<Sidebar/>
<div class="page">
    <Header title="Warn" description="Modifies the warns for a user" type="command"/>

    <h2>Subcommands</h2>
    <Switch bind:selected={selected} options={[
        {name: 'Add', value: 'add'},
        {name: 'Remove', value: 'remove'},
        {name: 'List', value: 'list'}
    ]}/>

    {#if selected === 'add'}
        <h2>Options</h2>
        <p><code>Name: User | Type: User</code></p> - The user to add the warn to (required)<br/>
        <p><code>Name: Reason | Type: String</code></p> - The reason for the warning (required)<br/>

        <h2>Example</h2>
        <p><code>/warn add user:@daalbot reason:Being a bot</code></p> | <code>Adds a warning to @daalbot</code>
    {/if}

    {#if selected === 'remove'}
        <h2>Options</h2>
        <p><code>Name: User | Type: User</code></p> - The user to remove the warn from (required)<br/>
        <p><code>Name: ID | Type: String</code></p> - The ID of the warn to remove (required)

        <h2>Example</h2>
        <p><code>/warn remove user:@daalbot id:ds2qas5f6 </code></p> | <code>Removes the warning from from @daalbot</code>
    {/if}

    {#if selected === 'list'}
        <h2>Options</h2>
        <p><code>Name: User | Type: User</code></p> - The user to list the warns for (required)<br/>

        <h2>Example</h2>
        <p><code>/warn list user:@daalbot</code></p> | <code>Lists the warnings for @daalbot</code>
    {/if}
</div>