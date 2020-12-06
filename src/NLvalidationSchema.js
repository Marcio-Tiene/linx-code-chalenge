import * as Yup from 'yup';

const NLvalidationSchema = Yup.object().shape({
  name: Yup.string()
    .required({ nameError: 'O nome é necessário' })
    .max(100, { nameError: 'O máximo de caracteres é 100' }),
  email: Yup.string()
    .required({ emailError: 'É necessário um e-mail valido' })
    .email({ emailError: 'Esse e-mail é invalido' })
    .max(100, { emailError: 'O máximo de caracteres é 100' }),
  cpf: Yup.number({ cpfError: 'O Cpf deve conter apenas numeros' })
    .min(1, { cpfError: 'O Cpf é necessário' })
    .max(99999999999, { cpfError: 'O Cpf deve ter no maximo 11 digitos' }),
  gender: Yup.string()
    .required()
    .equals(['Masculino', 'Feminino'], {
      genderError: 'Escolha entre Masculino ou Feminino',
    }),
});

export default NLvalidationSchema;
