<script lang="ts">
	import '$lib/global.css';
    import { onMount } from 'svelte';
	import { page } from '$app/state';

	let metadata: {
		title?: string;
		description?: string;
		keywords?: string;
		author?: string;
	} = {};

    onMount(async() => {
        // If the location has a hash, try to scroll a element matching the innerText to it
        const hash = window.location.hash;
        if (hash) {
            // Look for elements containing the hash text
            const elements = document.querySelectorAll(`*`);
			elements.forEach(element => {
				if (element instanceof HTMLElement && element.innerText.includes(hash.slice(1))) {
					// Scroll to the first matching element
					element.scrollIntoView({ behavior: 'smooth', block: 'start' });
					return;
				}
			});
        }

        window.addEventListener('hashchange', () => {
            const newHash = window.location.hash;
            if (newHash) {
                // Look for elements containing the new hash text
                const elements = document.querySelectorAll(`*`);
                elements.forEach(element => {
                    if (element instanceof HTMLElement && element.innerText.includes(newHash.slice(1))) {
                        // Scroll to the first matching element
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        return;
                    }
                });
            }
        });

		// Import the page module dynamically
		const documentName = page.url.href.split('/').pop();
		const documentCategory = page.url.pathname.split('/')[2];
		const module = await import(`./${documentCategory}/${documentName}/+page.md`);
		metadata = module.metadata || {};
    });
</script>

<svelte:head>
	<title>{metadata.title || 'DaalBot Documentation'}</title>
	<meta name="description" content={metadata.description || 'The official documentation for daalbot'} />
	<meta name="keywords" content={metadata.keywords || 'DaalBot, Discord, Bot, Documentation, Docs'} />
	<meta name="author" content={metadata.author || 'DaalBot Team'} />
	<link rel="icon" href="https://media.piny.dev/DaalBotSquare.png" />

	<meta property="og:title" content={metadata.title || 'DaalBot Documentation'} />
	<meta property="og:description" content={metadata.description || 'The official documentation for daalbot'} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:image" content="https://media.piny.dev/DaalBotSquare.png" />
</svelte:head>

<main class="docs-layout">
	<slot />
</main>

<style>
	.docs-layout {
		max-width: 1300px;
		margin: 0 auto;
		padding: 2rem;
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.docs-layout {
			max-width: 750px;
			padding: 1rem;
		}
	}

	.docs-layout :global(h1) {
		color: #d9d9d9;
		border-bottom: 2px solid #eee;
		padding-bottom: 0.5rem;
		margin-bottom: 1rem;
	}

	.docs-layout :global(h2) {
		color: #d9d9d9;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	.docs-layout :global(h3) {
		color: #d9d9d9;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.docs-layout :global(code) {
		background-color: #666;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
	}

	.docs-layout :global(pre) {
		background-color: #f8f8f8;
		border: 1px solid #ddd;
		border-radius: 5px;
		padding: 1rem;
		overflow-x: auto;
		margin: 1rem 0;
	}

	.docs-layout :global(pre code) {
		background-color: transparent;
		padding: 0;
	}

	.docs-layout :global(blockquote) {
		border-left: 4px solid #ddd;
		padding-left: 1rem;
		margin: 1rem 0;
		color: #aaa;
		font-style: italic;
	}

	.docs-layout :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 5px;
		margin: 1rem 0;
	}

	.docs-layout :global(a) {
		color: #00a2ff;
		text-decoration: none;
	}

	.docs-layout :global(a:hover) {
		text-decoration: underline;
	}

    .docs-layout :global(a:visited) {
        color: #826ae3;
    }

	.docs-layout :global(ul),
	.docs-layout :global(ol) {
		margin: 1rem 0;
		padding-left: 2rem;
	}

	.docs-layout :global(li) {
		margin: 0.5rem 0;
	}

	.docs-layout :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: 1rem 0;
	}

	.docs-layout :global(th),
	.docs-layout :global(td) {
		border: 1px solid #ddd;
		padding: 0.75rem;
		text-align: left;
	}

	.docs-layout :global(th) {
		background-color: #f8f8f8;
		font-weight: bold;
	}
</style>
