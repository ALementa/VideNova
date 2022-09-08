import React from "react"
import "./formAddNewVideo.css"
import FormAddNewVideo from "./formAddNewVideo"
import VideoImg from "../../../../assets/png/Video_img.png"

export default {
  title: "components/FormAddNewVideo",
  component: FormAddNewVideo,
  argTypes: {
    variants: {
      options: ["main", "load", "successful"],
      control: { type: "radio" },
    },
  },
}

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FormAddNewVideo {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
  variants: "main",
  videoimg: VideoImg,
}
