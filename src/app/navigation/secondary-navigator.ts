import { createStackNavigator } from "react-navigation"
import { SECONDARY_SCREENS } from "../constants"
import {
  HistoryScreen,
  ScanScreen,
  GenerateScreen,
  ResultScreen,
  SavedResultScreen,
} from "../screens"

export const SecondaryNavigator = createStackNavigator(
  {
    [SECONDARY_SCREENS.HISTORY]: { screen: HistoryScreen },
    [SECONDARY_SCREENS.SCAN]: { screen: ScanScreen },
    [SECONDARY_SCREENS.GENERATE]: { screen: GenerateScreen },
    [SECONDARY_SCREENS.RESULT]: { screen: ResultScreen },
    [SECONDARY_SCREENS.SAVED_RESULT]: { screen: SavedResultScreen },
  },
  {
    headerMode: "none",
  },
)
