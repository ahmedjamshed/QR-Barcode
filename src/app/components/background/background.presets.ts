import { ViewStyle } from "react-native"
import { color } from "../../theme"

/**
 * All Background will start off looking like this.
 */
const BASE: ViewStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}

/**
 * All the variations of Background styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default Background styles.
   */
  primary: {
    ...BASE,
    backgroundColor: color.primaryBackground
  } as ViewStyle,

  secondary: {
    ...BASE,
    backgroundColor: color.secondaryBackground
  } as ViewStyle,

  dialog: {
    ...BASE,
    backgroundColor: color.dialogBackground
  } as ViewStyle,
}

/**
 * A list of preset names.
 */
export type BackgroundPresets = keyof typeof presets
