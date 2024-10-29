export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with NativeScript",
    content: "NativeScript is a powerful framework for building native mobile apps. Learn how to set up your development environment and create your first app with ease.",
    author: "John Doe",
    date: "2024-03-20",
    category: "Tutorial",
    imageUrl: "https://picsum.photos/200/300"
  },
  {
    id: 2,
    title: "Building Cross-Platform Apps",
    content: "Learn how to create apps that work seamlessly on both iOS and Android. Discover best practices for maintaining a single codebase.",
    author: "Jane Smith",
    date: "2024-03-19",
    category: "Development",
    imageUrl: "https://picsum.photos/200/301"
  },
  {
    id: 3,
    title: "Mobile UI Best Practices",
    content: "Discover the essential principles for creating engaging mobile interfaces. From layout to typography, learn what makes a great mobile UI.",
    author: "Mike Johnson",
    date: "2024-03-18",
    category: "Design",
    imageUrl: "https://picsum.photos/200/302"
  }
];