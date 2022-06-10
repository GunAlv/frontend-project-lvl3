export default class View {
  constructor({
    formNode,
    statusNode,
    urlInputNode,
    submitBtnNode,
    postsContainerNode,
    feedsContainerNode,
  }) {
    this.formNode = formNode;
    this.urlInputNode = urlInputNode;
    this.submitBtnNode = submitBtnNode;
    this.statusNode = statusNode;

    this.postsContainerNode = postsContainerNode;
    this.feedsContainerNode = feedsContainerNode;

    this.init();
  }

  resetForm() {
    this.clearStatus();
    this.formNode.reset();
    this.urlInputNode.focus();
  }

  clearStatus() {
    this.urlInputNode.classList.remove('is-invalid');
    this.statusNode.classList.remove('text-danger', 'text-success');

    // eslint-disable-next-line no-param-reassign
    this.statusNode.textContent = '';
  }

  setErrorStatus(message) {
    this.urlInputNode.classList.add('is-invalid');
    this.statusNode.classList.add('text-danger');

    // eslint-disable-next-line no-param-reassign
    this.statusNode.textContent = message;
  }

  setSuccessStatus(message) {
    this.urlInputNode.classList.remove('is-invalid');
    this.statusNode.classList.add('text-success');

    // eslint-disable-next-line no-param-reassign
    this.statusNode.textContent = message;
  }

  changeControlsState({ isDisabled }) {
    this.submitBtnNode.disabled = isDisabled;
    this.urlInputNode.disabled = isDisabled;
  }

  createPreviewButton() {
    const previewButton = document.createElement('button');
    previewButton.classList.add('btn', 'btn-outline-primary', 'btn-sm');
    previewButton.textContent = 'Просмотр';

    return previewButton;
  }

  createPost({ title, link }) {
    const postNode = document.createElement('li');
    postNode.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-start',
      'mt-2',
      'border-0',
    );

    const postTitle = document.createElement('a');
    postTitle.classList.add('link-primary', 'fw-bold');
    postTitle.setAttribute('href', link);
    postTitle.setAttribute('target', '_blank');
    postTitle.textContent = title;

    postNode.appendChild(postTitle);

    const previewButton = this.createPreviewButton();

    postNode.appendChild(previewButton);

    return postNode;
  }

  createFeed({ title, description }) {
    const feedNode = document.createElement('li');
    feedNode.classList.add('list-group-item', 'border-0');

    const feedTitle = document.createElement('h3');
    feedTitle.classList.add('h6', 'm-0');
    feedTitle.textContent = title;

    const feedDescription = document.createElement('p');
    feedDescription.classList.add('small', 'm-0', 'text-black-50');
    feedDescription.textContent = description;

    feedNode.appendChild(feedTitle);
    feedNode.appendChild(feedDescription);

    return feedNode;
  }

  renderContent({
    container,
    items,
    title,
    createFn,
  }) {
    if (!items.length) return;

    // eslint-disable-next-line no-param-reassign
    container.innerHTML = '';

    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('p-3');
    sectionTitle.textContent = title;
    container.appendChild(sectionTitle);

    const listContainerNode = document.createElement('ul');
    listContainerNode.classList.add('list-group');
    container.appendChild(listContainerNode);

    items.forEach((item) => {
      listContainerNode.appendChild(createFn(item));
    });
  }

  renderPosts(posts) {
    this.renderContent({
      container: this.postsContainerNode,
      items: posts,
      title: 'Посты',
      createFn: this.createPost.bind(this),
    });
  }

  renderFeeds(feeds) {
    this.renderContent({
      container: this.feedsContainerNode,
      items: feeds,
      title: 'Фиды',
      createFn: this.createFeed.bind(this),
    });
  }

  init() {
    this.urlInputNode.focus();
  }
}
