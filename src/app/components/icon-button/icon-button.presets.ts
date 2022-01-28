import { ViewStyle, TextStyle } from "react-native"
import { spacing, dimensions, fontSize, color } from "../../theme"

const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing.smaller,
  paddingHorizontal: spacing.smaller,
  alignItems: "center",
  justifyContent: "center",
}

const BASE_ICON: TextStyle = {}

export const viewPresets = {
  primary: {
    ...BASE_VIEW,
  } as ViewStyle,

  secondary: {
    ...BASE_VIEW,
  } as ViewStyle,

  header: {
    ...BASE_VIEW,
    height: dimensions.screenWidth * 0.13,
  } as ViewStyle,
}

export const iconPresets = {
  primary: {
    ...BASE_ICON,
  } as TextStyle,

  secondary: {
    ...BASE_ICON,
    color: color.iconSecondary,
  } as TextStyle,

  header: {
    ...BASE_ICON,
    fontSize: fontSize.medium,
  } as TextStyle,
}

export type IconButtonPresetNames = keyof typeof viewPresets
