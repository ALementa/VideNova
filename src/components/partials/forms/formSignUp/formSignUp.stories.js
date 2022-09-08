import React from "react"
import FormSignUp from "./formSignUp"
import "./formSignUp.css"

export default {
  title: "components/formSignUp",
  component: FormSignUp,
  argTypes: {
    error: { boolean: { action: false } },
    load: { boolean: { action: false } },
  },
}

function Template(args) {
  return <FormSignUp {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
  error: false,
  load: false,
}
