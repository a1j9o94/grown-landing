import type { RecipeFrontmatter, LearnFrontmatter } from "./content";

// Generate Recipe JSON-LD schema
export function generateRecipeSchema(
  recipe: RecipeFrontmatter,
  url: string
): object {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description,
    image: recipe.image ? `https://growncooking.com${recipe.image}` : undefined,
    author: {
      "@type": "Organization",
      name: "Grown",
      url: "https://growncooking.com",
    },
    datePublished: recipe.date,
    prepTime: recipe.prepTime,
    cookTime: recipe.cookTime,
    totalTime: recipe.totalTime,
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: getCategoryName(recipe.category),
    recipeCuisine: "American",
    keywords: recipe.keywords?.join(", "),
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.instructions.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
    nutrition: {
      "@type": "NutritionInformation",
      // Note: THC content would go here if we had it per serving
    },
    url,
  };
}

// Generate FAQ JSON-LD schema
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate Breadcrumb JSON-LD schema
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate Article JSON-LD schema for Learn pages
export function generateArticleSchema(
  article: LearnFrontmatter,
  url: string
): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Organization",
      name: "Grown",
      url: "https://growncooking.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Grown",
      url: "https://growncooking.com",
      logo: {
        "@type": "ImageObject",
        url: "https://growncooking.com/logo.png",
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: url,
    keywords: article.keywords?.join(", "),
  };
}

// Generate Organization JSON-LD schema
export function generateOrganizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Grown",
    url: "https://growncooking.com",
    logo: "https://growncooking.com/logo.png",
    description:
      "THC-infused pantry staples for adults who take their cooking seriously.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "CO",
      addressCountry: "US",
    },
    sameAs: [],
  };
}

// Generate WebSite JSON-LD schema
export function generateWebsiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Grown",
    url: "https://growncooking.com",
    description:
      "THC-infused pantry staples for adults who take their cooking seriously.",
    publisher: {
      "@type": "Organization",
      name: "Grown",
    },
  };
}

// Helper to convert category slug to display name
function getCategoryName(slug: string): string {
  const categories: Record<string, string> = {
    dinners: "Main Course",
    "snacks-sides": "Side Dish",
    desserts: "Dessert",
  };
  return categories[slug] || slug;
}

// Component to render JSON-LD script tag
export function JsonLd({ data }: { data: object | object[] }) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
