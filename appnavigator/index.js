import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../pages/homescreen";
import GameScreen from "../pages/gamescreen";
import ClearStageScreen from "../pages/clearstagescreen";
import GameOverScreen from "../pages/gameoverscreen";

const AppNavigator = createStackNavigator({
  home: { screen: Home },
  gameScreen: { screen: GameScreen },
  clearStageScreen: { screen: ClearStageScreen },
  gameOverScreen: { screen: GameOverScreen }
});

export default createAppContainer(AppNavigator);
