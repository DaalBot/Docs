<script>
    import Sidebar from "../../../../components/Sidebar.svelte";
    import Header from "../../../../components/Header.svelte";
</script>

<Sidebar/>
<Header title="DaalBot Setup - Adding" description="This guide will go through the process of adding DaalBot to your server" type="guide"/>
<div class="page">
    <h2>
        Adding DaalBot to your server
    </h2>
    <p>
        To add DaalBot to your server, you will need to have the <code>Manage Server</code> / <code>Administrator</code> permission. If you have this permission, you can add the bot to your server by clicking the button below.
    </p><br/>
    <a class="invite-button" href="https://lnk.daalbot.xyz/Invite">
        Invite DaalBot
    </a><br/><br/><br/><br/><br/><br/>
    <p>
        After hitting the button above and logging into discord if you havent aready done so, you will be presented with a screen that looks like this:
    </p><br/>
    <img src="https://media.piny.dev/daalbot/website/docs/Invite.png" alt="Screenshot of discord oauth screen" /><br/>
    <p>
        After selecting the server you want to add DaalBot to and hitting Continue, you will be presented with a screen that looks like this:
    </p><br/>
    <img src="https://media.piny.dev/daalbot/website/docs/Invite2.png" alt="Screenshot of discord oauth screen presenting the permissions that DaalBot will use" /><br/>
    <p>
        After hitting Authorize, DaalBot will be added to your server and you will be able to use it.
    </p><br/><br/>

    <div class="nav-buttons">
        <a href="/guides/setup/intro">
            <div class="next-page">
                Previous: Setup Introduction
            </div>
        </a>

        <a href="/guides/setup/permissions">
            <div class="next-page">
                Next: Permissions and Role Hierarchy
            </div>
        </a>
    </div>
</div>

<style>
    code {
        background-color: #2f3136;
        border-radius: 5px;
        padding: 5px;
    }

    img {
        width: 75%;
        height: auto;

        display: block;
        margin: auto;

        border-radius: 1em;
    }

    .invite-button {
        padding-top: 1.5em;
        padding-bottom: 1.5em;
        padding-left: 2.5em;
        padding-right: 2.5em;

        margin-top: 2em;
        margin-bottom: 2em;

        border-radius: 1em;
        border: 1px solid #2f3136;

        text-decoration: none;
        color: white;

        position: absolute;

        left: 50%;

        text-align: center;
    }

    .next-page {
        padding: 5em;
        border-radius: 1em;
        border: 1px solid #2f3136;

        width: 75%;

        text-align: center;

        position: relative;

        margin-right: 25em;

        /* left: 28%; */
        bottom: 1.5em;
    }

    .nav-buttons {
        display: flex;
        justify-content: center;
    }

    a {
        text-decoration: none;
        color: white;
    }
</style>