import ErrorPage from "./ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intro from "./Intro.jsx";
import { loader as rootLoader, action as rootAction } from "./routes/Root";
import SignIn, { signInAction } from "./routes/SignIn.jsx";
import Root from "./routes/Root.jsx";
import Contact, { loader as contactLoader } from "./routes/Contact.jsx";
import UserDetails, { action as editAction } from "./routes/UserDetails";
import { action as destroyAction } from "./routes/Destroy";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Intro />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "signIn",
          element: <SignIn />,
          action: signInAction,
        },
      ],
    },
    {
      path: "/root",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      action: rootAction,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
        },
        {
          path: "contacts/:contactId/add",
          element: <UserDetails />,
          loader: contactLoader,
          action: editAction,
        },
        {
          path: "contacts/:contactId/destroy",
          action: destroyAction,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
