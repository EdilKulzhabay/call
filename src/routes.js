import { createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Main";
import Room from "./Pages/Room";

export const router = createBrowserRouter([
    { path: "/", element: <Main /> },
    { path: "/room/:id", element: <Room /> },
]);
