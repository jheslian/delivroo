import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeMenu from "../container/HomeMenu";
import Login from "../container/AddressForm";
import Restaurant from "../container/RestoPerCategory";
import OneRestaurant from "../container/ShowRestaurants";
import Plat from "../component//homeMenu/Plats";
import Order from "../container/OrderQty";

const screens = {
  HomeMenu: { screen: HomeMenu },
  Login: { screen: Login },
  Restaurant: { screen: Restaurant },
  OneRestaurant: { screen: OneRestaurant },
  Plat: { screen: Plat },
  Order: { screen: Order },
};

const HomeStack = createStackNavigator(screens, {
  headerMode: "none",
});

export default createAppContainer(HomeStack);
