export default () => {
  const formNode = document.querySelector('[data-form="rss"]');
  const statusNode = document.querySelector('[data-form="rss-status"]');
  const urlInputNode = formNode.elements.url;

  return {
    formNode,
    statusNode,
    urlInputNode,
  };
};
