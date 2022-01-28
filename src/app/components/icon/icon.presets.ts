import { TextStyle } from "react-native"
import { fontSize, color, dimensions } from "../../theme"

const BASE_ICON: TextStyle = {
  fontSize: fontSize.small,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * A smaller piece of secondard information.
   */
  primary: {
    ...BASE_ICON,
    color: color.iconPrimary,
  } as TextStyle,

  secondary: {
    ...BASE_ICON,
    color: color.iconSecondary,
  } as TextStyle,

  arrow: {
    ...BASE_ICON,
    color: color.arrow,
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type IconPresetNames = keyof typeof presets
