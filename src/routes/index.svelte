<script>
	import trpc from '$lib/client';
	let greeting = 'Ciao mondo';

	async function loadGreeting() {
		greeting = await trpc.query('hello');
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>greeting: {greeting}</p>
<button on:click|preventDefault={loadGreeting}>Load</button>
