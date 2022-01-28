import { StyleSheet, ViewStyle } from "react-native"
import { dimensions, spacing } from "../../theme"

export const GenerateScreenStaticStyle = StyleSheet.create({
  ROOT: {
    flex: 1,
  } as ViewStyle,

  INPUT: {
    margin: spacing.smaller,
    flex: 2.5,
  } as ViewStyle,

  CONTENT: {
    flex: 1,
    alignItems: "center",
  } as ViewStyle,

  RADIOS: {
    paddingVertical: spacing.tiny,
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,

  RADIO: {
    marginHorizontal: spacing.medium,
  } as ViewStyle,

  BUTTON_VIEW: {
    paddingVertical: spacing.tiny,
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,

  BUTTON: {
    width: dimensions.screenWidth * 0.45,
  } as ViewStyle,
})
