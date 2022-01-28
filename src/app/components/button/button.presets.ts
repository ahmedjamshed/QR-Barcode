import { ViewStyle, TextStyle } from "react-native"
import { color, spacing, dimensions, fontSize, lineHeight } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing.small,
  paddingHorizontal: spacing.smaller,
  borderRadius: dimensions.screenWidth * 0.02,
  justifyContent: "center",
  alignItems: "center",
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing.small,
  paddingVertical: spacing.tiny,
  color: color.buttonText,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  /**
   * A smaller piece of secondard information.
   */
  primary: {
    ...BASE_VIEW,
    backgroundColor: color.button,
  } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: spacing.none,
    paddingVertical: spacing.none,
    borderRadius: spacing.none,
    alignItems: "flex-start",
  } as ViewStyle,
}

export const textPresets = {
  primary: {
    ...BASE_TEXT,
    fontSize: fontSize.medium,
    lineHeight: lineHeight.medium,
  } as TextStyle,

  link: {
    ...BASE_TEXT,
    paddingHorizontal: spacing.none,
    paddingVertical: spacing.none,
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
