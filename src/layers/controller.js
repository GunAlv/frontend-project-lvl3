import axios from 'axios';

import { uniqueId } from 'lodash';

import { validate } from '../validate';
import { parse } from '../parser';
import { getProxiedUrl } from '../get-proxied-url';

export default class Controller {
  constructor(model, { formNode }) {
    this.model = model;

    this.formNode = formNode;
  }

  init(i18nInstance) {
    this.formNode.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const { url } = Object.fromEntries(formData);

      this.model.setUrl(url);

      return validate(this.model.getData(), i18nInstance)
        .then(() => {
          this.model.setFetchingState({ isFetching: true });
          this.model.setValidState({ isValid: true });
          this.model.setErrorMessage(null);

          return axios.get(getProxiedUrl(url))
            .then(({ data: { contents } }) => {
              const { title, description, posts } = parse(contents);

              const feedId = Number(uniqueId());

              this.model.setFeed({ title, description, id: feedId });

              const modifiedPosts = posts.map((post) => ({
                ...post,
                id: Number(uniqueId()),
                feedId,
              }));
              this.model.setPosts(modifiedPosts);

              this.model.setFetchingState({ isFetching: false });
            });
          // this potential error will be handled below
        })
        .catch((error) => {
          this.model.setFetchingState({ isFetching: false });
          this.model.setValidState({ isValid: false });
          this.model.setErrorMessage(error.message);
        });
    });
  }
}
