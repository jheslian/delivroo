import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeMenu from "../container/HomeMenu";
import Login from "../container/AddressForm";
import ShopList from "../container/ShopList";
import Restaurant from "../container/RestoPerCategory";
import OneRestaurant from "../container/ShowRestaurants";

const screens = {
  HomeMenu: { screen: HomeMenu },
  Login: { screen: Login },
  ShopList: { screen: ShopList },
  Restaurant: { screen: Restaurant },
  OneRestaurant: { screen: OneRestaurant },
};

const HomeStack = createStackNavigator(screens, {
  headerMode: "none",
});

export default createAppContainer(HomeStack);
