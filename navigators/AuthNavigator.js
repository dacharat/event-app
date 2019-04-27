import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../components/login/Login";
import Register from "../components/login/Register";

export default createAppContainer(
  createStackNavigator(
    {
      Login: Login,
      Regis: Register
    }
  )
);
