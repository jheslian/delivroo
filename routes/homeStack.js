import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeMenu from "../container/HomeMenu";
import Login from "../container/AddressForm";
import ShopList from "../container/ShopList";

const screens = {
  HomeMenu: { screen: HomeMenu },
  Login: { screen: Login },
  ShopList: { screen: ShopList },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
