import { ViewStyle, TextStyle, TouchableOpacityProps } from "react-native"
import { IconTypes } from "../icon/icon.types"
import { IconTextButtonPresetNames } from "./icon-text-button.presets"

export interface IconTextButtonProps extends TouchableOpacityProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle | ViewStyle[]

  /**
   * An optional style override useful for the button text.
   */
  iconStyle?: TextStyle

  textStyle?: TextStyle

  /**
   * One of the different types of text presets.
   */
  preset?: IconTextButtonPresetNames

  name: IconTypes

  text?: string

  tx?: string
}
