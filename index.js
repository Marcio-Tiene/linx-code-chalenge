import { submitRegisterButton } from './src/GetHtmlElements';
import LoadProductslist from './src/LoadProductList';

import SignUp from './src/SignUp';

submitRegisterButton.onclick = SignUp;

// let EndPoint =
//   'frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1';

// async function RenderProducList(endPoint) {
//   try {
//     const response = await LoadProductslist(`https://${endPoint}`);
//     const productListData = response.data;

//     const products = productListData.products;
//     console.log(products);

//     products.map((product) => ProductList.appendChild(Card(product)));
//   } catch (err) {
//     console.log(err);
//   }
// }

// RenderProducList(EndPoint);
