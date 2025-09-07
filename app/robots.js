export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: "/admin",
                disallow: "/admin- dashboard",
            },
        ],
        sitemap: "https://bimehyadak.com/sitemap.xml",
    };
}