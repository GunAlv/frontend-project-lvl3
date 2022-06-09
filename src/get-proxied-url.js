export const getProxiedUrl = (url) => {
  const proxy = 'https://api.allorigins.win';
  const params = { disableCache: true, url };

  const proxyUrl = new URL('/get', proxy);
  const searchParams = new URLSearchParams(params);

  proxyUrl.search = searchParams;

  return proxyUrl.toString();
};
