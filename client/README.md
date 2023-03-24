# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

### Resources

[Sanity Installation](https://www.sanity.io/docs/create-a-sanity-project)
[Tailwind Installation](https://tailwindcss.com/docs/guides/remix)

<p>Success! Now, use these commands to continue:</p>

<p>First: cd <code>/Users/workbench/Development/code/repos/demos/remix-sanity-2023/client/app/sanity</code> - to enter project’s directory</p>
<p>Then: npm run dev - to run Sanity Studio</p>

<p>Other helpful commands</p>
<p>sanity docs - to open the documentation in a browser</p>
<p>sanity manage - to open the project settings in a browser</p>
<p>sanity help - to explore the CLI manual</p>
