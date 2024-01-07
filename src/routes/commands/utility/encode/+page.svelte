<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>
<Sidebar/>
<div class="page">
    <Header title="Encode" description="Command that encodes text to base64" type="command"/>

    <h2>Usage</h2>
    <p><code>/encode base64 [text]</code></p> - This command encodes text to base64. It takes one required option: 'text', which is the text you want to encode.

    <h2>Example</h2>
    <p><code>/encode base64 Hello world</code></p> | <code>Encodes the text 'Hello world' to base64</code>
</div>