import { palette } from "./palette"

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  primaryBackground: palette.white,

  secondaryBackground: palette.jacksonsPurple,

  dialogBackground: palette.dimBlack,

  toastBackground: palette.lightBlack,
  /**
   * The main tinting color.
   */
  primary: palette.jacksonsPurple,

  button: palette.jacksonsPurple,

  floatingButton: palette.jacksonsPurple,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.alto,
  /**
   * The default color of text in many components.
   */
  primaryText: palette.black,

  secondaryText: palette.doveGray,

  headerText: palette.white,

  tabLabel: palette.white,

  buttonText: palette.white,

  toastText: palette.white,

  link: palette.jacksonsPurple,

  iconPrimary: palette.white,

  iconSecondary: palette.jacksonsPurple,

  arrow: palette.blackSqueeze,

  shadow: palette.black,

  radio: palette.jacksonsPurple,

  border: palette.jacksonsPurple,

  tabIndicator: palette.white,

  qrCode: palette.black,

  /**
   * Storybook background for Text stories, or any stories where
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  storybookDarkBg: palette.black,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  storybookTextColor: palette.black,
}
