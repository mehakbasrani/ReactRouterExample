import { Form, useLoaderData, redirect } from "react-router-dom";
import { updateContact } from "../contact";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/root/contacts/${params.contactId}`);
}

export default function UserDetails() {
  const { contact } = useLoaderData();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          defaultValue={contact.twitter}
        />
      </label>

      <p>
        <button type="submit">Save</button>
      </p>
    </Form>
  );
}
