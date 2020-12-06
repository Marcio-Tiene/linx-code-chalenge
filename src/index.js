import * as Yup from 'yup';
const submitRegisterButton = document.querySelector(
  '.register-form-submit-button'
);

const schema = Yup.object().shape();
console.log(schema);

submitRegisterButton.onclick = newsLetterformData;

function newsLetterformData() {
  const name = getInputValueByID('register-name');
  const email = getInputValueByID('register-email');
  const cpf = getInputValueByID('register-cpf');
  const isMaleChecked = document.getElementById('male-radio-button').checked;
  const isFemaleChecked = document.getElementById('female-radio-button')
    .checked;

  const radioInputValue = () => {
    if (isMaleChecked) {
      const gender = getInputValueByID('male-radio-button');
      return gender;
    } else if (isFemaleChecked) {
      const gender = getInputValueByID('female-radio-button');
      return gender;
    } else {
      const gender = 'NOT_DEFINED';
      return gender;
    }
  };
  const formData = {
    name,
    email,
    cpf,
    gender: radioInputValue(),
  };
  console.log(formData);
  return formData;
}

function getInputValueByID(inputId) {
  const input = document.getElementById(inputId);
  const inputValue = input.value;
  return inputValue;
}
