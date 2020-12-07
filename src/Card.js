function Card(product) {
  const card = document.createElement('article');
  card.setAttribute('key', `${product.id}`);
  card.className = 'product';

  const img = document.createElement('img');
  img.setAttribute('src', product.image);
  img.setAttribute('alt', `${product.name} image`);
  card.appendChild(img);

  const productName = document.createElement('p');
  productName.className = 'product-name';
  productName.innerHTML = product.name;
  card.appendChild(productName);

  const productDesc = document.createElement('p');
  productDesc.className = 'product-desc';
  productDesc.innerHTML = product.description;
  card.appendChild(productDesc);

  const productHighPrice = document.createElement('p');
  productHighPrice.className = 'high-price';
  productHighPrice.innerHTML = `De: R$${product.oldPrice
    .toFixed(2)
    .split('.')
    .join(',')}`;
  card.appendChild(productHighPrice);

  const productSalesPrice = document.createElement('h3');
  productSalesPrice.className = 'sales-price';
  productSalesPrice.innerHTML = `Por: R$${product.price
    .toFixed(2)
    .split('.')
    .join(',')}`;
  card.appendChild(productSalesPrice);

  const productInstallment = document.createElement('p');
  productInstallment.className = 'installment-pay';
  productInstallment.innerHTML = `ou ${product.installments.count.toFixed(
    0
  )}x de R$${product.installments.value.toFixed(2).split('.').join(',')}`;
  card.appendChild(productInstallment);

  const productBuyButton = document.createElement('button');
  productBuyButton.className = 'buy';
  productBuyButton.innerHTML = 'Comprar';
  productBuyButton.onclick = () =>
    alert(`O ${product.name} foi adicionado ao carrinho`);
  card.appendChild(productBuyButton);

  return card;
}

export default Card;
