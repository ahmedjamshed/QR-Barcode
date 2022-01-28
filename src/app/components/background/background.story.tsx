import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Background } from "./background"

declare var module

storiesOf("Background", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="default/stretch" usage="Full screen background.">
        <Background />
      </UseCase>
    </Story>
  ))
