import React from "react";

function Register() {
  const onEmailChange = (event) => {
    console.log(event.target.value);
  };
  const onPasswordChange = (event) => {
    console.log(event.target.value);
  };
  const onConfirmPasswordChange = (event) => {
    console.log(event.target.value);
  };
  const onFullNameChange = (event) => {
    console.log(event.target.value);
  };
  const onPhoneNumberChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div
      style={{
        height: "100%",
        position: "absolute",
        left: "0px",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "yellowgreen",
      }}
    >
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="fullname">
                  Fullname
                </label>
                <input
                  onChange={onFullNameChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  type="text"
                  name="fullname"
                  id="fullname"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="phone-number">
                  Phone Number
                </label>
                <input
                  onChange={onPhoneNumberChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="confirm password">
                  Confirm Password
                </label>
                <input
                  onChange={onConfirmPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                onClick={() => {}}
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    </div>
  );
}

export default Register;
