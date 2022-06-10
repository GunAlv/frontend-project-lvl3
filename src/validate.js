import {
  addMethod,
  array,
  object,
  string,
} from 'yup';

import { TRANSLATE_KEY } from './constants';

addMethod(array, 'unique', function (value, message) {
  return this.test('unique', message, (list) => {
    const hasSameValue = list.filter((item) => item === value).length >= 2;
    return !hasSameValue;
  });
});

export const validate = (value, i18nInstance) => {
  const schema = object({
    url: string()
      .trim()
      .url(i18nInstance.t(TRANSLATE_KEY.INVALID_URL))
      .required(i18nInstance.t(TRANSLATE_KEY.EMPTY_FIELD)),
    urls: array()
      .ensure()
      .unique(value.url, i18nInstance.t(TRANSLATE_KEY.RSS_EXISTS)),
  });

  return schema.validate(value);
};
