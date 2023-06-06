import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world! <button className="btn btn-primary">app</button></div>,
    },
]);
export default router;