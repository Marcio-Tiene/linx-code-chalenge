import NewsLetterformData from './NewsLetterformData';
import NLErrorHandler from './NLErrorHandler';
import NLvalidationSchema from './NLvalidationSchema';
import { ResetNlForm } from './ResetInputValues';

const SignUp = async () => {
  const data = NewsLetterformData();
  const { cpf } = data;

  try {
    await NLvalidationSchema.validate(data, { abortEarly: false });
    const formateData = { ...data, cpf: Number(cpf) };

    alert(
      `Parabéns   ${formateData.name}, você foi cadastrado com sucesso \nemail: ${formateData.email} \nCPF: ${formateData.email} \nSexo: ${formateData.gender}`
    );
    ResetNlForm();
  } catch (err) {
    NLErrorHandler(err.errors);
  }
};

export default SignUp;
