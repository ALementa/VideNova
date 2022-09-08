import React from "react"
import Video from "./video"

export default {
  title: "COMPONENTS/Video",
  component: Video,
}

export function MyVideo(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Video {...args} />
}

MyVideo.args = {
  urlVideo: "https://www.youtube.com/watch?v=b71Dd-7iGeU",
  titleVideo: "Swg react",
  descriptionVideo:
    "Якби на україській, чи хочаби на руцкій((( The best of the best",
}
