import { StyleSheet, ViewStyle, TextStyle } from "react-native"
import { color, spacing, fontSize, lineHeight, dimensions } from "../../theme"

export const TabScreenStaticStyle = StyleSheet.create({
  LIST: {
    flexGrow: 1,
  } as ViewStyle,

  ITEM: {
    paddingVertical: spacing.mediumPlus,
    paddingHorizontal: spacing.medium,
  } as ViewStyle,

  TEXT: {
    fontSize: fontSize.medium,
    lineHeight: lineHeight.medium,
  } as TextStyle,

  INNER: {
    paddingTop: spacing.smaller,
    flexDirection: "row",
  } as ViewStyle,

  DATE: {
    fontSize: fontSize.small,
    lineHeight: lineHeight.small,
    flex: 1,
  } as TextStyle,

  TYPE: {
    fontSize: fontSize.small,
    lineHeight: lineHeight.small,
  } as TextStyle,

  DIVIDER: {
    backgroundColor: color.line,
    height: 1,
    width: "100%",
  } as ViewStyle,

  EMPTY: {
    paddingHorizontal: spacing.large,
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,

  EMPTY_TEXT: {
    fontSize: fontSize.medium,
    lineHeight: lineHeight.massive,
    textAlign: "center",
  } as TextStyle,

  EMPTY_ICON: {
    fontSize: dimensions.screenWidth * 0.35,
    bottom: spacing.tiny,
    position: "absolute",
  } as TextStyle,
})
