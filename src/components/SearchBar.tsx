import * as React from "react";

interface SearchBarProps {
  onSearch: (text: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <stackLayout className="p-2 bg-white border-b border-gray-200">
      <textField
        className="p-2 bg-gray-100 rounded-lg"
        hint="Search posts..."
        onTextChange={(args) => onSearch(args.value)}
      />
    </stackLayout>
  );
}