//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//Admin pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";

//Client pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

//Others
import Error404 from "../pages/Error404";
import LayoutSignIn from "../layouts/LayoutSignin";

//Sistema de rutas @v6
const routesAdmin = [
  {
    path: "/admin/",
    component: AdminHome,
    layout: LayoutAdmin,
  },
  {
    path: "/admin/login/",
    component: AdminSignIn,
    layout: LayoutSignIn,
  },
  {
    path:"*",
    component: Error404,
    layout: LayoutAdmin,
  }
];

const routesClient = [
    {
        path: "/",
        component: Home,
        layout: LayoutBasic,
    },
    {
        path: "/contact",
        component: Contact,
        layout: LayoutBasic,
    },
    {
      path:"*",
      component: Error404,
      layout: LayoutBasic,
    }
];

// como no se puede mandar un Array con Arrays dentro se utiliza "..."(express operator) para enviar Objetos!
const routes = [...routesAdmin, ...routesClient];

export default routes;
