<script>
    import { onMount } from "svelte";

    /**
     * @typedef {{ description: string, type: string, required: boolean }} RouteInput
    */

    /**
     * JSON representation of the documentation
     * @type {Array<
     * {
     * method: string,
     * route: string,
     * meta: {
        description: string;
        body: Record<string, { description: string, type: string, required: boolean, example?: string }> | null;
        query: Record<string, { description: string, type: string, required: boolean, example?: string }> | null;
        authorization: 'None' | 'Guild' | 'Locked' | 'User' | 'CI';
        returns: Record<number, { type: string, example: string | null }[]> | null;
        comment: string | null;
      }
     * }
     * >}
     */
    let docs = []

    /**
     * Format: "[METHOD]:[ROUTE]"
     * @type {string[]}
     */
    let expandedRoutes = [];

    let expandedLast = 0;

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
        const res = await fetch('https://cdn.jsdelivr.net/gh/DaalBot/API@ts-rewrite/docs.json');
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
    <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.17.1/cdn/components/tooltip/tooltip.js"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/components/visually-hidden/visually-hidden.js"></script>
</svelte:head>

<div class="page-header" style="text-align: center;">
    <h1>API</h1>
</div>
<hr/><br/>

{#snippet ParamTable(/** @type {Record<string, {description:string, type:string, required:boolean, example?:string}>} */ input)}
    <table class="param-table">
        <thead>
            <tr>
                <th>Paramater</th>
                <th>Description</th>
                <th>Type</th>
                <th>Required</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            {#each Object.entries(input) as [key, value]}
                <tr>
                    <td>
                        <code>{key}</code>
                    </td>
                    <td>
                        {value.description}
                    </td>
                    <td>
                        {value.type}
                    </td>
                    <td>
                        {value.required ? 'Yes' : 'No'}
                    </td>
                    <td>
                        {#if value.example}
                            <code>{value.example}</code>
                        {:else}
                            No example
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
{/snippet}

<div class="page-contents">
    <h1>Introduction</h1>
    <p>
        The DaalBot API is a RESTful API that allows you to interact with DaalBot and its features. The API is designed to be easy to use and understand, now with new and improved documentation! (Unlike V1 which was all AI generated documentation this is all hand written)
    </p>
    <br>
    <h1>Authentication</h1>
    <p>
        There are two types of authentication that mosts users can use (others are for internal use only):
    </p>
    <ul>
        <li>
            <b>User</b>: This is the kind of authentication and is used by the dashboard, it requires a discord oauth token from the bot and can be used to perform actions on multiple guilds with one token or as a specific user.
        </li>
        <li>
            <b>Guild</b>: This can be used to create automated systems that can interact with the bot through the API. For example, you can use this with the event template in the CLI to automatically upload your events on save.
        </li>
    </ul>

    <h2>
        Obtaining a User Token
    </h2>
    <p>
        In order to obtain a user token, you need to get the user to login to the daalbot dashboard (they will be prompted to do so if they aren't already). Once they are logged in, you can send them to the following URL: <code>https://daalbot.xyz/Dashboard/User/get-token</code>
        <br/>
        <br/>
        This page accepts a two query parameters:
    </p>
    <ul>
        <li>
            <code>return</code> - The URL to redirect the user to after they have logged in. This is required. (if set to <code>https://daalbot.xyz/show</code>, it will simply show the token in a popup instead of redirecting. This is useful for testing; however, it is not recommended for production use)
        </li><br/>
        <li>
            <code>name</code> - The name of your app, by default your redirect URL will be shown as your app name. When specified the name will be shown instead in most places however your redirect URL will also be shown to allow the user to know where they are being redirected to. This is optional.
        </li>
    </ul>
    <h2>
        Obtaining a Guild Key
    </h2>
    <p>
        In order to obtain a guild key, you need to first be in the DaalBot support server. If you are not you can join [here](https://go.daalbot.xyz/HQ). Once you are in the server, go to a channel where you can run commands and run the command <code>/api keys generate</code>, this will walk you through the process of generating a key and how to use it. You can only generate a key for a guild that you are the owner of.
    </p>
    <h2>
        Using dashboard routes
    </h2>
    <p>
        Dashboard routes require either a guild key or a user token to be passed in the authorization header. The format for the authorization header is simply <code>Authorization: ['Guild' | 'User'] [Token]</code>, you also need to pass the guild id in the query; however, this is already expressed in the per route documentation.
    </p>
    <br>
    <div class="route-area">
        <h1>Routes</h1>
        <p>
            The following are the routes that are available in the DaalBot API.
        </p>

        <p>
            You can click on the route to view the source code on GitHub or click the background to view the parameters and other info.
        </p>
        <div class="route-list">
            {#each docs as route}
                <div class="card">
                    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
                    <div class="card-header" on:click={() => {
                        if (expandedLast - Date.now() > 500) return;
                        if (expandedRoutes.includes(route.method.toUpperCase() + ':' + route.route)) {
                            expandedRoutes = expandedRoutes.filter(r => r !== route.method.toUpperCase() + ':' + route.route);
                        } else {
                            expandedRoutes.push(route.method.toUpperCase() + ':' + route.route);

                            expandedRoutes = JSON.parse(JSON.stringify(expandedRoutes)); // Force Svelte to re-render the component
                        }
                        expandedLast = Date.now();
                    }}>
                        <div class="card-title">
                            <sl-tag variant={methodVarient[route.method.toUpperCase()]} pill>{route.method.toUpperCase()}</sl-tag>
                            <a href="https://github.com/DaalBot/API/blob/ts-rewrite/src/routes/{route.route.includes('/dashboard') ? 'dashboard/' : ''}{route.method}{route.route.replace('dashboard/', '')}.ts" target="_blank">
                                <b>
                                    <code>{route.route}</code>
                                </b>
                            </a>
                            <p style="font-size: 0.85rem; color: #aaa;">
                                {route.meta.description}
                            </p>
                        </div>
                        <div class="card-extra">
                            <sl-visually-hidden>
                                <button>
                                    Click to {expandedRoutes.includes(route.method.toUpperCase() + ':' + route.route) ? 'collapse' : 'expand'} the route
                                </button>
                            </sl-visually-hidden>
                            <sl-tooltip content="{route.meta.authorization == "User" ?
                                'This route requires a authorization header with a discord oauth token ("User <token>")'
                                : route.meta.authorization == "Guild" ?
                                'This route requires a authorization header with a guild key (you still need to provide a guild id query, "Guild <key>")'
                                : route.meta.authorization == "Locked" ?
                                'This route is only intended to be called by the bot itself, you cannot use this route'
                                : route.meta.authorization == "CI" ?
                                'This route is used for CI/CD and can only be triggered by pushing to the master branch of the API repository'
                                : route.meta.authorization == "None" ?
                                'This route does not require additional authorization. If you see this on a dashboard route, it means that you can use any kind of dashboard token'
                                : 'Something went wrong, we could not find the description for this authorization type'
                            }">
                                <sl-tag variant="info" pill>Authorization: {route.meta.authorization}</sl-tag>
                            </sl-tooltip>
                        </div>
                    </div>
                    <div class="card-contents" class:expanded={expandedRoutes.includes(route.method.toUpperCase() + ':' + route.route)}>
                        Description: {route.meta.description}<br/>
                        {#if route.route.startsWith('/dashboard') && route.method != 'get'}
                            Comment (Logged when route is called): {route.meta.comment}
                        {/if}
                        <div class="card-body">
                            <h3>Body</h3>
                            {#if route.meta.body}
                                {@render ParamTable(route.meta.body)}
                            {:else}
                                <p>No body required</p>
                            {/if}
                            <h3>Query</h3>
                            {#if route.meta.query}
                                {@render ParamTable(route.meta.query)}
                            {:else}
                                <p>No query required</p>
                            {/if}
                            
                            <h3>
                                Returns
                            </h3>
                            {#if Object.entries(route.meta.returns ?? {}).length > 0}
                                <table class="param-table">
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Type</th>
                                            <th>Example</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {#each Object.entries(route.meta.returns ?? {}) as [key, value]}
                                            {#each value as v}
                                                <tr>
                                                    <td>{key}</td>
                                                    <td>{v.type}</td>
                                                    <td>{v.example ? v.example : 'No example'}</td>
                                                </tr>
                                            {/each}
                                        {/each}
                                    </tbody>
                                </table>
                            {:else}
                                <p>This route doesn't have documentation for the return type yet, Wan't to help fix this? Open a PR for the file found by clicking the underlined route above!</p>
                            {/if}
                        </div>
                    </div>
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

    h1 {
        font-size: 3rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
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
        color: white;
        text-decoration: underline;
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

        margin-bottom: 1rem;
        transition: all 0.3s ease;
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

    .card:hover {
        transition: background-color 0.25s;
        cursor: pointer;
        background-color: #444;
    }

    .route-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .card-contents {
        display: none;

        background-color: #222;
        padding: 1rem;
        border-radius: 0.5rem;
    }

    .card-contents.expanded {
        display: block;
        margin-top: 1rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;

        background-color: #222;
    }

    th, td {
        padding: 0.5rem;
        text-align: left;
        border-bottom: 1px solid #444;
    }
</style>