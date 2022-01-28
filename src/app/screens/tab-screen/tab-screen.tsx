import * as React from "react"
import { FlatList, View } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { observer, Observer } from "mobx-react-lite"
import { Button, Text, Icon } from "../../components"
import { useStores } from "../../models/root-store"
import { TabScreenStaticStyle as styles } from "./tab-screen.style"
import { SECONDARY_SCREENS, NAV, ITEM, VALUES, ROUTE_TYPE, HISTORY } from "../../constants"

export interface TabScreenProps extends NavigationScreenProps<{}> {
  route: ROUTE_TYPE
}

export const TabScreen: React.FunctionComponent<TabScreenProps> = observer(props => {
  const {
      stateStore: { scanned, generated, setSavedResult },
    } = useStores(),
    [update, setUpdate] = React.useState(0),
    _history = props.route && props.route.key === HISTORY.GENERATED,
    _data = _history ? generated : scanned,
    _dataLength = _data ? _data.length : 0,
    _itemOnPress = React.useMemo(
      () => (id: string, type: string) => {
        setSavedResult(id)
        return props.navigation.navigate(SECONDARY_SCREENS.SAVED_RESULT, {
          [NAV.TYPE]: type,
        })
      },
      [props.navigation],
    ),
    _renderItem = ({ item: { id, text, date, type } }) => {
      return (
        <Observer>
          {() => (
            <Button
              preset="link"
              style={styles.ITEM}
              onPress={() => _itemOnPress(id, type && ITEM[type.toUpperCase().replace(/\s*/g, "")])}
            >
              <Text text={text} style={styles.TEXT} numberOfLines={1} ellipsizeMode="tail" />
              <View style={styles.INNER}>
                <Text preset="secondary" text={date} style={styles.DATE} />
                {type ? <Text preset="secondary" text={VALUES[type]} style={styles.TYPE} /> : <></>}
              </View>
            </Button>
          )}
        </Observer>
      )
    },
    _renderSeperator = () => <View style={styles.DIVIDER} />,
    _renderEmpty = () => (
      <View style={styles.EMPTY}>
        <Text
          preset="secondary"
          text="Nothing to show here. Tap the button below to get started."
          style={styles.EMPTY_TEXT}
        />
        <Icon preset="arrow" name="arrow" style={styles.EMPTY_ICON} />
      </View>
    ),
    _keyExtractor = (item: any, index: number) => `item${index}`

  if (update !== _dataLength) setUpdate(_dataLength)

  return (
    <FlatList
      data={_data}
      renderItem={_renderItem}
      ItemSeparatorComponent={_renderSeperator}
      ListEmptyComponent={_renderEmpty}
      keyExtractor={_keyExtractor}
      contentContainerStyle={styles.LIST}
      showsVerticalScrollIndicator={false}
    />
  )
})
