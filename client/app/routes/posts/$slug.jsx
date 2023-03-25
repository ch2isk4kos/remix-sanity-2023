import { useLoaderData } from "@remix-run/react";
import Post from "~/components/posts/Post";
import { client } from "~/lib/sanity";

export const loader = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(query, params);

  return { post };
};

export default function BlogPost() {
  const { post } = useLoaderData();

  return <Post post={post} />;
}
