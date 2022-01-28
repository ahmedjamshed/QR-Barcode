import { ViewStyle, TextStyle, TouchableOpacityProps } from "react-native"
import { IconTypes } from "../icon/icon.types"
import { IconButtonPresetNames } from "./icon-button.presets"

export interface IconButtonProps extends TouchableOpacityProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle | ViewStyle[]

  /**
   * An optional style override useful for the button text.
   */
  iconStyle?: TextStyle

  /**
   * One of the different types of text presets.
   */
  preset?: IconButtonPresetNames

  name: IconTypes
}
