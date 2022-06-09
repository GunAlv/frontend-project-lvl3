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

  setErrorMessage(message) {
    this.state.error = message;
  }

  init() {
    this.state = onChange({
      isValid: false,
      data: {
        url: null,
      },
      error: null,
    }, (path, value) => {
      if (path === 'error') {
        if (value) {
          this.view.setErrorStatus(value);

          return;
        }
      }

      this.view.resetForm();
    });
  }
}
