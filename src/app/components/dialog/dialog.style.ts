import { StyleSheet, ViewStyle, TextStyle } from "react-native"
import { color, dimensions, spacing, lineHeight } from "../../theme"

export const DialogStaticStyle = StyleSheet.create({
  ROOT: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,

  DIALOG: {
    backgroundColor: color.primaryBackground,
    borderRadius: dimensions.screenWidth * 0.01,
    height: dimensions.screenWidth * 0.6,
    paddingTop: spacing.medium,
    width: "90%",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
  } as ViewStyle,

  CLOSE: {
    position: "absolute",
    top: 0,
    right: 0,
    width: dimensions.screenWidth * 0.1,
    height: dimensions.screenWidth * 0.1,
  } as ViewStyle,

  TEXT: {
    paddingHorizontal: spacing.large,
    lineHeight: lineHeight.medium,
    textAlign: "center"
  } as TextStyle,

  BUTTON: {
    width: "45%"
  } as ViewStyle,
})
