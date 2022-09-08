import React from "react"
import "./formSignIn.css"
import FieldInput from "../../../primitives/fieldInput/fieldInput"
import FieldInputPass from "../../../primitives/fieldinputpass/fieldinputpass"
import Button from "../../../primitives/button/index"

export default function FormSignIn(args) {
  // eslint-disable-next-line react/destructuring-assignment
  const isHiDden = args.error
  const displayBlockNone = isHiDden ? "block" : "none"
  const inputError = isHiDden
    ? "containerInputSignIn containerInputSignInError"
    : "containerInputSignIn"

  return (
    <div className="containerFormSignIn">
      <div className="containerCross">X</div>
      <div className="containerSignIn">
        <div className="heading1">
          Sing <span className="textRed">In</span>
        </div>
        {/* eslint-disable-next-line react/style-prop-object */}
        <div className="textError" style={{ display: displayBlockNone }}>
          <div className="heading5">
            Your Password is incorect. Please, try again
          </div>
        </div>
        <div className="containerInputSignIn">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="heading3" htmlFor="name">
            Name
          </label>
          <FieldInput type="text" placeholder="Type name..." id="name" />
        </div>
        <div className={inputError}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="heading3" htmlFor="password">
            Password
          </label>
          <FieldInputPass
            borderInput
            type="password"
            id="password"
            placeholder="Type password..."
          />
        </div>
        <div className="containerButtonSignIn">
          <Button variant="main" label="Sign In" />
        </div>
        <div className="containerSignInSignUp">
          <div className="heading4">
            Dont have an account <Button variant="link" label="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  )
}

FormSignIn.propTypes = {}

FormSignIn.defaultProps = {}
