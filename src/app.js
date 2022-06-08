import i18n from 'i18next';

import getControls from './constrols';

import Model from './model';
import View from './view';
import Controller from './controller';

import { LANGUAGE, RESOURCES } from './constants';

export default () => {
  const defaultLanguage = Object.values(LANGUAGE).includes(window.navigator.language?.split('-')[0])
    ? window.navigator.language
    : LANGUAGE.RU;

  const i18nInstance = i18n.createInstance();

  i18nInstance.init({
    lng: defaultLanguage,
    resources: RESOURCES,
  });

  const controls = getControls();

  const view = new View(controls);
  const model = new Model(view);
  const controller = new Controller(model, { formNode: controls.formNode });

  controller.init(i18nInstance);
};
