import transformer from 'trpc-transformer';
import * as trpc from '@trpc/server';

export const router = trpc
	.router()
	.query('hello', {
		async resolve() {
			return 'Hello World';
		}
	})
	.transformer(transformer);

export type AppRouter = typeof router;
