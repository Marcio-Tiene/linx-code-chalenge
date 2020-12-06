import NewsLetterformData from './src/NewsLetterformData';
import NLvalidationSchema from './src/NLvalidationSchema';

const submitRegisterButton = document.querySelector(
  '.register-form-submit-button'
);

const ValidationTest = async () => {
  const data = NewsLetterformData();
  const { cpf } = data;
  const formateData = { ...data, cpf: Number(cpf) };
  try {
    await NLvalidationSchema.validate(formateData, { abortEarly: false });
    console.log(formateData);
  } catch (err) {
    console.log(err.errors);
  }
};

submitRegisterButton.onclick = ValidationTest;
