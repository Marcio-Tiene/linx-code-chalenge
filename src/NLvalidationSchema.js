import * as Yup from 'yup';

const NLvalidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('O nome é necessário')
    .max(100, 'O máximo de caracteres é 100'),
  email: Yup.string()
    .required('É necessário um e-mail valido')
    .email('Esse e-mail é invalido')
    .max(100, 'O máximo de caracteres é 100'),
  cpf: Yup.number().min(1, 'O Cpf é necessário').max(99999999999),
  gender: Yup.string()
    .required()
    .equals(['Masculino', 'Feminino'], 'Escolha entre Masculino ou Feminino'),
});

export default NLvalidationSchema;
