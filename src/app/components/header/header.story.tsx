import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Header } from "./header"

declare var module

storiesOf("Header", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Behavior", () => (
    <Story>
      <UseCase noPad text="default" usage="The default usage">
        <Header leftIcon="back" headerText="History" rightIcon={["share", "save"]} />
      </UseCase>
    </Story>
  ))
