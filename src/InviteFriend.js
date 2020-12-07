import * as Yup from 'yup';
import GetInputValueByID from './GetInputValueByID';
import { erroWarningPrint } from './NLErrorHandler';
import { ResetIFForm } from './ResetInpitValues';

const IFValidationSchema = Yup.object().shape({
  name: Yup.string().required({ nameError: 'O nome é necessário' }),
  email: Yup.string()
    .required({ emailError: 'É necessário um e-mail valido' })
    .email({ emailError: 'Esse e-mail é invalido' })
    .max(100, { emailError: 'O máximo de caracteres é 100' }),
});

const IFErrorHandler = (errors) => {
  const errorsObject = errors.reduce((err, obj) => {
    return { ...obj, ...err };
  }, {});

  erroWarningPrint(errorsObject.nameError, 'friendNameError');
  erroWarningPrint(errorsObject.emailError, 'friendEmailError');
};

function IFformData() {
  const name = GetInputValueByID('friend-name');
  const email = GetInputValueByID('friend-email');

  const formData = {
    name,
    email,
  };

  return formData;
}

const InviteAFriend = async () => {
  const data = IFformData();

  try {
    await IFValidationSchema.validate(data, { abortEarly: false });

    alert(
      `Parabéns   ${data.name}, seu amigo foi convidado com sucesso \nemail: ${data.email} `
    );
    ResetIFForm();
  } catch (err) {
    console.log(err.errors);
    IFErrorHandler(err.errors);
  }
};

export default InviteAFriend;
