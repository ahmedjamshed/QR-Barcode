import { StyleSheet, ViewStyle, TextStyle } from "react-native"
import { spacing, fontSize, lineHeight, dimensions, color } from "../../theme"

export const ResultScreenStaticStyle = StyleSheet.create({
  ROOT: {
    flex: 1,
  } as ViewStyle,

  CONTENT: {
    flexGrow: 1,
  } as ViewStyle,

  SCAN: {
    padding: spacing.medium,
    fontSize: fontSize.medium,
    lineHeight: lineHeight.medium,
  } as TextStyle,

  SHOT: {
    padding: spacing.smaller,
  } as ViewStyle,

  GENERATE: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,

  QR: {
    width: dimensions.screenWidth * 0.8,
    backgroundColor: color.primaryBackground,
    borderRadius: (dimensions.screenWidth * 0.8) / 3,
    margin: spacing.smaller,
  } as ViewStyle,

  BAR: {
    width: dimensions.screenWidth * 0.008,
    height: dimensions.screenWidth * 0.35,
  } as ViewStyle,

  LINK: {
    color: color.link,
  } as TextStyle,

  BOTTOM: {
    bottom: spacing.massive,
    width: "40%",
    alignSelf: "center",
    position: "absolute",
  } as ViewStyle,
})
