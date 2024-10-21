<div class="page-header" style="text-align: center;">
    <h1>DaalBot API</h1>
    <p>The documentation for the <code>api.daalbot.xyz</code> API</p>
</div>
<hr/><br/>

<div class="page-contents">
    <h2>Introduction</h2>
    <p>
        The DaalBot API is a RESTful API that allows you to interact with the DaalBot Discord bot. Some of the routes are public and do not require authentication, while others require you to authenticate with the discord oauth tokens (Learn more in the Authentication section).<br/><br/>
        The API is hosted at <code>api.daalbot.xyz</code> and routes follow the <code>/[METHOD]/[CATEGORY]/[ITEM]/</code> format for unauthorized routes and <code>/dashboard/[CATEGORY]/[ITEM]/</code> for authorized routes.
    </p>
    <br>
    <h2>Authentication</h2>
    <p>
        The DaalBot API relies on the Discord OAuth2 system for authentication. However, you can't use any discord oauth token to authenticate with the API. You need to use the token that was generated when you authorized the DaalBot application. <br><br>
        DaalBot can share the token with your service by redirecting the user to <a href="https://daalbot.xyz/Dashboard/User/get-token"><code>https://daalbot.xyz/Dashboard/User/get-token</code></a> with the query parameter <code>return</code> set to the URL you want the user to be redirected to after the token is shared (You can also set a <code>name</code> parameter to replace the URL in the page although the url will be visible still to prevent fake urls). If the user accepts, they will be redirected to your URL with the query parameter <code>code</code> set to the access code. However if the user denies, they will be redirected to your URL and the <code>code</code> parameter will be set to <code>denied</code>.<br><br>
        You can then use the access code in the <code>Authorization</code> header to authenticate with the API.
    </p>
    <br>
    <div class="route-area">
        <h2>Routes [Coming soon]</h2>
        <p>
            The following are the routes that are available in the DaalBot API.
        </p>
        <br>
        <!-- TODO: Add the routes from docs.json in DaalBot/API -->
    </div>
</div>

<style>
    .page-header {
        margin-bottom: 2rem;
    }

    .page-header h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }

    .page-header p {
        font-size: 1.25rem;
    }

    h2 {
        font-size: 2rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        color: white;

        line-height: 2;
    }

    a {
        color: #826ae3;
    }

    code {
        font-size: 1rem;
        background-color: #333;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;

        /* Prevent line from wrapping on a code block */
        white-space: nowrap;
    }

    .page-contents {
        margin-top: 2rem;

        padding-left: 20em;
        padding-right: 20em;
    }
</style>