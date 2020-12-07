export function ResetInputValues(inputId) {
  const input = document.getElementById(inputId);
  input.value = '';
}

export function ResetRadiobuttons(inputId) {
  const input = document.getElementById(inputId);
  input.checked = false;
}

export function ResetNlForm() {
  ResetInputValues('register-name');
  ResetInputValues('register-email');
  ResetInputValues('register-cpf');
  ResetRadiobuttons('male-radio-button');
  ResetRadiobuttons('female-radio-button');
}
