export const load = async ({ url }: { url: URL }) => {
	return { url: url.pathname };
};
