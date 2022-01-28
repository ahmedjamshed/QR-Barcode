import * as React from "react"
import { Alert } from "react-native"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { FloatingButton } from "./floating-button"

declare var module

storiesOf("FloatingButton", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary button.">
        <FloatingButton name="add" onPress={() => Alert.alert("pressed")} />
      </UseCase>
    </Story>
  ))
