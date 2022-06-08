export const LANGUAGE = {
  RU: 'ru',
  EN: 'en',
};

export const TRANSLATE_KEY = {
  EMPY_FIELD: 'empty_field',
};

export const RESOURCES = {
  [LANGUAGE.EN]: {
    translation: {
      [TRANSLATE_KEY.EMPY_FIELD]: 'The field cannot be empty',
    },
  },
  [LANGUAGE.RU]: {
    translation: {
      [TRANSLATE_KEY.EMPY_FIELD]: 'Поле не может быть пустым',
    },
  },
};
