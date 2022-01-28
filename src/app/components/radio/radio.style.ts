import { StyleSheet, ViewStyle, TextStyle } from "react-native"
import { color, spacing, dimensions, fontSize, lineHeight } from "../../theme"

export const RadioStaticStyle = StyleSheet.create({
  ROOT: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,

  OUTLINE: {
    borderColor: color.radio,
  } as ViewStyle,

  FILL: {
    backgroundColor: color.radio,
  } as ViewStyle,

  LABEL: {
    paddingLeft: spacing.smaller,
    paddingStart: spacing.smaller,
    fontSize: fontSize.medium,
    lineHeight: lineHeight.medium,
  } as TextStyle,
})

export const DynamicRadioStaticStyle = (diameter: number) =>
  StyleSheet.create({
    OUTLINE: {
      width: diameter,
      height: diameter,
      borderRadius: diameter / 2,
      borderWidth: diameter - (diameter - dimensions.screenWidth * 0.005),
      alignItems: "center",
      justifyContent: "center",
    } as ViewStyle,

    FILL: {
      width: diameter - spacing.small,
      height: diameter - spacing.small,
      borderRadius: (diameter - spacing.smaller) / 2,
    } as ViewStyle,
  })
