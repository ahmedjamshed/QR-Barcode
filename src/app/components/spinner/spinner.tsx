import React from "react"
import { View, ActivityIndicator } from "react-native"
import { presets } from "./spinner.presets"
import { SpinnerProps } from "./spinner.props"
import { color } from "../../theme"
/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Spinner(props: SpinnerProps) {
  // grab the props
  const { preset = "primary", style: styleOverride, spinnerColor = color.primary } = props

  // assemble the style
  const presetToUse = presets[preset] || presets.primary
  const style = { ...presetToUse, ...styleOverride }

  return (
    <View style={style}>
      <ActivityIndicator animating={true} size="large" color={spinnerColor} />
    </View>
  )
}
