// src/types.ts
export interface Post {
    id: number;
    title: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
    link: string;
}
  