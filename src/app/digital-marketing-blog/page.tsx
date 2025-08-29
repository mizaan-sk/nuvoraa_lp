// src/app/blog/page.tsx
import { getPosts } from "../../../utils/api";
import BlogSec from "./components/BlogSec";

export const dynamic = "force-dynamic";
export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="bg-[#E0D9CD] min-h-screen">
      <BlogSec posts={posts} />
    </div>
  );
}
