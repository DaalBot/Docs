<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>
<Sidebar/>
<div class="page">
    <Header title="Define" description="Command that defines a word using dictionaryapi.dev" type="command"/>

    <h2>Usage</h2>
    <p><code>/define [word]</code></p> - This command defines a word using dictionaryapi.dev. It takes one required option: 'word', which is the word you want to define.

    <h2>Example</h2>
    <p><code>/define life</code></p> | <code>Defines the word 'life' using dictionaryapi.dev</code>
</div>