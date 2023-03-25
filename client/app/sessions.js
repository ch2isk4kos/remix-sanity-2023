import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",
      sameSite: "lax",
      secrets: [],
    },
  });

export { getSession, commitSession, destroySession };

/**
 * The session cookie will be written by accessing a specific route in the application.
 * The example below will put the user into “preview mode” by writing a session and then redirecting them to the home page.
 * While there’s no authentication layer here, only a user that is also logged into the Sanity Studio will see draft content.
 */
