import { NavigationScreenProps } from "react-navigation"

export interface TabViewProps extends NavigationScreenProps<{}> {
  screens: {
    [key: string]: React.FunctionComponent<any>
  }
  scrollEnabled?: boolean
  hideShadow?: boolean
  initialTabsRender?: number
  onIndexChange?(type: string): void
}
