export default () => {
  const formNode = document.querySelector('[data-form="rss"]');
  const statusNode = document.querySelector('[data-form="rss-status"]');
  const textInputNode = formNode.elements.text;

  return {
    formNode,
    statusNode,
    textInputNode,
  };
};
