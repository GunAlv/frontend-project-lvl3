import validate from './validate';

export default class Controller {
  constructor(model, { formNode }) {
    this.model = model;

    this.formNode = formNode;
  }

  init(i18nInstance) {
    this.formNode.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const { text } = Object.fromEntries(formData);

      this.model.setText(text);

      return validate(this.model.getData(), i18nInstance)
        .then((schema) => {
          console.log(schema);

          this.model.setValidState({ isValid: true });
          this.model.setErrorMessage(null);
        })
        .catch((error) => {
          this.model.setValidState({ isValid: false });
          this.model.setErrorMessage(error.message);
        });
    });
  }
}
