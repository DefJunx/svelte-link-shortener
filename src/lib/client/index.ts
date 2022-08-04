import * as trpc from '@trpc/client';
import type { AppRouter } from '../server';
import transformer from 'trpc-transformer';

export default trpc.createTRPCClient<AppRouter>({ url: '/trpc', transformer });
