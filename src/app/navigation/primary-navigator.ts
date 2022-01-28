import { createSwitchNavigator } from "react-navigation"
import { PRIMARY_SCREENS, SECONDARY_SCREENS } from "../constants"
import { SecondaryNavigator } from "./secondary-navigator"
import { SplashScreen } from "../screens"

export const PrimaryNavigator = createSwitchNavigator(
  {
    [PRIMARY_SCREENS.SPLASH]: { screen: SplashScreen },
    [PRIMARY_SCREENS.LAUNCH]: { screen: SecondaryNavigator },
  },
  {
    initialRouteName: PRIMARY_SCREENS.SPLASH,
    backBehavior: "none",
  },
)

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = [PRIMARY_SCREENS.SPLASH, SECONDARY_SCREENS.HISTORY]
