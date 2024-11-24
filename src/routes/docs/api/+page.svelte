<script>
    import { onMount } from "svelte";

    /**
     * JSON representation of the documentation
     * @type {{release: string, routes: Array<{path: string, description: string, method: string, route: string, params: {[key: string]: string}}>}}}
     */
    let docs = {
        release: '', // Release ID the documentation was generated from
        routes: [
            {
                path: 'routes/get/test/ping.js',
                description: 'Replies with "pong" if the API is working',
                method: 'GET',
                route: '/get/test/ping',
                params: {
                    'none': 'No parameters required'
                }
            }
        ]
    };

    /**
     * @type {{ [key: string]: string }}
     */
    const methodVarient = {
        GET: 'primary',
        POST: 'success',
        PUT: 'warning',
        DELETE: 'danger'
    };

    onMount(async() => {
        const res = await fetch('https://cdn.jsdelivr.net/gh/DaalBot/API/docs.json');
        docs = await res.json();
    }) // Fetch the documentation from the API repository
</script>

<svelte:head>
    <title>DaalBot API Documentation</title>
    <meta name="description" content="The documentation for the api.daalbot.xyz API">
    <meta name="keywords" content="daalbot, api, documentation">
    <meta name="author" content="DaalBot">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.17.1/cdn/themes/dark.css" />
    <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.17.1/cdn/components/tag/tag.js"></script>
</svelte:head>

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
        DaalBot can share the token with your service by redirecting the user to <a href="https://daalbot.xyz/Dashboard/User/get-token"><code>https://daalbot.xyz/Dashboard/User/get-token</code></a> with the query parameter <code>return</code> set to the URL you want the user to be redirected to after the token is shared (You can also set a <code>name</code> parameter to replace the URL in the page although the url will be visible still to prevent fake urls). If the user accepts, they will be redirected to your URL with the query parameter <code>accesscode</code> set to the access code. However if the user denies, they will be redirected to your URL and the <code>code</code> parameter will be set to <code>denied</code>.<br><br>
        You can then use the access code in the <code>Authorization</code> header to authenticate with the API.
    </p>
    <br>
    <div class="route-area">
        <h2>Routes</h2>
        <p>
            The following are the routes that are available in the DaalBot API.
        </p>
        <br>

        <p>
            <strong>Release:</strong> {docs.release} | You can click on the route to view the source code on GitHub or click the background to view the parameters and other info.
        </p>
        <div class="route-list">
            {#each docs.routes as route}
                <div class="card" style="margin-bottom: 1rem;">
                    <details>
                        <summary>
                            <div class="card-header">
                                <div class="card-title">
                                    <sl-tag variant={methodVarient[route.method]}>{route.method}</sl-tag>
                                    <span><a href="https://github.com/DaalBot/API/blob/master/{route.path}" class="route_source-link">{route.route}</a></span>
                                </div>
                                <div class="card-subtitle">{route.description}</div>
                            </div>
                        </summary>
                        <div class="card-body">
                            <div class="card-text">
                                <h3>Parameters</h3>
                                <div class="params-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {#each Object.keys(route.params) as param}
                                                <tr>
                                                    <td>{param}</td>
                                                    <td>{route.params[param]}</td>
                                                </tr>
                                            {/each}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
            {/each}
        </div>
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

        /* Prevent line from wrapping on a code block unless screen is too small */
        white-space: nowrap;
    }

    .page-contents {
        margin-top: 2rem;

        padding-left: 5em;
        padding-right: 5em;
    }

    .card {
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #333;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 1600px) {
        .card-header {
            flex-direction: column;
            gap: 0.5rem;
        }

        code {
            white-space: normal;
        }
    }

    .card-title {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .params-table {
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;

        border: 1px solid #555;
    }

    th, td {
        padding: 0.5rem;
        border-bottom: 1px solid #555;
    }

    th {
        text-align: left;
    }

    /* Create a line between name side and description side */
    td {
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 1px;
            background-color: #555;
        }
    }

    /* Add a line on the right edge of the table */
    td:last-child {
        border-right: 1px solid #555;
    }

    details > summary {
        list-style: none;
    }

    /* or for Webkit-specific browsers */
    details > summary::-webkit-details-marker {
        display: none;
    }

    .card:hover {
        transition: background-color 0.25s;
        cursor: pointer;
        background-color: #444;
    }
</style>