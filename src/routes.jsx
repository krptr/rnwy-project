import { App } from "./App";
import { HomePage } from "./pages/Home/HomePage";
import { ShopPage } from "./pages/Shop/ShopPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
    ],
  },
];

export { routes };
