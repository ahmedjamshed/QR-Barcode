import * as React from "react"
import { SafeAreaView, View } from "react-native"
import { HeaderProps } from "./header.props"
import { IconButton, Text } from "../"
import { translate } from "../../i18n/"
import { HeaderStaticStyle as styles } from "./header.style"

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export const Header: React.FunctionComponent<HeaderProps> = props => {
  const {
      onLeftPress,
      onRightPress,
      rightIcon,
      leftIcon,
      headerText,
      headerTx,
      style: styleOverride,
      titleStyle: titleStyleOverride,
      hideShadow,
    } = props,
    header = headerText || (headerTx && translate(headerTx)) || ""

  return (
    <>
      <SafeAreaView style={styles.SAFE} />
      <View style={{ ...styles.ROOT, ...styleOverride, ...(hideShadow ? {} : styles.SHADOW) }}>
        {leftIcon && <IconButton preset="header" name={leftIcon} onPress={onLeftPress} />}
        <View style={styles.TITLE_VIEW}>
          <Text preset="header" style={{ ...styles.TITLE, ...titleStyleOverride }} text={header} />
        </View>
        {rightIcon &&
          rightIcon.length > 0 &&
          rightIcon.map((icon, index) => (
            <IconButton
              preset="header"
              key={icon}
              name={icon}
              onPress={onRightPress && onRightPress[index]}
            />
          ))}
      </View>
    </>
  )
}
