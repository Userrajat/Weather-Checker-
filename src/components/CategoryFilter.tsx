import * as React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <scrollView orientation="horizontal" className="p-2">
      <stackLayout orientation="horizontal" className="space-x-2">
        <button
          className={`px-3 py-1 rounded-full ${!selectedCategory ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onTap={() => onSelectCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-1 rounded-full ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onTap={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </stackLayout>
    </scrollView>
  );
}