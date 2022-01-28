import * as React from "react"
// import { I18nManager } from "react-native"
import { TabView as Tab, TabBar } from "react-native-tab-view"
// import Animated from "react-native-reanimated"
import { dimensions } from "../../theme"
// import { Spinner } from "../"
import { TabViewProps } from "./tab-view.props"
import {
  TabViewStaticStyle as styles,
  // DynamicRadioStaticStyle as dynmicStyles,
} from "./tab-view.style"

export const TabView: React.FunctionComponent<TabViewProps> = props => {
  const { screens, hideShadow, scrollEnabled, onIndexChange } = props,
    _keys = Object.keys(screens).map(key => {
      return { key, title: key.replace(/\_/gi, " ") }
    }),
    [index, setIndex] = React.useState(0),
    _renderScene = ({ route, jumpTo }) => {
      const { navigation } = props,
        _key = route.key,
        Screen = screens[_key]
      return <Screen navigation={navigation} route={route} key={_key} jumpTo={jumpTo} />
    },
    _handleIndexChange = React.useMemo(
      () => index => {
        setIndex(index)
        onIndexChange(_keys[index].key)
      },
      [],
    )

  return (
    <Tab
      navigationState={{
        index,
        routes: _keys,
      }}
      renderScene={_renderScene}
      renderTabBar={props => (
        <TabBar
          scrollEnabled={scrollEnabled}
          bounces
          {...props}
          style={{
            ...(hideShadow ? {} : styles.SHADOW),
            ...styles.VIEW,
          }}
          tabStyle={styles.TAB}
          indicatorStyle={styles.INDICATOR}
          labelStyle={styles.LABEL}
          pressOpacity={0.3}
        />
      )}
      onIndexChange={_handleIndexChange}
      initialLayout={{ width: dimensions.screenWidth, height: 0 }}
    />
  )
}
