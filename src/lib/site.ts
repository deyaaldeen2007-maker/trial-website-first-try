import type { Metadata } from "next";

export type SiteLink = {
  href: string;
  label: string;
  placeholder?: boolean;
  external?: boolean;
};

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_BRANCH_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");

  if (!configuredUrl) {
    return "http://localhost:3000";
  }

  return configuredUrl.startsWith("http") ? configuredUrl : `https://${configuredUrl}`;
}

export const site = {
  name: "Deya Aldeen Anas Turki Al Drabee",
  title: "Deya Al Drabee",
  subtitle: "Medical Student · Researcher",
  description:
    "Personal academic website for Deya Aldeen Anas Turki Al Drabee, a medical student and researcher at the Medical University of Warsaw working across clinical prediction, imaging biomarkers, and computational medicine.",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/research", label: "Research" },
    { href: "/writing", label: "Writing" },
    { href: "/talks", label: "Talks" },
    { href: "/contact", label: "Contact" },
  ] satisfies SiteLink[],
  profileLinks: [
    { href: "/contact", label: "Contact" },
    { href: "https://orcid.org/0009-0003-6716-3293", label: "ORCID", external: true },
  ] satisfies SiteLink[],
  socialImage: {
    src: "/images/deya-presenting.jpg",
    width: 1200,
    height: 1600,
    alt: "Deya Al Drabee presenting research findings at a medical conference in Warsaw.",
  },
  legalLinks: [] as SiteLink[],
} as const;

type BuildPageMetadataArgs = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
}: BuildPageMetadataArgs): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type,
      siteName: site.name,
      images: [
        {
          url: site.socialImage.src,
          width: site.socialImage.width,
          height: site.socialImage.height,
          alt: site.socialImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.socialImage.src],
    },
  };
}
