// src/hooks.ts
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';
import { router } from './lib/server';
// create your tRPC router...

export const handle: Handle = async ({ event, resolve }) => {
	const response = await createTRPCHandle({
		url: '/trpc',
		router: router,
		event,
		resolve
	});

	return response;
};
