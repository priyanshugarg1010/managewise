import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Lottie from "lottie-react";
import github from "../public/github.json";

const App = () => {
  const Layout = () => {
    return (
      <div className="app font-[inter] sm:min-w-[]  md:w-[px] lg:w-[100%] w-auto">
        <Navbar />
        <div className="fixed bottom-0 z-50 right-0">
          <a
            href="https://github.com/priyanshugarg1010/managewise"
            target="blank"
          >
            <Lottie
              animationData={github}
              style={{ height: "100px" }}
              loop={true}
              height={10}
              width={10}
            />
          </a>
        </div>
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
