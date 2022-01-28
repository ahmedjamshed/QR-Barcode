import React from "react"
import { View } from "react-native"
import { presets } from "./background.presets"
import { BackgroundProps } from "./background.props"
/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Background(props: BackgroundProps) {
  // grab the props
  const { preset = "primary", style: styleOverride } = props

  // assemble the style
  const presetToUse = presets[preset] || presets.primary
  const style = { ...presetToUse, ...styleOverride }

  return <View style={style} />
}
