import { ViewStyle, TextStyle } from "react-native"
import { ToastProps, ToastOptions as RNToastOptions, Durations, Positions } from "react-native-root-toast"
import { ToastPresets } from "./toast.presets"

export interface ToastOptions extends RNToastOptions {
  containerStyle?: ViewStyle

  textStyle?: TextStyle
}

export interface ToastProps extends ToastProps {
  show?: (message: string, options?: ToastOptions, preset?: ToastPresets) => any

  showTx?: (message: string, options?: ToastOptions, preset?: ToastPresets) => any

  hide?: (toast: any) => void

  durations?: Durations

  positions?: Positions
}

export type ShowToastProps = (
  translate: boolean,
  message: string,
  options?: ToastOptions,
  preset?: ToastPresets,
) => any
