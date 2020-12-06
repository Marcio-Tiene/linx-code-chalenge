export const ErrorP = (value) => {
  const paragraph = document.createElement('p');
  paragraph.className = 'error-warning';
  paragraph.innerHTML = value;
  return paragraph;
};
