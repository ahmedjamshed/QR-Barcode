import * as React from "react"
import { TouchableOpacity, View } from "react-native"
import { dimensions } from "../../theme"
import { Text } from "../"
import { RadioProps } from "./radio.props"
import { RadioStaticStyle as styles, DynamicRadioStaticStyle } from "./radio.style"

export function Radio(props: RadioProps) {
  const {
      multiline,
      style: styleOverride,
      outlineStyle: outlineStyleOverride,
      fillStyle: fillStyleOverride,
      textStyle: textStyleOverride,
      onToggle,
      value,
      text,
      tx,
      diameter = dimensions.screenWidth * 0.07,
    } = props,
    numberOfLines = multiline ? 0 : 1,
    onPress = onToggle ? () => onToggle && onToggle(!value) : null,
    dynamicStyles = DynamicRadioStaticStyle(diameter)

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={!props.onToggle}
      onPress={onPress}
      style={{ ...styles.ROOT, ...styleOverride }}
    >
      <View style={{ ...styles.OUTLINE, ...outlineStyleOverride, ...dynamicStyles.OUTLINE }}>
        {props.value && (
          <View style={{ ...styles.FILL, ...fillStyleOverride, ...dynamicStyles.FILL }} />
        )}
      </View>
      <Text
        text={text}
        tx={tx}
        numberOfLines={numberOfLines}
        ellipsizeMode="tail"
        style={{ ...styles.LABEL, ...textStyleOverride }}
      />
    </TouchableOpacity>
  )
}
