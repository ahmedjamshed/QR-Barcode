import RNToast from "react-native-root-toast"
import { translate } from "../../i18n"
import { ToastProps, ShowToastProps } from "./toast.props"
import {
  containerPresets,
  textPresets,
  shadowPresets,
  backgroundPresets,
  tintPresets,
  positionPresets,
} from "./toast.presets"

/**
 * Toast that appears on many screens.
 */

const showToast: ShowToastProps = (trans, msg, options, preset) => {
  const {
    containerStyle: containerStyleOverride,
    textStyle: textStyleOverride,
    backgroundColor,
    shadowColor,
    textColor,
    position,
    ...rest
  } = options

  const containerPresetToUse = containerPresets[preset] || containerPresets.default

  const textPresetToUse = textPresets[preset] || textPresets.default

  const shadowPresetToUse = shadowPresets[preset] || shadowPresets.default

  const tintPresetToUse = tintPresets[preset] || tintPresets.default

  const backgroundPresetToUse = backgroundPresets[preset] || backgroundPresets.default

  const positionPresetToUse = positionPresets[preset] || positionPresets.default

  const rnOptions = {
    ...rest,
    containerStyle: { ...containerPresetToUse, ...containerStyleOverride },
    textStyle: { ...textPresetToUse, ...textStyleOverride },
    shadowColor: shadowColor || shadowPresetToUse,
    backgroundColor: backgroundColor || backgroundPresetToUse,
    textColor: textColor || tintPresetToUse,
    position: position || positionPresetToUse,
  }

  return RNToast.show(trans ? translate(msg) : msg, rnOptions)
}

export const Toast: ToastProps = {
  show: (msg: any, options = {}, preset = "default") => {
    showToast(false, JSON.stringify(msg).replace(/"/g, ""), options, preset)
  },
  showTx: (txMsg, options = {}, preset = "default") => showToast(true, txMsg, options, preset),

  hide: (toast: any) => Toast.hide(toast),
}
