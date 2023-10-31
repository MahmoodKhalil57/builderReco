<script context="module" lang="ts">
	export const HelloWorldMeta = {
		name: 'Hello World',
		inputs: [
			{
				name: 'name',
				type: 'string',
				defaultValue: 'World'
			},
			{
				name: 'textVal',
				type: 'string',
				defaultValue: 'Hello World'
			}
		]
	};
</script>

<script lang="ts">
	export let name: string;
	export let textVal: string;
</script>

<div>
	{name}
	<input bind:value={textVal} />
</div>
