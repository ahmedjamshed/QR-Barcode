import { ViewStyle, TextStyle } from "react-native"
import { color, dimensions, spacing, fontSize, lineHeight } from "../../theme"

const BASE_VIEW: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
}

const BASE_TEXT: TextStyle = {
  paddingTop: spacing.medium,
  textAlign: "center",
}

const BASE_ICON: TextStyle = {}

export const viewPresets = {
  primary: {
    ...BASE_VIEW,
  } as ViewStyle,

  secondary: {
    ...BASE_VIEW,
  } as ViewStyle,

  dialog: {
    ...BASE_VIEW,
    marginHorizontal: spacing.smaller,
    width: dimensions.screenWidth * 0.24,
  } as ViewStyle,
}

export const textPresets = {
  primary: {
    ...BASE_TEXT,
  } as TextStyle,

  secondary: {
    ...BASE_TEXT,
  } as TextStyle,

  dialog: {
    ...BASE_TEXT,
    fontSize: fontSize.small,
    lineHeight: lineHeight.small,
  } as TextStyle,
}

export const iconPresets = {
  primary: {
    ...BASE_ICON,
  } as TextStyle,

  secondary: {
    ...BASE_ICON,
    color: color.iconSecondary,
  } as TextStyle,

  dialog: {
    ...BASE_ICON,
    fontSize: dimensions.screenWidth * 0.16,
    color: color.iconSecondary,
  } as TextStyle,
}

export type IconTextButtonPresetNames = keyof typeof viewPresets
