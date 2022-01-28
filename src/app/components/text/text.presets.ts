import { TextStyle } from "react-native"
import { color, typography, fontSize, lineHeight } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.primaryText,
  fontSize: fontSize.small,
  lineHeight: lineHeight.small,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: "bold" } as TextStyle,

  /**
   * Large headers.
   */
  header: {
    ...BASE,
    fontSize: fontSize.mediumPlus,
    lineHeight: lineHeight.mediumPlus,
  } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: fontSize.smaller, lineHeight: lineHeight.smaller } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, color: color.secondaryText } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
