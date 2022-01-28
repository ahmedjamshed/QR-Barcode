import { createStackNavigator } from "react-navigation"
import { ROOT_SCREENS } from "../constants"
import { ModalScreen } from "../screens"

export const ModalNavigator = createStackNavigator(
  {
    [ROOT_SCREENS.MODAL]: { screen: ModalScreen },
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: ROOT_SCREENS.MODAL,
    navigationOptions: {
      gesturesEnabled: false,
    },
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
