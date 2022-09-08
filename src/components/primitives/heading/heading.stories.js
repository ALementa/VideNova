import React from "react"
import H from "./heading"

export default {
  title: "Components/H",
  component: H,
  argTypes: {
    weight: {
      weight: [1, 2, 3, 4, 5, 6],
      control: { type: "radio" },
    },
  },
}

export function Heading1(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <H {...args}>Heading1</H>
}

Heading1.args = {
  weight: 1,
}

export function Heading2(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <H {...args}>Heading2</H>
}

Heading2.args = {
  weight: 2,
}

export function Heading3(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <H {...args}>Heading3</H>
}

Heading3.args = {
  weight: 3,
}

export function Heading4(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <H {...args}>Heading4</H>
}

Heading4.args = {
  weight: 4,
}

export function Heading5(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <H {...args}>Heading5</H>
}

Heading5.args = {
  weight: 5,
}

export function Heading6(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <H {...args}>Heading6</H>
}

Heading6.args = {
  weight: 6,
}
