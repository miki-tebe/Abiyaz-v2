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
    url: "https://abiyaz.web.app",
    ogImage: "https://abiyaz.web.app/og.jpg",
    links: {
        github: "https://github.com/miki-tebe/Abiyaz-v2",
    },
};