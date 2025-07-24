<script>
	// You can add any common logic for all markdown pages here
	import '../global.css';
</script>

<main class="markdown-content">
	<slot />
</main>

<style>
	.markdown-content {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		line-height: 1.6;
	}

	.markdown-content :global(h1) {
		color: #333;
		border-bottom: 2px solid #eee;
		padding-bottom: 0.5rem;
		margin-bottom: 1rem;
	}

	.markdown-content :global(h2) {
		color: #555;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	.markdown-content :global(h3) {
		color: #666;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.markdown-content :global(code) {
		background-color: #f4f4f4;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
	}

	.markdown-content :global(pre) {
		background-color: #f8f8f8;
		border: 1px solid #ddd;
		border-radius: 5px;
		padding: 1rem;
		overflow-x: auto;
		margin: 1rem 0;
	}

	.markdown-content :global(pre code) {
		background-color: transparent;
		padding: 0;
	}

	.markdown-content :global(blockquote) {
		border-left: 4px solid #ddd;
		padding-left: 1rem;
		margin: 1rem 0;
		color: #666;
		font-style: italic;
	}

	.markdown-content :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 5px;
		margin: 1rem 0;
	}

	.markdown-content :global(a) {
		color: #0066cc;
		text-decoration: none;
	}

	.markdown-content :global(a:hover) {
		text-decoration: underline;
	}

	.markdown-content :global(ul),
	.markdown-content :global(ol) {
		margin: 1rem 0;
		padding-left: 2rem;
	}

	.markdown-content :global(li) {
		margin: 0.5rem 0;
	}

	.markdown-content :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: 1rem 0;
	}

	.markdown-content :global(th),
	.markdown-content :global(td) {
		border: 1px solid #ddd;
		padding: 0.75rem;
		text-align: left;
	}

	.markdown-content :global(th) {
		background-color: #f8f8f8;
		font-weight: bold;
	}
</style>
