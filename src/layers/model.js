import onChange from 'on-change';

export default class Model {
  constructor(view) {
    this.view = view;

    this.init();
  }

  getData() {
    return this.state.data;
  }

  setUrl(url) {
    this.state.data.url = url;
  }

  setValidState({ isValid }) {
    this.state.isValid = isValid;
  }

  setFetchingState({ isFetching }) {
    this.state.isFetching = isFetching;
  }

  setErrorMessage(message) {
    this.state.error = message;
  }

  setPosts(posts) {
    this.state.posts = [...posts, ...this.state.posts];
  }

  setFeed(feed) {
    this.state.feeds = [feed, ...this.state.feeds];
  }

  init() {
    this.state = onChange({
      isValid: false,
      isFetching: false,
      data: {
        url: null,
      },
      error: null,
      posts: [],
      feeds: [],
    }, (path, value) => {
      if (path === 'error') {
        if (value) {
          this.view.setErrorStatus(value);

          return;
        }
      }

      if (path === 'posts') {
        this.view.renderPosts(value);
      }

      if (path === 'feeds') {
        this.view.renderFeeds(value);
      }

      if (path === 'isFetching') {
        this.view.changeControlsState({ isDisabled: value });
      }

      this.view.resetForm();
    });
  }
}
