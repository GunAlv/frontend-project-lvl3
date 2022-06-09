export default class View {
  constructor({
    formNode,
    statusNode,
    urlInputNode,
  }) {
    this.formNode = formNode;
    this.urlInputNode = urlInputNode;
    this.statusNode = statusNode;

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

  init() {
    this.urlInputNode.focus();
  }
}
