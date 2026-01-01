import Image from "next/image";
import Link from "next/link";
import type { RecipePost } from "@/lib/content";

interface RecipeCardProps {
  recipe: RecipePost;
  showImage?: boolean;
  size?: "small" | "large";
}

export function RecipeCard({ recipe, showImage = true, size = "large" }: RecipeCardProps) {
  const { frontmatter, slug } = recipe;

  const difficultyColors = {
    easy: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    hard: "bg-red-100 text-red-800",
  };

  const categoryNames: Record<string, string> = {
    dinners: "Dinner",
    "snacks-sides": "Side",
    desserts: "Dessert",
  };

  if (size === "small") {
    return (
      <Link
        href={`/recipes/${slug}`}
        className="group flex items-center gap-4 rounded-xl border border-[#2C3628]/10 bg-white/50 p-4 transition-all hover:border-[#2C3628]/20 hover:shadow-md"
      >
        {showImage && frontmatter.image && (
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[#2C3628] group-hover:text-[#B85C38] truncate">
            {frontmatter.title}
          </h3>
          <div className="mt-1 flex items-center gap-2 text-xs text-[#2C3628]/40">
            <span>{categoryNames[frontmatter.category] || frontmatter.category}</span>
            <span>•</span>
            <span>{frontmatter.servings} servings</span>
          </div>
        </div>
        <svg
          className="h-5 w-5 flex-shrink-0 text-[#B85C38] transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    );
  }

  return (
    <Link
      href={`/recipes/${slug}`}
      className="group overflow-hidden rounded-2xl border border-[#2C3628]/10 bg-white/50 transition-all hover:border-[#2C3628]/20 hover:shadow-md"
    >
      {/* Image */}
      {showImage && frontmatter.image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8EAE4]">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${difficultyColors[frontmatter.difficulty]}`}>
            {frontmatter.difficulty}
          </span>
          <span className="text-xs text-[#2C3628]/40">•</span>
          <span className="text-xs text-[#2C3628]/60">
            {formatTime(frontmatter.totalTime)}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-[#2C3628] group-hover:text-[#B85C38]">
          {frontmatter.title}
        </h3>
        <p className="mt-2 text-sm text-[#2C3628]/60 line-clamp-2">
          {frontmatter.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-[#2C3628]/40">
            {frontmatter.servings} servings
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-[#B85C38]">
            View recipe
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

function formatTime(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return duration;
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  if (hours && minutes) return `${hours}h ${minutes}m`;
  if (hours) return `${hours}h`;
  return `${minutes}m`;
}
