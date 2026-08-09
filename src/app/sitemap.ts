import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { publications } from "@/data/research";
import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = profile.website;

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const researchRoutes = publications.map((p) => ({
    url: `${baseUrl}/research/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/research`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectRoutes,
    ...researchRoutes,
  ];
}
