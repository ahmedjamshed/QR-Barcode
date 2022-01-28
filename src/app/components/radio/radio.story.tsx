/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */

import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Radio } from "./radio"
import { Toggle } from "react-powerplug"

declare var module

storiesOf("Radio", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Behaviour", () => (
    <Story>
      <UseCase text="The Radio" usage="Use the radio to represent on/off states.">
        <Toggle initial={false}>
          {({ on, toggle }) => <Radio value={on} onToggle={toggle} text="Toggle me" />}
        </Toggle>
      </UseCase>
      <UseCase text="value = true" usage="This is permanently on.">
        <Radio value={true} text="Always on" />
      </UseCase>
      <UseCase text="value = false" usage="This is permanantly off.">
        <Radio value={false} text="Always off" />
      </UseCase>
    </Story>
  ))
