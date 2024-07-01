//for react-router-dom to work with alternative routing, you'd need to add {createRoutesFromElements, Route}
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

//path is the part after the domain, second part is what component
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
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
