import * as React from "react"
import { View, PermissionsAndroid, Platform } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { useStores } from "../../models/root-store"
import { Screen, Header, Background, TabView, FloatingButton, Toast } from "../../components"
import { TabScreen } from "../"
import { HistoryScreenStaticStyle as styles } from "./history-screen.style"
import { ROOT_SCREENS, NAV, MODAL_TYPE, HISTORY } from "../../constants"

export interface HistoryScreenProps extends NavigationScreenProps<{}> {}

export const HistoryScreen: React.FunctionComponent<HistoryScreenProps> = props => {
  const {
      stateStore: { setHistoryType },
    } = useStores(),
    _addOnPress = React.useMemo(
      () => async () => {
        if (Platform.OS === "android") {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: "Camera Permission",
                message: "QR-Barcode Scan & Generate app needs access to your camera",
                buttonPositive: "OK",
              },
            )

            if (granted === PermissionsAndroid.RESULTS.GRANTED)
              return props.navigation.navigate(ROOT_SCREENS.MODAL, { [NAV.TYPE]: MODAL_TYPE.ADD })
            else Toast.show("Camera permission denied")
          } catch (err) {
            Toast.show("Something went wrong")
            console.tron.log(`Error: ${err}`)
          }
          return props.navigation
        }
        return props.navigation.navigate(ROOT_SCREENS.MODAL, { [NAV.TYPE]: MODAL_TYPE.ADD })
      },
      [props.navigation],
    ),
    _indexOnChange = React.useMemo(
      () => (type: string) => {
        setHistoryType(type)
      },
      [],
    )

  return (
    <View testID="historyScreen" style={styles.ROOT}>
      <Header headerText="History" hideShadow={true} />
      <Screen preset="fixed" unsafe={true}>
        <Background />
        <TabView
          navigation={props.navigation}
          screens={{
            [HISTORY.SCANNED]: TabScreen,
            [HISTORY.GENERATED]: TabScreen,
          }}
          onIndexChange={_indexOnChange}
        />
        <FloatingButton name="add" onPress={_addOnPress} />
      </Screen>
    </View>
  )
}
