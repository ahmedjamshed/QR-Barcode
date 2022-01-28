import * as React from "react"
import { View, Platform, Text } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { observer } from "mobx-react-lite"
import QRCode from "react-native-qrcode-svg"
import Barcode from "react-native-barcode-builder"
import Hyperlink from "react-native-hyperlink"
import ViewShot, { captureRef } from "react-native-view-shot"
import { InterstitialAd, AdEventType } from "@react-native-firebase/admob"
import * as config from "../../utils/config"
import { color } from "../../theme"
import { Screen, Header, Background, Toast, Button } from "../../components"
import { useStores } from "../../models/root-store"
import share from "../../utils/share"
import webSearch from "../../utils/web-search"
import { IconTypes } from "../../components/icon/icon.types"
import { SECONDARY_SCREENS, NAV, NAV_TYPE, ROOT_SCREENS, MODAL_TYPE, ITEM } from "../../constants"
import { ResultScreenStaticStyle as styles } from "./result-screen.style"

export interface ResultScreenProps extends NavigationScreenProps<NAV_TYPE> {}

export const ResultScreen: React.FunctionComponent<ResultScreenProps> = observer(props => {
  const {
      navigation: {
        state: { params },
      },
    } = props,
    {
      stateStore: {
        result: { text, type },
        saved,
        setResult,
      },
    } = useStores(),
    _type = params ? params[NAV.TYPE] : undefined,
    _typeCheck = _type && _type === SECONDARY_SCREENS.GENERATE,
    _shot = React.useRef(null),
    _backOnPress = React.useMemo(
      () => () =>
        saved
          ? props.navigation.goBack()
          : props.navigation.navigate(ROOT_SCREENS.MODAL, {
              [NAV.TYPE]: MODAL_TYPE.BACK,
              [NAV.BACK]: _type,
            }),
      [props.navigation, saved],
    ),
    _shareOnPress = React.useMemo(
      () => () => {
        if (_typeCheck) {
          captureRef(_shot, {
            result: "data-uri",
          }).then(
            base64 => share({ base64 }),
            error => console.tron.error("Oops, snapshot failed", error),
          )
          return
        }
        return share({ text })
      },
      [text, _typeCheck, _shot],
    ),
    _saveOnPress = React.useMemo(
      () => () => {
        if (_typeCheck) {
          captureRef(_shot, {
            result: "data-uri",
          }).then(
            base64 => setResult({ type, text, base64 }),
            error => console.tron.error("Oops, snapshot failed", error),
          )
        }
        return props.navigation.navigate(ROOT_SCREENS.MODAL, {
          [NAV.TYPE]: MODAL_TYPE.SAVE,
          [NAV.BACK]: _type,
        })
      },
      [props.navigation, type, text, _typeCheck],
    ),
    _onError = React.useMemo(
      () => (error: Error) => {
        props.navigation.goBack()
        Toast.show("Not a valid EAN-13 code")
      },
      [props.navigation],
    ),
    _lookUpOnPress = React.useMemo(() => () => webSearch(text), [text]),
    _rightIcon = (saved ? ["share"] : ["share", "save"]) as IconTypes[],
    _onRightPress = saved ? [_shareOnPress] : [_shareOnPress, _saveOnPress],
    _renderScanResult = () => (
      <Hyperlink linkDefault={true} linkStyle={styles.LINK}>
        <Text style={{ ...styles.SCAN, textAlign: type === ITEM.BARCODE ? "center" : undefined }}>
          {type === ITEM.BARCODE ? `Product ID: ${text}` : text}
        </Text>
      </Hyperlink>
    ),
    _renderGenerateResult = () => (
      <View style={styles.GENERATE}>
        <ViewShot ref={_shot} style={styles.SHOT}>
          {type === ITEM.QRCODE ? (
            <QRCode
              value={text || "NA"}
              size={styles.QR.width as number}
              color={color.qrCode}
              backgroundColor={styles.QR.backgroundColor}
            />
          ) : (
            <Barcode
              width={styles.BAR.width}
              height={styles.BAR.height}
              value={text}
              format="EAN13"
              flat
              onError={_onError}
            />
          )}
        </ViewShot>
      </View>
    ),
    _renderLookUp = () => <Button text="LookUp" onPress={_lookUpOnPress} style={styles.BOTTOM} />

  React.useEffect(() => {
    const interstitialAd = InterstitialAd.createForAdRequest(
      Platform.OS === "ios" ? config.keys.IOS_INTERSTITIAL_ID : config.keys.ANDROID_INTERSTITIAL_ID,
      {
        requestNonPersonalizedAdsOnly: true,
      },
    )

    const _adListener = interstitialAd.onAdEvent((type, error) => {
      if (type === AdEventType.LOADED) {
        interstitialAd.show()
      }

      if (type === AdEventType.CLOSED) {
      }
    })

    interstitialAd.load()

    return () => {
      if (_adListener) _adListener()
    }
  })

  return (
    <View testID="resultScreen" style={styles.ROOT}>
      <Header
        leftIcon="back"
        onLeftPress={_backOnPress}
        headerText="Result"
        rightIcon={_rightIcon}
        onRightPress={_onRightPress}
      />
      <Screen preset={_typeCheck ? "fixed" : "scroll"} style={styles.CONTENT} unsafe={true}>
        <Background />
        {_typeCheck ? _renderGenerateResult() : _renderScanResult()}
        {type === ITEM.BARCODE && _renderLookUp()}
      </Screen>
    </View>
  )
})
