import React from "react"
import FormSignIn from "./formSignIn"
import "./formSignIn.css"

export default {
  title: "components/formSignIn",
  component: FormSignIn,
  argTypes: {
    error: { boolean: { action: false } },
  },
}

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FormSignIn {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
  error: true,
}
