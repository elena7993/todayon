import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CreateProfile from "./pages/profile/CreateProfile";
import MainPage from "./pages/main/MainPage";
import ToDoList from "./pages/todo/ToDoList";
import BodyStreching from "./pages/streching/BodyStreching";
import MyNote from "./pages/note/MyNote";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<CreateProfile />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/streching" element={<BodyStreching />} />
        <Route path="/notes" element={<MyNote />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
