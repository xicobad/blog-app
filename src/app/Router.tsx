import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@widgets/Layout";
import HomePage from "@pages/HomePage";
import ArticlePage from "@pages/ArticlePage";
import LoginPage from "@pages/LoginPage";
import RegisterPage from "@pages/RegisterPage";
import ProfilePage from "@pages/ProfilePage";
import CreateArticlePage from "@pages/CreateArticlePage";
import EditArticlePage from "@pages/EditArticlePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/articles" replace />} />
      <Route element={<Layout />}>
        <Route path="/articles" element={<HomePage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/articles/:slug/edit" element={<EditArticlePage />} />{" "}
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/new-article" element={<CreateArticlePage />} />
      </Route>
      <Route path="*" element={<div>404 - Not Found</div>} />
    </Routes>
  );
};

export default Router;
