import { createStackNavigator } from "react-navigation"
import { ROOT_SCREENS } from "../constants"
import { PrimaryNavigator } from "./primary-navigator"
import { ModalScreen } from "../screens"

export const RootNavigator = createStackNavigator(
  {
    [ROOT_SCREENS.PRIMARY]: { screen: PrimaryNavigator },
    [ROOT_SCREENS.MODAL]: { screen: ModalScreen },
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: ROOT_SCREENS.PRIMARY,
    cardStyle: {
      opacity: 1.0,
    },
    transparentCard: true,
    transitionConfig: () => ({
      transitionSpec: {
        useNativeDriver: true,
      },
    }),
  },
)
