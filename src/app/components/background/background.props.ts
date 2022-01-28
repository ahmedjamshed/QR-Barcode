import { ViewStyle } from "react-native"
import { BackgroundPresets } from "./background.presets"

export interface BackgroundProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  /**
   * One of the different types of Background presets.
   */
  preset?: BackgroundPresets
}
