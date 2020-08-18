
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "",
    icon: "",
    component: Index,
    layout: "/admin"
  },
  {
    path: "",
    name: "",
    icon: "",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "",
    name: "",
    icon: "",
    component: Maps,
    layout: "/admin"
  },
  
  
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
