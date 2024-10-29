import * as React from "react";
import { BlogPost as BlogPostType } from "../data/posts";

interface BlogPostProps {
  post: BlogPostType;
  onTap?: () => void;
}

export function BlogPost({ post, onTap }: BlogPostProps) {
  return (
    <stackLayout className="bg-white rounded-lg shadow-md" onTap={onTap}>
      {post.imageUrl && (
        <image
          src={post.imageUrl}
          className="w-full h-40 rounded-t-lg"
          stretch="aspectFill"
        />
      )}
      <stackLayout className="p-4">
        <label className="text-xl font-bold text-gray-800">{post.title}</label>
        <stackLayout className="flex-row justify-between my-2">
          <label className="text-sm text-gray-600">By {post.author}</label>
          <label className="text-sm text-gray-600">{post.date}</label>
        </stackLayout>
        <label className="text-xs text-blue-500 bg-blue-100 px-2 py-1 rounded-full self-start">
          {post.category}
        </label>
        <label className="text-gray-700 mt-2" textWrap={true}>
          {post.content.substring(0, 100)}...
        </label>
      </stackLayout>
    </stackLayout>
  );
}