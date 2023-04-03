export const WithRetry = async <T>(
  fn: () => Promise<T>,
  maxRetries: number,
  delayMs: number
): Promise<T> => {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      const result = await fn();
      return result;
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      retries++;
    }
  }
  throw new Error(`Function failed after ${maxRetries} retries.`);
};
