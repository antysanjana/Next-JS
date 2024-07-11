import React from "react";

export default async function Comments({ promise }) {
  const comments = await promise;
  return (
    <div>
      <h2 className="text-red-700 mt-4">Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li className="mt-4" key={comment.id}>
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
