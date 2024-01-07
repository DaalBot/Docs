<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>
<Sidebar/>
<div class="page">
    <Header title="Decode" description="Command that decodes text from base64" type="command"/>

    <h2>Usage</h2>
    <p><code>/decode base64 [text]</code></p> - This command decodes text from base64. It takes one required option: 'text', which is the base64 encoded text you want to decode.

    <h2>Example</h2>
    <p><code>/decode base64 SGVsbG8gd29ybGQ=</code></p> | <code>Decodes the base64 encoded text 'SGVsbG8gd29ybGQ=' to 'Hello world'</code>
</div>