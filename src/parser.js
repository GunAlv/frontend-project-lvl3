export class ParserError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ParserError';
  }
}

function getTextContent(node, key) {
  return node.querySelector(key).textContent;
}

const getPostContent = (post) => ({
  title: getTextContent(post, 'title'),
  description: getTextContent(post, 'description'),
  link: getTextContent(post, 'link'),
  pubDate: getTextContent(post, 'pubDate'),
});

export const parse = (data) => new Promise((resolve, reject) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, 'application/xml');

  const parsererror = doc.querySelector('parsererror');

  if (parsererror) {
    reject(new ParserError());

    return;
  }

  const title = getTextContent(doc, 'title');
  const description = getTextContent(doc, 'description');

  const posts = [...doc.querySelectorAll('item')].map(getPostContent);

  resolve({
    title,
    description,
    posts,
  });
});
