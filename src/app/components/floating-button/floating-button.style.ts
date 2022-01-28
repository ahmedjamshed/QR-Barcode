import { StyleSheet, ViewStyle, TextStyle } from "react-native"
import { color, spacing } from "../../theme"

export const FloatingButtonStaticStyle = StyleSheet.create({
  BUTTON: {
    backgroundColor: color.floatingButton,
    shadowColor: color.shadow,
    position: "absolute",
  } as ViewStyle,

  ICON: {} as TextStyle,
})

export const DynamicFloatingButtonStaticStyle = (
  diameter: number,
  press: number,
  positionY: string,
  positionX: string,
) =>
  StyleSheet.create({
    BUTTON: {
      width: diameter,
      height: diameter,
      borderRadius: diameter / 2,
      elevation: press,
      shadowOpacity: press / 10,
      shadowRadius: press / 2,
      shadowOffset: {
        height: press / 2,
        width: 0,
      },
      alignItems: "center",
      justifyContent: "center",
      top: positionY === "top" ? spacing.large : undefined,
      bottom: positionY === "top" ? undefined : spacing.large,
      left: positionX === "left" ? spacing.medium : undefined,
      right: positionX === "left" ? undefined : spacing.medium,
    } as ViewStyle,

    ICON: {
      fontSize: diameter / 3,
    } as TextStyle,
  })
