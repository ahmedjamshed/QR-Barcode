import { ViewStyle, TextStyle, TouchableOpacityProps } from "react-native"
import { IconTypes } from "../icon/icon.types"

export interface FloatingButtonProps extends TouchableOpacityProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle | ViewStyle[]

  /**
   * An optional style override useful for the button text.
   */
  iconStyle?: TextStyle

  name: IconTypes

  diameter?: number

  positionY?: "bottom" | "top"

  positionX?: "left" | "right"
}
