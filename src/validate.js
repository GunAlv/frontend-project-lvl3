import { object, string } from 'yup';

const validate = (value) => {
  const schema = object({
    text: string().trim().required('Поле не может быть пустым'),
  });

  return schema.validate(value);
};

export default validate;
