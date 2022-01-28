import * as React from "react"
import { Alert } from "react-native"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { IconTextButton } from "./icon-text-button"

declare var module

storiesOf("IconTextButton", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary button.">
        <IconTextButton
          preset="secondary"
          text="Generate QR or Bar Code"
          name="scan"
          onPress={() => Alert.alert("pressed")}
        />
      </UseCase>
    </Story>
  ))
