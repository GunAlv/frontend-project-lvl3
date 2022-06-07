import getControls from './constrols';

import Model from './model';
import View from './view';
import Controller from './controller';

export default () => {
  const controls = getControls();

  const view = new View(controls);
  const model = new Model(view);
  const controller = new Controller(model, { formNode: controls.formNode });

  controller.init();
};
