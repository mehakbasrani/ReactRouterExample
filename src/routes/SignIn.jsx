import { Form, redirect } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Input, Icon, Label, Button } from "semantic-ui-react";

export default function SignIn() {
  return (
    <>
      <h1>Sign In</h1>
      <Form method="post" action="/signIn">
        <Label style={{ marginRight: "15px" }}>
          Email
          <Icon name="mail" />
        </Label>
        <Input
          icon="at"
          iconPosition="left"
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <br />
        <Label style={{ marginRight: "15px" }}>Password</Label>
        <Input
          icon="users"
          iconPosition="left"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your passowrd here"
          required
        />
        <br />
        <br />

        <Button content="Submit" primary />
      </Form>
    </>
  );
}

export const signInAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    password: data.get("password"),
  };
  console.log(submission);
  return redirect("/root");
};
