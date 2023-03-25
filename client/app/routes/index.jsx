import { useLoaderData } from "@remix-run/react";
import Posts from "~/components/Posts";
import { client } from "~/lib/sanity";

export const loader = async () => {
  const query = `*[_type == "post" && defined(slug.current)]`;
  const posts = await client.fetch(query);
  return { posts };
};

export default function Index() {
  const { posts } = useLoaderData();
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Posts posts={posts} />
    </main>
  );
}
