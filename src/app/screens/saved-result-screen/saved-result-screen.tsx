import * as React from "react"
import { View, Image, Text } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Screen, Header, Background, Button } from "../../components"
import { useStores } from "../../models/root-store"
import Hyperlink from "react-native-hyperlink"
import share from "../../utils/share"
import webSearch from "../../utils/web-search"
import { SavedResultScreenStaticStyle as styles } from "./saved-result-screen.style"
import { NAV, ROOT_SCREENS, SECONDARY_SCREENS, MODAL_TYPE, HISTORY, ITEM } from "../../constants"

export interface SavedResultScreenProps extends NavigationScreenProps<{}> {}

export const SavedResultScreen: React.FunctionComponent<SavedResultScreenProps> = props => {
  const {
      stateStore: {
        historyType,
        savedResult: { type, text, base64 },
        clearResults,
      },
    } = useStores(),
    _backOnPress = React.useMemo(
      () => () => {
        clearResults()
        return props.navigation.goBack()
      },
      [props.navigation],
    ),
    _shareOnPress = React.useMemo(() => () => share({ text, base64 }), [text, base64]),
    _deleteOnPress = React.useMemo(
      () => () =>
        props.navigation.navigate(ROOT_SCREENS.MODAL, {
          [NAV.TYPE]: MODAL_TYPE.DELETE,
          [NAV.BACK]: SECONDARY_SCREENS.HISTORY,
        }),
      [props.navigation],
    ),
    _lookUpOnPress = React.useMemo(() => () => webSearch(text), [text]),
    _renderCode = () => (
      <Image
        source={{ uri: base64 }}
        style={{ ...styles.IMAGE, ...(type === ITEM.BARCODE ? styles.BAR : styles.QR) }}
      />
    ),
    _renderLookUp = () => <Button text="LookUp" onPress={_lookUpOnPress} style={styles.BOTTOM} />

  return (
    <View testID="savedResultScreen" style={styles.ROOT}>
      <Header
        leftIcon="back"
        onLeftPress={_backOnPress}
        headerText="Saved Result"
        rightIcon={["share", "bin"]}
        onRightPress={[_shareOnPress, _deleteOnPress]}
      />
      <Background />
      <Screen preset="scroll" unsafe={true} style={styles.CONTENT}>
        <Background />
        {historyType === HISTORY.GENERATED && _renderCode()}
        <Hyperlink linkDefault={true} linkStyle={styles.LINK}>
          <Text style={styles.TEXT} textBreakStrategy="highQuality">
            {type === ITEM.BARCODE ? `Product ID: ${text}` : text}
          </Text>
        </Hyperlink>
        {type === ITEM.BARCODE && _renderLookUp()}
      </Screen>
    </View>
  )
}
