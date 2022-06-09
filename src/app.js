import i18n from 'i18next';

import getDomNodes from './dom-nodes';

import Model from './layers/model';
import View from './layers/view';
import Controller from './layers/controller';

import { LANGUAGE, RESOURCES } from './constants';

export default () => {
  const defaultLanguage = Object.values(LANGUAGE).includes(window.navigator.language?.split('-')[0])
    ? window.navigator.language
    : LANGUAGE.RU;

  const i18nInstance = i18n.createInstance();

  i18nInstance.init({
    lng: defaultLanguage,
    resources: RESOURCES,
  }).then(() => {
    const nodes = getDomNodes();

    const view = new View(nodes);
    const model = new Model(view);
    const controller = new Controller(model, nodes);

    controller.init(i18nInstance);
  })
    .catch(console.log); // TODO: should handle error
};
