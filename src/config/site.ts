export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        github: string;
    };
};
export const siteConfig: SiteConfig = {
    name: "Abiyaz",
    description:
        "A directory of Stars.",
    url: "https://astro-nomy.vercel.app",
    ogImage: "https://astro-nomy.vercel.app/og.jpg",
    links: {
        github: "https://github.com/mickasmt/astro-nomy",
    },
};