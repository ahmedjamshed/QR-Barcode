import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Dialog } from "./dialog"

declare var module

storiesOf("Dialog", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="default/stretch" usage="Full screen background.">
        <Dialog
          text="go back I'm sure you idiot"
          buttonOnPress={() => {}}
        />
      </UseCase>
    </Story>
  ))
