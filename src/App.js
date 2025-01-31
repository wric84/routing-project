//for react-router-dom to work with alternative routing, you'd need to add {createRoutesFromElements, Route}
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

//path is the part after the domain, second part is what component

//by making the path relative and not absolute, the path is added after the current domain name and not after the current active path
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      //index route is the default route if the parent route is currently active
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },,
      {path: 'products/:productId', element: <ProductDetail/>}
    ],
  },
]);

// //alternative way to write routes
// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>}/>
//     <Route path="/products" element={<ProductsPage/>}/>
//   </Route>
// )

// const router = createBrowserRouter(routeDefinition)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
