export default () => {
  const formNode = document.querySelector('[data-form="rss"]');
  const statusNode = document.querySelector('[data-form="rss-status"]');
  const submitBtnNode = formNode.querySelector('[type="submit"]');
  const urlInputNode = formNode.elements.url;

  const postsContainerNode = document.querySelector('[data-posts-container]');
  const feedsContainerNode = document.querySelector('[data-feeds-container]');

  return {
    formNode,
    statusNode,
    submitBtnNode,
    urlInputNode,

    postsContainerNode,
    feedsContainerNode,
  };
};
