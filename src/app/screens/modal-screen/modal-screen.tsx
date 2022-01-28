import * as React from "react"
import { View, StatusBar } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Dialog, IconTextButton } from "../../components"
import { useStores } from "../../models/root-store"
import { color } from "../../theme"
import { delay } from "../../utils/delay"
import { ModalScreenStaticStyle as styles } from "./modal-screen.style"
import { MODAL_TYPE, NAV_TYPE, SECONDARY_SCREENS, NAV, ITEM, HISTORY } from "../../constants"

export interface ModalScreenProps extends NavigationScreenProps<NAV_TYPE> {}

export const ModalScreen: React.FunctionComponent<ModalScreenProps> = props => {
  let _pressCheck = "close"
  const {
      navigation: {
        state: { params },
      },
    } = props,
    {
      stateStore: { setResult, deleteSavedResult, saveResult },
    } = useStores(),
    _type = params ? params[NAV.TYPE] : undefined,
    _back = params ? params[NAV.BACK] : undefined,
    _closeOnPress = React.useMemo(() => () => props.navigation.goBack(), [props.navigation]),
    _scanOnPress = React.useMemo(
      () => (type: string) => {
        setResult({ type })
        _pressCheck = "scan"
        return props.navigation.goBack()
      },
      [props.navigation],
    ),
    _generateOnPress = React.useMemo(
      () => () => {
        _pressCheck = "generate"
        return props.navigation.goBack()
      },
      [props.navigation],
    ),
    _getText = () => {
      switch (_type) {
        case MODAL_TYPE.SAVE:
          return "Do you want to save the result in history?"
        case MODAL_TYPE.DELETE:
          return "Do you want to delete result from history?"
        case MODAL_TYPE.BACK:
          return `Do you want to go back without saving${
            _back === SECONDARY_SCREENS.SCAN ? " or sharing" : ""
          }?`
        default:
          return undefined
      }
    },
    _getButtonText = () => {
      switch (_type) {
        case MODAL_TYPE.SAVE:
          return "SAVE"
        case MODAL_TYPE.DELETE:
          return "DELETE"
        case MODAL_TYPE.BACK:
          return "YES"
        default:
          return undefined
      }
    },
    _buttonOnPress =
      _type &&
      _type !== MODAL_TYPE.ADD &&
      React.useMemo(
        () => () => {
          switch (_type) {
            case MODAL_TYPE.SAVE:
              saveResult(_back === SECONDARY_SCREENS.SCAN ? HISTORY.SCANNED : HISTORY.GENERATED)
              break
            case MODAL_TYPE.DELETE:
              deleteSavedResult()
              break
            case MODAL_TYPE.BACK:
              _pressCheck = "back"
              break
            default:
              return undefined
          }
          return props.navigation.goBack()
        },
        [props.navigation, _type, _back],
      )

  React.useEffect(
    () => async () => {
      await delay(150)
      switch (_type) {
        case MODAL_TYPE.DELETE:
          break
        case MODAL_TYPE.BACK:
          if (_pressCheck === "back") break
        default:
          return _pressCheck === "back" || _pressCheck === "close"
            ? undefined
            : props.navigation.navigate(
                _pressCheck === "scan" ? SECONDARY_SCREENS.SCAN : SECONDARY_SCREENS.GENERATE,
              )
      }
      return props.navigation.navigate(_back)
    },
    [props.navigation, _pressCheck, _type],
  )

  return (
    <View testID="modalScreen" style={styles.ROOT}>
      <StatusBar backgroundColor={color.dialogBackground} />
      <Dialog
        text={_getText()}
        buttonText={_getButtonText()}
        buttonOnPress={_buttonOnPress}
        closeOnPress={_closeOnPress}
      >
        {_type && _type === MODAL_TYPE.ADD ? (
          <View style={styles.ADD}>
            <IconTextButton
              onPress={() => _scanOnPress(ITEM.QRCODE)}
              preset="dialog"
              name="scan"
              text="Scan QR Code"
            />
            <IconTextButton
              onPress={() => _scanOnPress(ITEM.BARCODE)}
              preset="dialog"
              name="scan"
              text="Scan Bar Code"
            />
            <IconTextButton
              onPress={_generateOnPress}
              preset="dialog"
              name="generate"
              text="Generate QR or Bar Code"
            />
          </View>
        ) : (
          <></>
        )}
      </Dialog>
    </View>
  )
}
