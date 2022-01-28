import * as React from "react"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import qrcodeConfig from "./selection.json"
import { presets } from "./icon.presets"
import { IconProps } from "./icon.props"
import { icons } from "./icon.types"

export const Icon = (props: IconProps) => {
  const { preset, style: styleOverride, name, ...rest } = props,
    Icon = createIconSetFromIcoMoon(qrcodeConfig, "QRCode", "qrcode.ttf"),
    style = { ...(presets[preset] || presets.primary), ...styleOverride },
    color = style.color,
    size = style.fontSize

  return <Icon style={style} name={icons[name]} size={size} color={color} {...rest} />
}
