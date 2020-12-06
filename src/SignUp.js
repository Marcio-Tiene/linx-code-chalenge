import NewsLetterformData from './NewsLetterformData';
import NLErrorHandler from './NLErrorHandler';
import NLvalidationSchema from './NLvalidationSchema';

const SignUp = async () => {
  const data = NewsLetterformData();
  const { cpf } = data;
  const formateData = { ...data, cpf: Number(cpf) };
  try {
    await NLvalidationSchema.validate(formateData, { abortEarly: false });
    console.log(formateData);
  } catch (err) {
    NLErrorHandler(err.errors);
  }
};

export default SignUp;
