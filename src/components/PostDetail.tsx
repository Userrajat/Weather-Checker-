import * as React from "react";
import { RouteProp } from "@react-navigation/core";
import { MainStackParamList } from "../NavigationParamList";
import { posts } from "../data/posts";

interface PostDetailProps {
  route: RouteProp<MainStackParamList, "PostDetail">;
}

export function PostDetail({ route }: PostDetailProps) {
  const post = posts.find(p => p.id === route.params.postId);

  if (!post) {
    return (
      <stackLayout className="p-4">
        <label className="text-center text-gray-500">Post not found</label>
      </stackLayout>
    );
  }

  return (
    <scrollView className="bg-white">
      {post.imageUrl && (
        <image
          src={post.imageUrl}
          className="w-full h-60"
          stretch="aspectFill"
        />
      )}
      <stackLayout className="p-4 space-y-4">
        <label className="text-2xl font-bold text-gray-800">{post.title}</label>
        <stackLayout className="flex-row justify-between">
          <label className="text-sm text-gray-600">By {post.author}</label>
          <label className="text-sm text-gray-600">{post.date}</label>
        </stackLayout>
        <label className="text-xs text-blue-500 bg-blue-100 px-2 py-1 rounded-full self-start">
          {post.category}
        </label>
        <label className="text-gray-700" textWrap={true}>
          {post.content}
        </label>
      </stackLayout>
    </scrollView>
  );
}