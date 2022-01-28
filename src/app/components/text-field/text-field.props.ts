import { TextInputProps, TextStyle } from "react-native"

export interface TextFieldProps extends TextInputProps {
  /**
   * The placeholder i18n key.
   */
  placeholderTx?: string

  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: TextStyle | TextStyle[]

  forwardedRef?: any
}
