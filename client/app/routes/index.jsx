import { Link } from "@remix-run/react";

export default function Index() {
  return (
    // Home Page
    <main className="flex items-center justify-center min-h-screen">
      <Link to={"/posts"} className="hover:bg-blue-50">
        Enter
      </Link>
    </main>
  );
}
