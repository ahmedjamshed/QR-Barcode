import { StyleSheet, ViewStyle, TextStyle } from "react-native"
import { color, spacing, dimensions, fontSize, lineHeight, typography } from "../../theme"

export const TabViewStaticStyle = StyleSheet.create({
  SHADOW: {
    shadowColor: color.shadow,
    elevation: 6,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 2,
  } as ViewStyle,

  VIEW: {
    backgroundColor: color.primary,
  } as ViewStyle,

  TAB: {} as ViewStyle,

  INDICATOR: {
    // marginHorizontal: spacing.large,
    backgroundColor: color.tabIndicator,
    height: dimensions.screenWidth * 0.01,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  } as ViewStyle,

  LABEL: {
    fontSize: fontSize.small,
    lineHeight: lineHeight.small,
    fontFamily: typography.primary,
    color: color.tabLabel,
    fontWeight: "800",
  } as TextStyle,
})

export const DynamicRadioStaticStyle = (width: number) =>
  StyleSheet.create({
    INDICATOR: {
      width: width - dimensions.screenWidth * 0.185,
    } as ViewStyle,
  })
