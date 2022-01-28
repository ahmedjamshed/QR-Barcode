import { TextProps, TextStyle } from "react-native"
import { IconPresetNames } from "./icon.presets"
import { IconTypes } from "./icon.types"

export interface IconProps extends TextProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: TextStyle

  /**
   * One of the different types of text presets.
   */
  preset?: IconPresetNames

  name: IconTypes
}
