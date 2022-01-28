import * as React from "react"
import { Button, Icon } from "../"
import { viewPresets, iconPresets } from "./icon-button.presets"
import { IconButtonProps } from "./icon-button.props"
import { mergeAll, flatten } from "ramda"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function IconButton(props: IconButtonProps) {
  // grab the props
  const {
    preset = "primary",
    style: styleOverride,
    iconStyle: iconStyleOverride,
    name,
    ...rest
  } = props

  const viewStyle = mergeAll(flatten([viewPresets[preset] || viewPresets.primary, styleOverride]))
  const iconStyle = { ...(iconPresets[preset] || iconPresets.primary), ...iconStyleOverride }

  return (
    <Button preset="link" style={viewStyle} {...rest}>
      <Icon name={name} style={iconStyle} />
    </Button>
  )
}
