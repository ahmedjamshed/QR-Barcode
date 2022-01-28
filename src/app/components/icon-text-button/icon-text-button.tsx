import * as React from "react"
import { Button, Icon, Text } from "../"
import { viewPresets, textPresets, iconPresets } from "./icon-text-button.presets"
import { IconTextButtonProps } from "./icon-text-button.props"
import { mergeAll, flatten } from "ramda"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function IconTextButton(props: IconTextButtonProps) {
  // grab the props
  const {
      preset = "primary",
      style: styleOverride,
      iconStyle: iconStyleOverride,
      textStyle: textStyleOverride,
      name,
      text,
      tx,
      ...rest
    } = props,
    viewStyle = mergeAll(flatten([viewPresets[preset] || viewPresets.primary, styleOverride])),
    iconStyle = { ...(iconPresets[preset] || iconPresets.primary), ...iconStyleOverride },
    textStyle = { ...(textPresets[preset] || textPresets.primary), ...textStyleOverride }

  return (
    <Button preset="link" style={viewStyle} {...rest}>
      <Icon name={name} style={iconStyle} />
      <Text text={text} tx={tx} style={textStyle} />
    </Button>
  )
}
