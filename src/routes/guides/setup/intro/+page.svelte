<script>
    import Sidebar from "../../../../components/Sidebar.svelte";
    import Header from "../../../../components/Header.svelte";
</script>

<Sidebar/>
<Header title="DaalBot Setup - Intro" description="This guide will go through the basics of setting up daalbot in your server" type="guide"/>
<div class="page">
    <h2>
        Introduction to DaalBot
    </h2>
    <p>
        DaalBot is a open source multi-purpose discord bot designed to enchance your server experience. In this guide, we will go through the basics of setting up DaalBot in your server.
    </p>

    <h2>
        Prerequisites
    </h2>
    <p>
        Before we start, you will need to have the following:
    </p>
    <ul>
        <li>
            A server where you have the <code>Administrator</code> permission for the full functionality of the bot. However, you can still add the bot to your server as long as you have the <code>Manage Server</code> permission.
        </li>
        <li>
            A role that is high in the role hierarchy to be able to manage the bot's role.
        </li>
    </ul>

    <a href="/guides/setup/adding">
        <div class="next-page">
            Next: Adding DaalBot to your server
        </div>
    </a>
</div>

<style>
    code {
        background-color: #2f3136;
        border-radius: 5px;
        padding: 5px;
    }

    .next-page {
        padding: 5em;
        border-radius: 1em;
        border: 1px solid #2f3136;

        min-width: 50%;

        display: block;

        text-align: center;

        position: absolute;

        left: 28%;
        bottom: 1.5em;
    }

    a {
        text-decoration: none;
        color: white;
    }
</style>