<script>
    import Sidebar from "../../../components/Sidebar.svelte";
    import Header from "../../../components/Header.svelte";

    async function show_meth3_disclaimer() {
        let meth3_disclaimer = document.getElementById("meth3_disclaimer") ?? new HTMLElement;
        meth3_disclaimer.style.display = "block";
    }

    async function hide_meth3_disclaimer() {
        let meth3_disclaimer = document.getElementById("meth3_disclaimer") ?? new HTMLElement;
        meth3_disclaimer.style.display = "none";
    }
</script>

<Sidebar/>
<Header title="Getting Message IDs" description="Learn how to get message IDs" type="other"/>
<br/>
<div class="page">
    <h2>
        Method 1: Message Link
    </h2>
    <p>
        The easiest way to get a message ID is to use the message link. To get the message link, right click on the message and click "Copy Message Link". The message link will look something like this: <code>https://discord.com/channels/123456789012345678/123456789012345678/123456789012345678</code>. The message ID is the last number in the link. However you do not need to extract this as most features in daalbot will automatically extract the message ID from the link.
    </p>
    <br/>
    <hr/>
    <br/>
    <h2>
        Method 2: Developer Mode
    </h2>
    <p>
        This method is a bit more complicated to set up but is useful once enabled. To enable developer mode, go to your Discord settings, then go to "Advanced" and enable "Developer Mode". Once enabled, you can right click on a message and click "Copy Message ID". This will copy the message ID to your clipboard.
    </p>
    <br/>
    <hr/>
    <br/>
    <h2>
        <div id="meth3_disclaimer" style="display: none;">
            <p>
                <b>Disclaimer:</b> This method is new and may not work as expected or may not be out at all in your server. If you encounter any issues, please report them in the <a href="https://lnk.daalbot.xyz/HQ">support server</a>.
            </p>
        </div>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        Method 3: "Get Message Info" Button<span style="color: grey;" on:mouseenter={show_meth3_disclaimer} on:mouseleave={hide_meth3_disclaimer}>*</span>
    </h2>
    <p>
        This method uses a feature in DaalBot that allows you to get information about a message by right clicking on the message then hovering over "Apps >" and clicking the "Get Message Info" button. This will cause DaalBot to reply with info about the message including the message ID.
    </p>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    .page {
        font-family: 'Poppins', sans-serif;
    }

    code {
        background-color: #2f3136;
        border-radius: 5px;
        padding: 5px;
    }

    #meth3_disclaimer {
        font-size: 12px;

        z-index: 1;
    }
</style>