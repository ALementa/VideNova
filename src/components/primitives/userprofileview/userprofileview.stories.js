import React from "react"
import UserProfileView from "./userprofileview"
import "./userprofileview.css"
import avatar from "../../../assets/avatars/Anna_May.png"

export default {
  title: "components/UserProfileView",
  component: UserProfileView,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "radio" },
    },
  },
}

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <UserProfileView {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
  name: "Anna May",
  image: avatar,
  size: "large",
}

export const Medium = Template.bind({})

Medium.args = {
  ...Primary.args,
  size: "medium",
}

export const Small = Template.bind({})

Small.args = {
  ...Primary.args,
  size: "small",
}
