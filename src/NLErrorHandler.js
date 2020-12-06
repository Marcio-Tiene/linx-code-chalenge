import {
  getErrorWarningElement,
  NLNameInput,
  NLCpfInput,
  NLEmailInput,
  MaleRadioButton,
  FemaleRadioButton,
} from './GetHtmlElements';
const erroWarningPrint = (error, tagId) => {
  if (error) {
    const errorWarning = getErrorWarningElement(tagId);
    errorWarning.innerHTML = '';
    errorWarning.innerHTML = error;
  }
};

const NLErrorHandler = (errors) => {
  const errorsObject = errors.reverse().reduce((err, obj) => {
    return { ...obj, ...err };
  }, {});

  erroWarningPrint(errorsObject.nameError, 'nameError');
  erroWarningPrint(errorsObject.emailError, 'emailError');
  erroWarningPrint(errorsObject.cpfError, 'cpfError');
  erroWarningPrint(errorsObject.genderError, 'genderError');
};
NLNameInput.onclick = () =>
  (getErrorWarningElement('nameError').innerHTML = '');
NLCpfInput.onclick = () => (getErrorWarningElement('cpfError').innerHTML = '');
NLEmailInput.onclick = () =>
  (getErrorWarningElement('emailError').innerHTML = '');
MaleRadioButton.onclick = () =>
  (getErrorWarningElement('genderError').innerHTML = '');
FemaleRadioButton.onclick = () =>
  (getErrorWarningElement('genderError').innerHTML = '');

export default NLErrorHandler;
