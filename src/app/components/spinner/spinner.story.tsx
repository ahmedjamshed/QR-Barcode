import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Spinner } from "./spinner"

declare var module

storiesOf("Spinner", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="default/stretch" usage="Full screen background.">
        <Spinner />
      </UseCase>
    </Story>
  ))
