import { StyleSheet, ViewStyle, TextStyle } from "react-native"
import { color, spacing, dimensions } from "../../theme"

export const HeaderStaticStyle = StyleSheet.create({
  SAFE: {
    backgroundColor: color.secondaryBackground,
    zIndex: 6,
  } as ViewStyle,

  SHADOW: {
    elevation: 6,
    shadowColor: color.shadow,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 2,
    zIndex: 6,
  } as ViewStyle,

  ROOT: {
    height: dimensions.screenWidth * 0.13,
    paddingHorizontal: spacing.tiny,
    backgroundColor: color.secondaryBackground,
    flexDirection: "row",
  } as ViewStyle,

  TITLE_VIEW: {
    flex: 1,
    paddingTop: spacing.tiny,
    paddingHorizontal: spacing.tiny,
    justifyContent: "center",
  } as ViewStyle,

  TITLE: {
    color: color.headerText,
  } as TextStyle,
})
