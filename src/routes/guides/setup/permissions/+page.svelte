<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
    import Notice from "../../../../components/Notice.svelte";

    import featureMap from "$lib/data/featureMap.js";
</script>
<Sidebar/>
<Header title="DaalBot Setup - Permissions" description="This guide will go through the permissions and role hierarchy of DaalBot" type="guide"/>
<div class="page">
    <h1>Permissions</h1>
    To use DaalBot to its full potential it should have the <code>Administrator</code> permission. However, if you do not want to give the bot the <code>Administrator</code> permission, you can give it the following permissions depending on your needs:<br/>
    
    <br/>
    <Notice type="warning" height="7.5em">
        This guide assumes the bot already has these following permissions:<br/>
        Send Messages,
        Read Message History,
        Embed Links,
        Use External Emojis,
        Add Reactions
    </Notice><br/>

    <details>
        <summary>Expand for feature list and what permissions they need</summary>
        <div class="feature-list">
            {#each featureMap as feature}
                {#if feature.permissions.length > 0}
                    <div class="feature">
                        <h3>{feature.name}</h3>
                        <ul>
                            {#each feature.permissions as permission}
                                <li><code>{permission}</code></li><br/>
                            {/each}
                        </ul>
                    </div>
                {/if}
            {/each}
        </div>
    </details>

    <h1>Role Hierarchy</h1>
    Ideally the bot should have the highest role in the server, However if you do not want to give the bot the highest role in the server make sure it is above the roles you want it to manage.<br/><br/>
    <img src="https://media.piny.dev/daalbot/website/docs/Role1.png" alt="Screenshot of discord role menu showing DaalBot being one of the top roles in the server only below one role"/><br/>
</div>

<style>
    code {
        background-color: #2f2f2f;
        color: #f8f9fa;
        padding: 0.2em;
        border-radius: 5px;

        font-family: Poppins, sans-serif;
    }

    img {
        border-radius: 2%;

        display: block;

        margin: auto;
    }

    details {
        display: block;

        background-color: #2e2e2e;

        padding: 1em;
        border-radius: 5px;
        font-size: large;

        margin-right: 1em;
    }
</style>