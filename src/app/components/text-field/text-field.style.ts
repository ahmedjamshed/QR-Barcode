import { StyleSheet, TextStyle } from "react-native"
import { typography, color, spacing, dimensions, fontSize, lineHeight } from "../../theme"

export const TextFieldStaticStyle = StyleSheet.create({
  INPUT: {
    fontSize: fontSize.medium,
    lineHeight: lineHeight.medium,
    fontFamily: typography.primary,
    color: color.primaryText,
    borderColor: color.border,
    paddingVertical: spacing.small,
    paddingBottom: spacing.small,
    paddingTop: spacing.small,
    paddingHorizontal: spacing.small,
    paddingLeft: spacing.small,
    paddingRight: spacing.small,
    paddingStart: spacing.small,
    paddingEnd: spacing.small,
    borderWidth: dimensions.screenWidth * 0.004,
    borderRadius: dimensions.screenWidth * 0.01,
    textAlignVertical: "top",
  } as TextStyle,
})
