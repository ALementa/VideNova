import React, { useState } from "react"
import Button from "./index"

export default {
  title: "Primitives/Button",
  component: Button,
  argTypes: {
    label: "Button",
    onClick: "",
    variant: {
      options: ["main", "transparent", "link"],
      control: { type: "radio" },
    },
  },
}

export function MainButton(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button {...args} />
}
MainButton.args = {
  label: "Start Now",
  onClick: "http://google.com",
  variant: "main",
}

export function TransparentButton(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button {...args} />
}
TransparentButton.args = {
  label: "Start Now",
  onClick: "http://google.com",
  variant: "transparent",
}

export function LinkButton(args) {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      Lorem ipsum <Button {...args} />
    </>
  )
}
LinkButton.args = {
  label: "Sign Up",
  onClick: "http://google.com",
  variant: "link",
}

export function Disabled(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button {...args} />
}
Disabled.args = {
  label: "Disabled",
  onClick: "http://google.com",
  variant: "main",
  disabled: true,
}

export function Loading(args) {
  const [state, setState] = useState(false)
  const toggle = () => setState(!state)
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button {...args} loading={state} onClick={toggle} />
}
Loading.args = {
  label: "Click for loading",
  variant: "main",
}
