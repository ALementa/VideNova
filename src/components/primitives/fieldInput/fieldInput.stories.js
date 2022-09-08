import React from "react"
import FieldInput from "./fieldInput"

export default {
  title: "components/FieldInput",
  component: FieldInput,
  argTypes: {
    disabled: { boolean: { action: true } },
    valid: { boolean: { action: true } },
    required: { boolean: { action: false } },
  },
}

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FieldInput {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
  type: "password",
  label: "Name",
  textError: "",
  lines: 1,
  placeholder: "Placeholder",
}

export const DisabledFieldInput = Template.bind({})

DisabledFieldInput.args = {
  ...Primary.args,
  disabled: true,
}

export const InvalidFieldInput = Template.bind({})

InvalidFieldInput.args = {
  ...Primary.args,
  textError: "Required",
  required: true,
}

// const InputPass = (args) => <FieldInputPass {...args} />;
//
// export const InputPass = Template.bind({});
//
// InputPass.args = {
//   label: "Name",
//   textError:"",
//   lines:1,
//   placeholder:"Placeholder",
// }
