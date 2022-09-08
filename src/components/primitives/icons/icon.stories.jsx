import React from "react"
import Icon from "./icon"

export default {
  title: "PRIMITIVES/Icon",
  component: Icon,
  argTypes: {
    nameIcon: {
      options: ["Discord", "Telegram", "Twitter", "Vnova"],
      control: { type: "select" },
    },
  },
}

export function CustomIcon(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Icon {...args} />
}

CustomIcon.args = {
  name: "CustomCart",
  size: "100",
  color: "#4A4847",
}
//
//   export function CustomIcon(args) {
//     return <Icon {...args} />
//   }
//   CustomIcon.args = {
//     nameIcon: "Discord",
//     size: "100",
//     color: "#4A4847",
//   }
