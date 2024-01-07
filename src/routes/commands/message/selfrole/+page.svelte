<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>

<Sidebar/>
<div class="page">
    <Header title="Selfrole" description="Sends a self role menu to a channel" type="command"/>

    <h2>Usage</h2>
    <p><code>/selfrole [options]</code></p>
    <br/>

    <h2>Options</h2>
    <p><code>Name: Channel | Type: Channel</code></p> - The channel to send the self role menu in (required)
    <p><code>Name: Role | Type: Role</code></p> - The role to give when selected from the menu (required)
    <p><code>Name: Message ID | Type: String</code></p> - A message ID or link to a message to edit and add / modify the self role menu (required)
    <p><code>Name: Placeholder | Type: String</code></p> - The placeholder text for the menu (optional - default: "Select a role")

    <h2>Example</h2>
    <p><code>/selfrole channel:#general role:@Blue message_id:123456789012345678 placeholder:Select your favourite colour</code></p>
</div>