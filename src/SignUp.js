import NewsLetterformData from './NewsLetterformData';
import NLErrorHandler from './NLErrorHandler';
import NLvalidationSchema from './NLvalidationSchema';
import { ResetNlForm } from './ResetInpitValues';

const SignUp = async () => {
  const data = NewsLetterformData();
  const { cpf } = data;

  try {
    await NLvalidationSchema.validate(data, { abortEarly: false });
    const formateData = { ...data, cpf: Number(cpf) };
    console.log(formateData);

    alert(
      `Parabéns   ${formateData.name}, você foi cadastrado com sucesso \nemail: ${formateData.email} \nCPF: ${formateData.email} \nSexo: ${formateData.gender}`
    );
    ResetNlForm();
  } catch (err) {
    console.log(err.errors);
    NLErrorHandler(err.errors);
  }
};

export default SignUp;
