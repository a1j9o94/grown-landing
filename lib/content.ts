import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface LearnFrontmatter {
  title: string;
  description: string;
  slug: string;
  category: string;
  date: string;
  keywords: string[];
  relatedRecipes?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

export interface LearnPost {
  frontmatter: LearnFrontmatter;
  content: string;
  slug: string;
}

export interface RecipeFrontmatter {
  title: string;
  description: string;
  slug: string;
  category: string;
  date: string;
  image?: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: number;
  difficulty: "easy" | "medium" | "hard";
  ingredients: string[];
  instructions: string[];
  thcOption?: {
    oil?: string;
    salt?: string;
  };
  storage?: string;
  tips?: string[];
  keywords: string[];
  relatedRecipes?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

export interface RecipePost {
  frontmatter: RecipeFrontmatter;
  content: string;
  slug: string;
}

// Get all learn posts
export function getAllLearnPosts(): LearnPost[] {
  const learnDirectory = path.join(contentDirectory, "learn");

  if (!fs.existsSync(learnDirectory)) {
    return [];
  }

  const files = fs.readdirSync(learnDirectory);

  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(learnDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = file.replace(/\.mdx?$/, "");

      return {
        frontmatter: data as LearnFrontmatter,
        content,
        slug,
      };
    })
    .sort((a, b) => {
      // Sort by category first, then by title
      if (a.frontmatter.category !== b.frontmatter.category) {
        return a.frontmatter.category.localeCompare(b.frontmatter.category);
      }
      return a.frontmatter.title.localeCompare(b.frontmatter.title);
    });
}

// Get a single learn post by slug
export function getLearnPostBySlug(slug: string): LearnPost | null {
  const learnDirectory = path.join(contentDirectory, "learn");
  const mdxPath = path.join(learnDirectory, `${slug}.mdx`);
  const mdPath = path.join(learnDirectory, `${slug}.md`);

  let filePath: string | null = null;

  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  }

  if (!filePath) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as LearnFrontmatter,
    content,
    slug,
  };
}

// Get all learn slugs for static generation
export function getAllLearnSlugs(): string[] {
  const learnDirectory = path.join(contentDirectory, "learn");

  if (!fs.existsSync(learnDirectory)) {
    return [];
  }

  return fs
    .readdirSync(learnDirectory)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

// Group learn posts by category
export function getLearnPostsByCategory(): Record<string, LearnPost[]> {
  const posts = getAllLearnPosts();
  const grouped: Record<string, LearnPost[]> = {};

  for (const post of posts) {
    const category = post.frontmatter.category;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(post);
  }

  return grouped;
}

// Get all recipe posts
export function getAllRecipePosts(): RecipePost[] {
  const recipesDirectory = path.join(contentDirectory, "recipes");

  if (!fs.existsSync(recipesDirectory)) {
    return [];
  }

  const files = fs.readdirSync(recipesDirectory);

  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(recipesDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = file.replace(/\.mdx?$/, "");

      return {
        frontmatter: data as RecipeFrontmatter,
        content,
        slug,
      };
    })
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
}

// Get a single recipe post by slug
export function getRecipePostBySlug(slug: string): RecipePost | null {
  const recipesDirectory = path.join(contentDirectory, "recipes");
  const mdxPath = path.join(recipesDirectory, `${slug}.mdx`);
  const mdPath = path.join(recipesDirectory, `${slug}.md`);

  let filePath: string | null = null;

  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  }

  if (!filePath) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as RecipeFrontmatter,
    content,
    slug,
  };
}

// Get all recipe slugs for static generation
export function getAllRecipeSlugs(): string[] {
  const recipesDirectory = path.join(contentDirectory, "recipes");

  if (!fs.existsSync(recipesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(recipesDirectory)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

// Get recipes by category
export function getRecipesByCategory(category: string): RecipePost[] {
  const recipes = getAllRecipePosts();
  return recipes.filter((recipe) => recipe.frontmatter.category === category);
}

// Category mappings
export const recipeCategories = {
  dinners: {
    title: "Dinners",
    description: "Main courses worthy of a dinner party.",
  },
  "snacks-sides": {
    title: "Snacks & Sides",
    description: "Small bites and accompaniments.",
  },
  desserts: {
    title: "Desserts",
    description: "Sweet endings to elevated meals.",
  },
} as const;
