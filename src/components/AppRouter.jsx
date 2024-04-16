import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import { publicRoutes, privateRoutes } from "../router/routes";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  console.log(isAuth);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map((route, id) => {
            return (
              <Route
                key={id}
                path={route.path}
                Component={route.component}
                exact={route.exact}
              />
            );
          })}
          <Route path="*" element={<Navigate replace to="/posts" />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route, id) => {
            return (
              <Route
                key={id}
                path={route.path}
                Component={route.component}
                exact={route.exact}
              />
            );
          })}
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;

{
  /* <Route path="/about" element={<About />} />
<Route exact path="/posts" element={<Posts />} />
<Route exact path="/posts/:id" element={<PostIdPage />} />
<Route path="*" element={<Error />} /> */
}
