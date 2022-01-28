import { ViewStyle } from "react-native"

/**
 * All Background will start off looking like this.
 */
const BASE: ViewStyle = {
  flex: 1,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  alignItems: "center",
  justifyContent: "center",
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
  } as ViewStyle,

  absolute: {
    ...BASE,
    position: "absolute",
  } as ViewStyle,

  relative: {
    ...BASE,
    position: "absolute",
  } as ViewStyle,

  secondary: {
    ...BASE,
    flex: 0,
    flexGrow: 1,
  } as ViewStyle,
}

/**
 * A list of preset names.
 */
export type SpinnerPresets = keyof typeof presets
