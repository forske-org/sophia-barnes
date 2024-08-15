export const fetcher = async <T>(
    input: RequestInfo | URL
): Promise<T> => {
    const res = await fetch(input);
    return await res.json();
}

export default fetcher
