import * as React from "react";
import { posts } from "../data/posts";
import { BlogPost } from "./BlogPost";
import { SearchBar } from "./SearchBar";
import { CategoryFilter } from "./CategoryFilter";
import { NavigationProp } from "@react-navigation/core";
import { MainStackParamList } from "../NavigationParamList";

interface BlogListProps {
  navigation: NavigationProp<MainStackParamList>;
}

export function BlogList({ navigation }: BlogListProps) {
  const [searchText, setSearchText] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const categories = React.useMemo(() => 
    Array.from(new Set(posts.map(post => post.category))),
    []
  );

  const filteredPosts = React.useMemo(() => 
    posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchText.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }),
    [searchText, selectedCategory]
  );

  return (
    <flexboxLayout flexDirection="column" className="h-full bg-gray-100">
      <SearchBar onSearch={setSearchText} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <scrollView>
        <stackLayout className="p-4 space-y-4">
          {filteredPosts.map((post) => (
            <BlogPost
              key={post.id}
              post={post}
              onTap={() => navigation.navigate("PostDetail", { postId: post.id })}
            />
          ))}
          {filteredPosts.length === 0 && (
            <label className="text-center text-gray-500 p-4">
              No posts found
            </label>
          )}
        </stackLayout>
      </scrollView>
    </flexboxLayout>
  );
}