import * as React from "react"
import { dimensions } from "../../theme"
import { IconButton } from "../"
import { FloatingButtonProps } from "./floating-button.props"
import {
  FloatingButtonStaticStyle as styles,
  DynamicFloatingButtonStaticStyle,
} from "./floating-button.style"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function FloatingButton(props: FloatingButtonProps) {
  // grab the props

  const [press, setPress] = React.useState(6),
    {
      style: styleOverride,
      iconStyle: iconStyleOverride,
      diameter = dimensions.screenWidth * 0.16,
      name,
      positionY = "bottom",
      positionX = "right",
      ...rest
    } = props,
    setActive = React.useMemo(() => (temp: number) => setPress(temp), []),
    dynamicStyles = DynamicFloatingButtonStaticStyle(diameter, press, positionY, positionX)

  return (
    <IconButton
      name={name}
      activeOpacity={1}
      style={{
        ...styles.BUTTON,
        ...styleOverride,
        ...dynamicStyles.BUTTON,
      }}
      iconStyle={{
        ...styles.ICON,
        ...iconStyleOverride,
        ...dynamicStyles.ICON,
      }}
      onPressIn={() => setActive(4)}
      onPressOut={() => setActive(6)}
      {...rest}
    />
  )
}
