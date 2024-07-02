import { Link } from "react-router-dom";
// Using Link instead of NavLink because we dont want to highlight those links as highlighted when we click it

const PRODUCTS = [
    {id:'p1', title: 'Product 1'},
    {id:'p2', title: 'Product 2'},
    {id:'p3', title: 'Product 3'},
]

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {/* //Hard code example:
        <li><Link to="/products/products-1">Product 1</Link></li>
        <li><Link to="/products/products-2">Product 2</Link></li>
        <li><Link to="/products/products-3">Product 3</Link></li> */}
        {PRODUCTS.map(prod => <li key={prod.id}><Link to={prod.id} >{prod.title}</Link></li>)}
      </ul>
    </>
  );
}

export default ProductsPage;
