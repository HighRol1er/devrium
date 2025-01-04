export const commonQueryOptions = {
  meta: { persist: true },
  staleTime: 10 * 1000,
  retry: 3,
  retryDelay: 1000,
};
