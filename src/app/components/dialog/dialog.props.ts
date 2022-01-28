// import { ViewStyle } from "react-native"

export interface DialogProps {
  text?: string

  tx?: string

  buttonText?: string

  buttonTx?: string

  children?: any

  buttonOnPress?(): void

  closeOnPress?(): void
}
