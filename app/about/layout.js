import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About us",
  description: "This is about us page",
};

export default function AboutLayout({ children }) {
  return (
    <main>
      <div>
        <nav className="mt-6 mb-6">
          <ul className="flex gap-3">
            <li>
              <Link href="/about/mission">Mission</Link>
            </li>
            <li>|</li>
            <li>
              <Link href="/about/vision">Vision</Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    </main>
  );
}
