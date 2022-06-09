function getTextContent(node, key) {
  return node.querySelector(key).textContent;
}

const getPostContent = (post) => ({
  title: getTextContent(post, 'title'),
  description: getTextContent(post, 'description'),
  link: getTextContent(post, 'link'),
  pubDate: getTextContent(post, 'pubDate'),
});

export const parse = (data) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, 'application/xml');

  const title = getTextContent(doc, 'title');
  const description = getTextContent(doc, 'description');

  const posts = [...doc.querySelectorAll('item')].map(getPostContent);

  return {
    title,
    description,
    posts,
  };
};
