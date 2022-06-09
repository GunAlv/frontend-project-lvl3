import { object, string } from 'yup';

import { TRANSLATE_KEY } from './constants';

export const validate = (value, i18nInstance) => {
  const schema = object({
    url: string().trim().required(i18nInstance.t(TRANSLATE_KEY.EMPY_FIELD)),
  });

  return schema.validate(value);
};
