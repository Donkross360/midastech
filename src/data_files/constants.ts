import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "MidasTech",
  tagline: "Energy-as-a-Service (EaaS) provider",
  description: "Our company is a pioneering solar and wind Energy-as-a-Service (EaaS) provider dedicated to transforming Africa's energy landscape by delivering innovative and sustainable energy solutions..",
  description_short: "MidasTech provides highly available, cost-effective, and sustainable energy solutions.",
  url: "https://midastechno.com",
  author: "Mart Young",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Solar and Wind Energy-as-a-Service (EaaS) provider`,
  description: "We offer comprehensive warranties on our installations and provide quick and reliable repair services to ensure minimal disruption to your energy supply. Start exploring now!",
  image: ogImageSrc,
};
