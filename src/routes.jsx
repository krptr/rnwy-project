import { App } from "./App";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/Home/HomePage";
import { ShopPage } from "./pages/Shop/ShopPage";
import { ProductPage } from "./pages/Products/ProductPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "shop/:id", element: <ProductPage /> },
    ],
  },
];

export { routes };
