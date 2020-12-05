function Test() {
  const algorithmSection = document.getElementById('help-algorithm');
  console.log(algorithmSection);
  const testH1 = document.createElement('h1');
  const testH1Text = document.createTextNode('hello linx');

  testH1.appendChild(testH1Text);

  algorithmSection.appendChild(testH1);
}

// Test();
