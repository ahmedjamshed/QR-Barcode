import * as React from "react"
import { View, Platform } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { observer } from "mobx-react-lite"
import { Header, Background, Screen, TextField, Radio, Button, Toast } from "../../components"
import { useStores } from "../../models/root-store"
import { GenerateScreenStaticStyle as styles } from "./generate-screen.style"
import { SECONDARY_SCREENS, NAV, ITEM } from "../../constants"
import { validateEAN13 } from "../../utils/validate"

export interface GenerateScreenProps extends NavigationScreenProps<{}> {}

export const GenerateScreen: React.FunctionComponent<GenerateScreenProps> = observer(props => {
  const {
      stateStore: { clearResults, setResult, result },
    } = useStores(),
    prevType = (result && result.type) || ITEM.QRCODE,
    prevText = result && result.text,
    _type = prevType && prevType === ITEM.BARCODE,
    _inputRef = React.useRef(null),
    _backOnPress = React.useMemo(
      () => () => {
        clearResults()
        return props.navigation.goBack()
      },
      [props.navigation],
    ),
    _generateOnPress = React.useMemo(
      () => () => {
        if (_inputRef && _inputRef.current && Platform.OS === "ios") _inputRef.current.blur()
        if (prevText) {
          if (_type && !validateEAN13(prevText)) return Toast.show("Not a valid EAN-13 code")
          else if (prevText && prevText.length > 1817) return Toast.show("1817 characters limit exceeded")
          return props.navigation.navigate(SECONDARY_SCREENS.RESULT, {
            [NAV.TYPE]: SECONDARY_SCREENS.GENERATE,
          })
        } else {
          return Toast.show("Please enter text")
        }
      },
      [props.navigation, prevText],
    ),
    _setResult = React.useMemo(
      () => (type: string, text: string) =>
        prevType !== type || prevText !== text ? setResult({ type, text }) : undefined,
      [prevType, prevText],
    )

  return (
    <View testID="generateScreen" style={styles.ROOT}>
      <Header leftIcon="back" onLeftPress={_backOnPress} headerText="Generate" />
      <Screen preset="fixed" unsafe={true}>
        <Background />
        <TextField
          multiline={true}
          style={styles.INPUT}
          placeholder={`enter ${_type ? "EAN-13 code" : "text"} here`}
          value={prevText || ""}
          onChangeText={text => _setResult(prevType || ITEM.QRCODE, text)}
          keyboardType={_type ? "number-pad" : "default"}
          maxLength={_type ? 13 : 1817}
          forwardedRef={_inputRef}
        />
        <View style={styles.RADIOS}>
          <Radio
            onToggle={() => _setResult(ITEM.QRCODE, prevText || "")}
            value={!_type}
            text="QR Code"
            style={styles.RADIO}
          />
          <Radio
            onToggle={() => _setResult(ITEM.BARCODE, "")}
            value={_type}
            text="Bar Code"
            style={styles.RADIO}
          />
        </View>
        <View style={styles.BUTTON_VIEW}>
          <Button style={styles.BUTTON} text="Generate" onPress={_generateOnPress} />
        </View>
      </Screen>
    </View>
  )
})
