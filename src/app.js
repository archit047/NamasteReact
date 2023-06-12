import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/footer";
// import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contacts";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart";

//Chunking
//Code Splitting
//Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
//Upon On Demand loading -> upon render -> suspend loading

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Namaste React",
    email: "suppport@namastedev.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{ name: "Namaste React", email: "suppport@namastedev.com" }}
          />
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />, //parentpath/{path} => //localhost:1244/about/profile
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

/**
 * AppLayout
 *  (state=user)
 *    - <Body user = {user}/>
 *       - <RestaurantContainer user=>
 *          - RestaurantCard user={user}
 *            - <h4>{user}</h4>
 *
 * PROPS DRILLING
 */
