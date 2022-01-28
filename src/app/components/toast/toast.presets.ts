import { TextStyle, ViewStyle } from "react-native"
import { fontSize, lineHeight, typography, color, spacing } from "../../theme"

const BASE_VIEW: ViewStyle = {}

const BASE_TEXT: TextStyle = {
  fontSize: fontSize.small,
  lineHeight: lineHeight.small,
  fontFamily: typography.primary,
  color: color.toastText,
}

export const containerPresets = {
  default: {
    ...BASE_VIEW,
  } as ViewStyle,
}

export const textPresets = {
  default: {
    ...BASE_TEXT,
  } as TextStyle,
}

export const positionPresets = {
  default: -spacing.small,
}

export const shadowPresets = {
  default: color.shadow,
}

export const backgroundPresets = {
  default: color.toastBackground,
}

export const tintPresets = {
  default: color.toastText,
}

export type ToastPresets = keyof typeof containerPresets
