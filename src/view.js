export default class View {
  constructor({
    formNode,
    statusNode,
    textInputNode,
  }) {
    this.formNode = formNode;
    this.textInputNode = textInputNode;
    this.statusNode = statusNode;

    this.init();
  }

  resetForm() {
    this.clearStatus();
    this.formNode.reset();
    this.textInputNode.focus();
  }

  clearStatus() {
    this.textInputNode.classList.remove('is-invalid');
    this.statusNode.classList.remove('text-danger', 'text-success');

    // eslint-disable-next-line no-param-reassign
    this.statusNode.textContent = '';
  }

  setErrorStatus(message) {
    this.textInputNode.classList.add('is-invalid');
    this.statusNode.classList.add('text-danger');

    // eslint-disable-next-line no-param-reassign
    this.statusNode.textContent = message;
  }

  init() {
    this.textInputNode.focus();
  }
}
