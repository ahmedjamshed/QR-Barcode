import * as React from "react"
import { View, Platform, StatusBar } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import Splash from "react-native-splash-screen"
import { color } from "../../theme"
import { Background } from "../../components"
import { SECONDARY_SCREENS } from "../../constants"
import { SplashScreenStaticStyle as styles } from "./splash-screen.style"
import { useStores } from "../../models/root-store"

export interface SplashScreenProps extends NavigationScreenProps<{}> {}

export const SplashScreen: React.FunctionComponent<SplashScreenProps> = props => {
  const {
    stateStore: { getHistory },
  } = useStores()

  React.useEffect(() => {
    if (Platform.OS === "ios") Splash.hide()
    getHistory()
    props.navigation.navigate(SECONDARY_SCREENS.HISTORY)
  }, [props.navigation])

  return (
    <View testID="splashScreen" style={styles.ROOT}>
      <StatusBar barStyle="light-content" backgroundColor={color.primary} />
      <Background preset="secondary" />
    </View>
  )
}
