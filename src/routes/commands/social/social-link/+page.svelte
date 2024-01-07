<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
    import Switch from "../../../../components/Switch.svelte";

    let subCommandGroup = '';
    let options = [
        {name: 'Twitch', value: 'twitch'},
        {name: 'YouTube', value: 'youtube'},
        {name: 'Twitter', value: 'twitter'}
    ];
</script>
<Sidebar/>
<div class="page">
    <Header title="Social-Link" description="Social command that links a social media account to a Discord channel" type="command"/>

    <Switch bind:selected={subCommandGroup} {options} />

    {#if subCommandGroup === 'twitter'}
        <h2>Usage</h2>
        <p><code>/social-link {subCommandGroup} add account channel [role]</code></p> - This command links a Twitter account to a Discord channel. It takes two required options: 'account' for the Twitter account that you want to link, and 'channel' for the Discord channel to send alerts to. There is an optional option for a role to ping when an alert is sent.

        <h2>Example</h2>
        <p><code>/social-link {subCommandGroup} add daalbot #alerts @everyone</code></p> | <code>Links daalbot's Twitter account to the #alerts channel and pings everyone when an alert is sent.</code>
    {:else if subCommandGroup === 'youtube'}
        <h2>Usage</h2>
        <p><code>/social-link {subCommandGroup} add channel feed_channel [role]</code></p> - This command links a YouTube account to a Discord channel. 'channel' should be the channel ID. You can find a guide on how to get this ID <a href="https://lnk.daalbot.xyz/1">here</a>. 'feed_channel' is the Discord channel to send alerts to. There is an optional option for a role to ping when an alert is sent.

        <h2>Example</h2>
        <p><code>/social-link {subCommandGroup} add daalbot #alerts @everyone</code></p> | <code>Links daalbot's YouTube account to the #alerts channel and pings everyone when an alert is sent.</code>
    {:else}
        <h2>Usage</h2>
        <p><code>/social-link {subCommandGroup} add channel feed_channel [role]</code></p> - This command links a Twitch account to a Discord channel. 'channel' can be a Twitch username or ID. 'feed_channel' is the Discord channel to send alerts to. There is an optional option for a role to ping when an alert is sent.

        <h2>Example</h2>
        <p><code>/social-link {subCommandGroup} add daalbot #alerts @everyone</code></p> | <code>Links daalbot's Twitch account to the #alerts channel and pings everyone when an alert is sent.</code>
    {/if}
</div>