import { ViewStyle } from "react-native"
import { SpinnerPresets } from "./spinner.presets"

export interface SpinnerProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  spinnerColor?: string

  /**
   * One of the different types of Spinner presets.
   */
  preset?: SpinnerPresets
}
