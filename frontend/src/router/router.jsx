import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Landing.page.jsx";
import LoginPage from "../pages/Login.page.jsx";
import RecipesPage from "../pages/Recipes.page.jsx";
import PrivateRoute from "../hoc/PrivateRoute.jsx";
import SavedRecipesPage from "../pages/SavedRecipes.page.jsx";
import CustomRecipesPage from "../pages/CustomRecipes.page.jsx";
import EditCustomRecipesPage from "../pages/EditCustomRecipes.page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <div>404</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <div>404</div>,
  },
  {
    path: "/recipes",
    element: (
      <PrivateRoute>
        <RecipesPage />
      </PrivateRoute>
    ),
    errorElement: <div>404</div>,
  },
  {
    path: "/saved-recipes",
    element: (
      <PrivateRoute>
        <SavedRecipesPage />
      </PrivateRoute>
    ),
    errorElement: <div>404</div>,
  },
  {
    path: "/custom-recipes",
    element: (
      <PrivateRoute>
        <CustomRecipesPage />
      </PrivateRoute>
    ),
    errorElement: <div>404</div>,
  },
  {
    path: "/custom-recipes/:id",
    element: (
      <PrivateRoute>
        <EditCustomRecipesPage />
      </PrivateRoute>
    ),
    errorElement: <div>404</div>,
  },
]);

export default router;
