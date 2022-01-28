import * as React from "react"
import { View } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { CameraKitCameraScreen } from "react-native-camera-kit"
import { useStores } from "../../models/root-store"
import { Header, Background } from "../../components"
import { ScanScreenStaticStyle as styles } from "./scan-screen.style"
import { SECONDARY_SCREENS, NAV } from "../../constants"

export interface ScanScreenProps extends NavigationScreenProps<{}> {}

export const ScanScreen: React.FunctionComponent<ScanScreenProps> = props => {
  const {
      stateStore: {
        clearResults,
        setResult,
        result: { type },
      },
    } = useStores(),
    _backOnPress = React.useMemo(
      () => () => {
        clearResults()
        return props.navigation.goBack()
      },
      [props.navigation],
    ),
    _onReadCode = React.useMemo(
      () => (event: any) => {
        const text = event.nativeEvent.codeStringValue
        setResult({ type, text })
        return props.navigation.navigate(SECONDARY_SCREENS.RESULT, {
          [NAV.TYPE]: SECONDARY_SCREENS.SCAN,
        })
      },
      [props.navigation, type],
    )

  return (
    <View testID="scanScreen" style={styles.ROOT}>
      <Background />
      <Header leftIcon="back" onLeftPress={_backOnPress} headerText="Scan" />
      <CameraKitCameraScreen showFrame={false} scanBarcode={true} onReadCode={_onReadCode} />
    </View>
  )
}
