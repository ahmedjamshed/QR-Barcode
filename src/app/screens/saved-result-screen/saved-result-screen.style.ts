import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native"
import { spacing, fontSize, lineHeight, dimensions, color } from "../../theme"

export const SavedResultScreenStaticStyle = StyleSheet.create({
  ROOT: {
    flex: 1,
  } as ViewStyle,

  CONTENT: {
    paddingVertical: spacing.smaller,
    paddingHorizontal: spacing.small,
    flexGrow: 1,
    alignItems: "center",
  } as ViewStyle,

  IMAGE: {
    width: dimensions.screenWidth,
    resizeMode: "contain",
  } as ImageStyle,

  QR: {
    height: dimensions.screenWidth * 0.9,
  } as ImageStyle,

  BAR: {
    height: dimensions.screenWidth * 0.59,
  } as ImageStyle,

  LINK: {
    color: color.link,
  } as TextStyle,

  TEXT: {
    paddingTop: spacing.medium,
    fontSize: fontSize.medium,
    lineHeight: lineHeight.medium,
    flex: 1,
  } as TextStyle,

  BOTTOM: {
    marginBottom: spacing.massive,
  } as ViewStyle,
})
