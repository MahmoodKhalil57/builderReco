// src/routes/+page.server.js
import { fetchOneEntry } from '@builder.io/sdk-svelte';
import { PUBLIC_API_KEY } from '$env/static/public';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// fetch your Builder content
	const model = 'page';
	const content = await fetchOneEntry({
		model,
		apiKey: PUBLIC_API_KEY,
		userAttributes: {
			urlPath: '/'
		}
	});

	const contentData = { model, content, apiKey: PUBLIC_API_KEY };
	return {
		contentData
	};
};
