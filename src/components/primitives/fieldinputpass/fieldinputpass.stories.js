import React from "react"
import FieldInputPass from "./fieldinputpass"

export default {
  title: "components/FieldInputPass",
  component: FieldInputPass,
  argTypes: {
    disabled: { boolean: { action: true } },
    valid: { boolean: { action: true } },
    required: { boolean: { action: false } },
  },
}

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FieldInputPass {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
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
