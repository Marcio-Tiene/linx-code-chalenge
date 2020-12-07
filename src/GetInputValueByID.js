function GetInputValueByID(inputId) {
  const input = document.getElementById(inputId);
  const inputValue = input.value;
  return inputValue;
}

export default GetInputValueByID;
