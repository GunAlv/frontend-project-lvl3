export const LANGUAGE = {
  RU: 'ru',
  EN: 'en',
};

export const TRANSLATE_KEY = {
  EMPTY_FIELD: 'empty_field',
  INVALID_URL: 'invalid_url',
  RSS_EXISTS: 'rss_exists',
  PARSING_ERROR: 'parsing_error',
  RSS_FETCH_SUCCESS: 'rss_fetch_success',
};

export const RESOURCES = {
  [LANGUAGE.EN]: {
    translation: {
      [TRANSLATE_KEY.EMPTY_FIELD]: 'The field cannot be empty',
      [TRANSLATE_KEY.INVALID_URL]: 'Link must be a valid URL',
      [TRANSLATE_KEY.RSS_EXISTS]: 'RSS is already exists',
      [TRANSLATE_KEY.PARSING_ERROR]: 'The resource does not contain valid RSS',
      [TRANSLATE_KEY.RSS_FETCH_SUCCESS]: 'RSS is loaded successfully',
    },
  },
  [LANGUAGE.RU]: {
    translation: {
      [TRANSLATE_KEY.EMPTY_FIELD]: 'Поле не может быть пустым',
      [TRANSLATE_KEY.INVALID_URL]: 'Ссылка должна быть валидным URL',
      [TRANSLATE_KEY.RSS_EXISTS]: 'RSS уже существует',
      [TRANSLATE_KEY.PARSING_ERROR]: 'Ресурс не содержит валидный RSS',
      [TRANSLATE_KEY.RSS_FETCH_SUCCESS]: 'RSS успешно загружен',
    },
  },
};
