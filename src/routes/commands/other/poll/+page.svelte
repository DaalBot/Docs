<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
    import Switch from "../../../../components/Switch.svelte";

    let options = [
        { value: 'yes_no', name: 'Yes/No' },
        { value: 'multiple_choice', name: 'Multiple Choice' }
    ];

    let selected = 'yes_no';
</script>
<Sidebar/>
<div class="page">
    <Header title="Poll" description="Creates a poll with a dropdown of options" type="command"/>

    <h2>Usage</h2>
    <p><code>/poll</code></p> - Simply type this command to create a poll. A dropdown will appear with two options: 'Multiple Choice' and 'Yes/No'.

    <h2>Options</h2>
    <Switch bind:selected={selected} {options}/>

    <h2>Example</h2>
    {#if selected === 'yes_no'}
        <p><code>/poll</code></p> | <code>Creates a Yes/No poll. A modal will pop up asking for the question and the time limit.</code>
    {:else if selected === 'multiple_choice'}
        <p><code>/poll</code></p> | <code>Creates a Multiple Choice poll. A modal will pop up asking for the question and the time limit. After submitting, another modal will pop up asking for the choices.</code>
    {/if}
</div>