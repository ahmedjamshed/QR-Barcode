import * as React from "react"
import { Alert } from "react-native"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { IconButton } from "./icon-button"

declare var module

storiesOf("IconButton", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary button.">
        <IconButton name="save" onPress={() => Alert.alert("pressed")} />
      </UseCase>
    </Story>
  ))
