import axios from "axios";

// Base URL for Strapi
const API_URL = "https://favorable-thrill-bc21f9d6f0.strapiapp.com/api";

// =========================
// Type Definitions
// =========================

export interface Media {
  url: string;
  name?: string;
}

// Rich text content types from Strapi
export interface RichTextChild {
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  type?: 'text' | 'link';
  url?: string; // For links
  children?: RichTextChild[];
}

export interface RichTextBlock {
  type: 'paragraph' | 'heading' | 'list' | 'list-item' | 'quote' | 'code' | 'image';
  level?: number; // For headings (1-6)
  format?: 'ordered' | 'unordered'; // For lists
  children?: RichTextChild[];
  image?: Media; // For image blocks
}

export interface BlogPost {
  id: number;
  Title: string;
  Slug: string;
  Content: RichTextBlock[] | string;
  CoverImage?: Media[];
  createdAt?: string;
  updatedAt?: string;
  meta:string;
  description:string;
}

// =========================
// API Functions
// =========================

export const getPosts = async (): Promise<BlogPost[]> => {
  try {
    const res = await axios.get<{ data: BlogPost[] }>(`${API_URL}/posts?populate=*`);
    
    // Log for debugging
    // console.log("API Response:", res.data.data);
    
    return res.data.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const res = await axios.get<{ data: BlogPost[] }>(
      `${API_URL}/posts?filters[Slug][$eq]=${slug}&populate=*`
    );
    
    const post = res.data.data[0];
    // console.log("Single post content:", post?.Content);
    
    return post ? post : null;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
};

// Helper function to extract plain text from rich content for search/preview
export const extractPlainText = (content: RichTextBlock[] | string): string => {
  if (typeof content === 'string') return content;
  if (!Array.isArray(content)) return '';
  
  return content
    .map(block => {
      if (block.children) {
        return block.children
          .map(child => extractTextFromChild(child))
          .join('');
      }
      return '';
    })
    .join(' ')
    .trim();
};

const extractTextFromChild = (child: RichTextChild): string => {
  if (child.text) return child.text;
  if (child.children) {
    return child.children.map(c => extractTextFromChild(c)).join('');
  }
  return '';
};