/**
 * NOTE TO DEVS:
 *
 * fontSize should consistent and font size thought of as a first class technique up
 * there with color and typefaces.
 *
 * Which type of scale you use is based on the design.
 *
 * If you've got simpler app, you may only need 6 items.  Or maybe you want a fontSize scale
 * to be named:
 *
 * export const fontSize = {
 *   tiny: 4,
 *   small: 8,
 *   medium: 12,
 *   large: 24,
 *   huge: 64
 * }
 *
 * Whatever you choose, try to stick with these, and not freestyle it everywhere.
 *
 * Feel free to delete this block.
 */

/**
 * The available fontSize.
 *
 * Here's the rough guideline.  Customize this for you usage.  It's ok to put exceptions
 * within the components themselves if they are truly exceptions.
 *
 * 0 = none    - nothing. only here to bust out of a zero-based array.
 * 1 = tiny    - elements contextually close to each other
 * 2 = smaller - for groups of closely related items or perhaps borders
 * 3 = small   - ?
 * 4 = medium  - ?
 * 5 = medium+ - ?
 * 6 = large   - between groups of content that aren't related?
 * 7 = huge    - ?
 * 8 = massive - an uncomfortable amount of font size
 */

import { getScaleValueFromWidthPer } from "./dimensions"

// export const fontSize = [0, 4, 8, 12, 16, 24, 32, 48, 64]

// export const lineHeight = [0, 4, 8, 12, 16, 24, 32, 48, 64]

export const fontSize = {
  tiny: getScaleValueFromWidthPer("2%"),
  smaller: getScaleValueFromWidthPer("3%"),
  small: getScaleValueFromWidthPer("4%"),
  medium: getScaleValueFromWidthPer("5%"),
  mediumPlus: getScaleValueFromWidthPer("6%"),
  large: getScaleValueFromWidthPer("7%"),
  huge: getScaleValueFromWidthPer("8%"),
  massive: getScaleValueFromWidthPer("9%"),
}

export const lineHeight = {
  tiny: getScaleValueFromWidthPer("2.5%"),
  smaller: getScaleValueFromWidthPer("3.5%"),
  small: getScaleValueFromWidthPer("4.5%"),
  medium: getScaleValueFromWidthPer("5.5%"),
  mediumPlus: getScaleValueFromWidthPer("6.5%"),
  large: getScaleValueFromWidthPer("7.5%"),
  huge: getScaleValueFromWidthPer("8.5%"),
  massive: getScaleValueFromWidthPer("9.5%"),
}
