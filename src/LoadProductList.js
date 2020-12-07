import api from 'axios';
import Card from './Card';
import { ProductList } from './GetHtmlElements';
let EndPoint =
  'frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1';

const LoadProductslist = async (apiEndPoint) => {
  try {
    const response = await api.get(`https://${apiEndPoint}`);
    const productListData = response.data;

    const products = productListData.products;
    EndPoint = productListData.nextPage;

    products.map((product) => ProductList.appendChild(Card(product)));
  } catch (err) {
    console.log(err);
  }
};
LoadProductslist(EndPoint);

export default LoadProductslist;
