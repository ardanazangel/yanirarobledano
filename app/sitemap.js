import projects from "@/app/data/projects.json";

const siteUrl = "https://www.yanirarobledano.com";

export default function sitemap() {
  const projectUrls = projects.map((project) => ({
    url: `${siteUrl}/proyectos/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/proyectos`,
      lastModified: new Date(),
    },
    ...projectUrls,
  ];
}
