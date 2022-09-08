import React from "react"
import "./userCard.css"
import avatar from "../../../assets/avatars/Anna_May.png"
import UserCard from "./userCard"

export default {
  title: "components/UserCard",
  component: UserCard,
}

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <UserCard {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
  name: "Anna May",
  image: avatar,
  videos: "123",
  likes: "12",
}
