import * as React from "react";

interface LocationSearchProps {
  onSearch: (text: string) => void;
}

export function LocationSearch({ onSearch }: LocationSearchProps) {
  return (
    <stackLayout className="p-4 bg-blue-500">
      <textField
        className="p-3 bg-white rounded-full text-gray-800"
        hint="Search location..."
        onTextChange={(args) => onSearch(args.value)}
      />
    </stackLayout>
  );
}