import { useEffect, useState } from "react";
import { Frontmatter } from "../utils/types";
import { SmallerBlogPreview } from "./blog-preview";

export function BlogSection({ posts }: { posts: { content: string; frontmatter: Frontmatter }[] }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) {
    return null;
  }

  return (
    <section className="mt-32">
      <h2 className="text-[3.5rem] font-medium text-center">From the blog</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-20 xl:grid-cols-3 justify-items-center lg:flex-row justify-evenly mt-14">
        {posts.splice(0, 3).map(({ frontmatter }, index) => (
          <SmallerBlogPreview key={index} {...frontmatter} />
        ))}
        <SmallerBlogPreview title="author" author={""} translator={""} meta={""} slug={""} />
      </div>
    </section>
  );
}
