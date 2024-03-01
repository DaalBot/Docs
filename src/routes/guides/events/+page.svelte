<script>
    import Header from "../../../components/Header.svelte";
    import Sidebar from "../../../components/Sidebar.svelte";

</script>
<Sidebar />
<div class="page">
    <Header title="Events" description="The full documentation for everything inside of the DaalBot Events system" type="guide" />

    <h2>Possible Events</h2>
    <details>
        <summary>Click to expand</summary>
        <p>Here are the possible events that you can listen to:</p>
        <ul>
            <li>Message Created</li>
            <li>Message Updated</li>
            <li>Message Deleted</li>
            <li>Member Joined</li>
            <li>Member Left</li>
        </ul>
    </details>

    <h2>Writing Events</h2>
    <p>Events are written using javascript and come with some standard properties</p>

    <h2>Event properties</h2>
    <p>Events are handled by a standered javascript callback which accepts a data variable named according to the input event (eg. message, member, etc) which are simply discord.js objects and infomation about them can be found in the <a href="https://discordjs.guide">discord.js docs</a> and a kit named utils which contains the following:</p>

    <details>
        <summary>Click to expand</summary>
        <p>The utils object contains the following functions</p>

        <ul>
            <li>
                <h3>
                    utils.webhooks.send()
                </h3>
                <p>Send a message to a webhook (accepts url and discord.js <code>Message Payload</code> under the "data" parameter)</p>
            </li>
            <li>
                <h3>
                    utils.libaries
                </h3>
                <p>Contains the following libaries:</p>
                <ul>
                    <li><a href="https://npmjs.com/package/axios">Axios</a></li>
                    <li><a href="https://npmjs.com/package/discord.js">Discord.js</a> (as "discord")</li>
                </ul>
            </li>
            <li>
                <h3>
                    utils.variables
                </h3>
                <p>Allows modification of variables</p>
                <ul>
                    <li>
                        <h4>
                            utils.variables.set()
                        </h4>
                        <p>Sets a variable accepts variable name and data</p>
                    </li>
                    <li>
                        <h4>
                            utils.variables.get()
                        </h4>
                        <p>Gets a variable accepts variable name and returns null if not found</p>
                    </li>
                </ul>
            </li>
        </ul>
    </details>

    <h2>Example</h2>
    <p>Here is an example of a message create event designed to create a counting channel</p>
    <code>
        <p>
            if (message.channel.name === "counting") &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;const lastCount = parseInt(utils.variables.get("lastCount") ?? 0);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;if (parseInt(message.content) !== lastCount + 1) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message.delete();
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125; else &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;utils.variables.set("lastCount", parseInt(message.content));
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &#125;
        </p>
    </code>

    <h2>Disallowed Features</h2>
    <p>Due to the nature of running code on a server, some features are disallowed</p>
    <details>
        <summary>Click to expand</summary>
        <p>Here are the disallowed features:</p>
        <ul>
            <li>Filesystem access</li>
            <li>Process data access</li>
            <li>Module importing</li>
            <li>Obfuscated Code</li>
            <li>Eval statements</li>
            <li>Infinite Loops</li>
            <li>Client property access</li>
        </ul>
</div>

<style>
    details {
        display: block;

        background-color: #2e2e2e;

        padding: 1em;
        border-radius: 5px;
        font-size: large;

        margin-right: 1em;
    }

    code {
        color: #f8f9fa;
        padding: 0.2em;
        border-radius: 5px;

        font-family: Poppins, sans-serif;
    }

    a {
        color: #00a2ff;
    }
</style>