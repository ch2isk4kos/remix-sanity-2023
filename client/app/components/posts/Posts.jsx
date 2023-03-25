import { Link } from "@remix-run/react";

export default function Posts({ posts }) {
  return (
    <main>
      {posts?.length > 0 ? (
        posts.map((post) => (
          <Link
            key={post._id}
            to={`/posts/${post.slug.current}`}
            className="hover:bg-blue-50"
          >
            <h2>{post.title}</h2>
          </Link>
        ))
      ) : (
        <div className="text-red-500">No posts found</div>
      )}
    </main>
  );
}
