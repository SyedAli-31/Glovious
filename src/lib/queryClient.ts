'use client';

import { QueryClient, type QueryFunction } from '@tanstack/react-query';

/**
 * Throws an error if a fetch Response is not OK (non-2xx)
 */
async function throwIfResNotOk(res: Response): Promise<void> {
    if (!res.ok) {
        const text = (await res.text()) || res.statusText;
        throw new Error(`${res.status}: ${text}`);
    }
}

/**
 * Generic API request wrapper with proper typing
 */
export async function apiRequest<TResponse = unknown>(
    method: string,
    url: string,
    data?: unknown
): Promise<TResponse> {
    const res = await fetch(url, {
        method,
        headers: data ? { 'Content-Type': 'application/json' } : {},
        body: data ? JSON.stringify(data) : undefined,
        credentials: 'include',
    });

    await throwIfResNotOk(res);

    return (await res.json()) as TResponse;
}

type UnauthorizedBehavior = 'returnNull' | 'throw';

/**
 * React Query–compatible fetch function generator
 * Handles 401 logic gracefully
 */
export const getQueryFn =
    <T>(options: { on401: UnauthorizedBehavior }): QueryFunction<T | null> =>
        async ({ queryKey }) => {
            const url = Array.isArray(queryKey) ? queryKey.join('/') : String(queryKey);

            const res = await fetch(url, { credentials: 'include' });

            if (options.on401 === 'returnNull' && res.status === 401) {
                return null;
            }

            await throwIfResNotOk(res);

            return (await res.json()) as T;
        };

/**
 * Shared QueryClient instance with sensible defaults
 */
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: getQueryFn({ on401: 'throw' }), // can switch to 'returnNull' if needed
            refetchOnWindowFocus: false,
            refetchInterval: false,
            staleTime: Infinity,
            retry: false,
        },
        mutations: {
            retry: false,
        },
    },
});
