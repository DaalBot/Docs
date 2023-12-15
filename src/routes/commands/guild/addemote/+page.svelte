<script>
    import Header from "../../../../components/Header.svelte";
    import Sidebar from "../../../../components/Sidebar.svelte";
</script>

<Sidebar/>
<Header title="Add Emote" description="Adds an emote to the server" type="command"/>

<h2>Usage</h2>
<p><code>/addemote [emoji]</code></p>

<hr/>
<h2>Options:</h2>
<p><b>Name</b>: <code>emoji</code> | <b>Type</b>: <code>String</code></p> - The emoji to add

<hr/>
<h2>Examples:</h2>
<p><code>/addemote :DaalBot:</code></p>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    h2 {
        font-family: Poppins, sans-serif;
    }

    code {
        background-color: #2f3136;
        border-radius: 5px;
        padding: 5px;

        font-family: Poppins, sans-serif;
    }
</style>