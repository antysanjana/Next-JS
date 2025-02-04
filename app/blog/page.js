import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Blog 1 description",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Blog 2 description",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "Blog 3 description",
    },
  ];

  return (
    <main className="mt-6">
      <div className="mb-6">This is blogs page</div>
      <ul>
        {blogs.map((blog) => (
          <li className="mb-5" key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
