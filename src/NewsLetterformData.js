import GetInputValueByID from './GetInputValueByID';
import { FemaleRadioButton, MaleRadioButton } from './GetHtmlElements';

function NewsLetterformData() {
  const name = GetInputValueByID('register-name');
  const email = GetInputValueByID('register-email');
  const cpf = GetInputValueByID('register-cpf');
  const isMaleChecked = MaleRadioButton.checked;
  const isFemaleChecked = FemaleRadioButton.checked;

  const radioInputValue = () => {
    if (isMaleChecked) {
      const gender = GetInputValueByID('male-radio-button');
      return gender;
    }
    if (isFemaleChecked) {
      const gender = GetInputValueByID('female-radio-button');
      return gender;
    }
    const gender = 'NOT_DEFINED';
    return gender;
  };
  const formData = {
    name,
    email,
    cpf,
    gender: radioInputValue(),
  };

  return formData;
}

export default NewsLetterformData;
