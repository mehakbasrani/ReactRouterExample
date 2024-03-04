import { useEffect } from "react";
import { Form, Link, Outlet, useLoaderData, redirect } from "react-router-dom";
import { createContact, getContacts } from "../contact";

export default function Root() {
  const { contacts, search } = useLoaderData();

  useEffect(() => {
    document.getElementById("q").value = search;
  }, [search]);

  return (
    <>
      <div id="sidebar">
        <div>
          <Form id="search-Form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="search"
              defaultValue={search}
            />
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export async function action() {
  const contact = await createContact();
  return redirect(`/root/contacts/${contact.id}/add`);
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  const contacts = await getContacts(search);

  return { contacts, search };
}
