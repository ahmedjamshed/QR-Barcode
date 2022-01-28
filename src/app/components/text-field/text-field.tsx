import * as React from "react"
import { TextInput } from "react-native"
import { color } from "../../theme"
import { translate } from "../../i18n"
import { TextFieldProps } from "./text-field.props"
import { TextFieldStaticStyle as styles } from "./text-field.style"

/**
 * A component which has a label and an input together.
 */
export const TextField: React.FunctionComponent<TextFieldProps> = props => {
  const { placeholderTx, placeholder, style: styleOverride, forwardedRef, ...rest } = props,
    actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

  return (
    <TextInput
      {...rest}
      style={{ ...styles.INPUT, ...styleOverride }}
      placeholder={actualPlaceholder}
      placeholderTextColor={color.secondaryText}
      underlineColorAndroid={color.transparent}
      ref={forwardedRef}
    />
  )
}
