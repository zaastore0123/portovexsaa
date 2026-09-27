import { siteConfig, faqItems } from "@/lib/site";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    description:
      "Automotive student at SMK ADIBANGSA, programmer, and developer of VexsaSips.",
    url: siteConfig.url,
    affiliation: {
      "@type": "EducationalOrganization",
      name: siteConfig.school,
    },
    knowsAbout: siteConfig.knowsAbout,
    sameAs: [siteConfig.externalProfile],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2025-01-01",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
    },
    url: siteConfig.url,
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.project.name,
    url: siteConfig.project.url,
    description: siteConfig.project.description,
    applicationCategory: "DeveloperApplication",
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const schemas = [personSchema, profilePageSchema, projectSchema, faqSchema];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
