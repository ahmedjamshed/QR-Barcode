import * as React from "react"
import { View } from "react-native"
import { IconButton, Text, Button, Background } from "../"
import { DialogProps } from "./dialog.props"
import { DialogStaticStyle as styles } from "./dialog.style"
/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Dialog(props: DialogProps) {
  // grab the props
  const { text, tx, buttonText, buttonTx, buttonOnPress, closeOnPress, children } = props

  return (
    <View style={styles.ROOT}>
      <Background preset="dialog" />
      <View style={styles.DIALOG}>
        {text || tx ? <Text text={text} tx={tx} style={styles.TEXT} /> : <></>}
        {buttonOnPress ? (
          <Button text={buttonText} tx={buttonTx} style={styles.BUTTON} onPress={buttonOnPress} />
        ) : (
          <></>
        )}
        {children}
        <IconButton preset="secondary" name="cross" style={styles.CLOSE} onPress={closeOnPress} />
      </View>
    </View>
  )
}
