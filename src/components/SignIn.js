import React from "react";

function SignIn() {
  const onEmailChange = (event) => {
    console.log(event.target.value);
  };
  const onPasswordChange = (event) => {
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
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba grow b--black bg-transparent shadow-5 pointer f6 dib"
                type="submit"
                onClick={() => {}}
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <a href="/register">
                <p className="f6 link dim black db">Register</p>
              </a>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
}

export default SignIn;
