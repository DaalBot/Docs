<script>
    import Header from "../../../../components/Header.svelte";
    import Notice from "../../../../components/Notice.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";

</script>
<Sidebar />
<div class="page">
    <Header title="Beta" description="Allows servers to opt in or out of the beta for a specific feature" type="command" />

    <br/>
    <Notice type="warning" height="5.25em" padding="0.5" extStyle="height: 5.5em; background-color: #2f2f2f;">
        <p>Running this command may cause certain features inside of DaalBot to break.</p>
    </Notice>

    <h2>Usage</h2>
    <p><code>/beta change [Module] [Enabled]</code></p>

    <h2>Example</h2>
    <p><code>/beta change Social / Twitter true</code></p> | <code>Enables the beta for the twitter module</code>

    <h2>Behaviour</h2>
    <p>Allows servers to opt in or out of betas that may cause unreliable behaviour in the module but allows early access to new features</p>
</div>