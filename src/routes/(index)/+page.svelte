<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { Content, isPreviewing } from '@builder.io/sdk-svelte';
	import HelloWorld, { HelloWorldMeta } from '$lib/components/HelloWorld.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	export const customComponents = [
		{
			component: HelloWorld,
			...HelloWorldMeta
		}
	];

	const context = {};
</script>

<main>
	<div class="min-h-screen flex items-center justify-center">
		{#if data.contentData || isPreviewing()}
			<!-- Render builder content with all required props -->
			<Content {...data.contentData} />
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</main>
