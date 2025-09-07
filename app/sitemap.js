export default function sitemap() {
    const siteMapBaseUrl = "https://bimehyadak.com";

    return [
        { url: `${siteMapBaseUrl}/`, lastModified: new Date() },
        { url: `${siteMapBaseUrl}/relief-signup`, lastModified: new Date() },
        { url: `${siteMapBaseUrl}/request-relief`, lastModified: new Date() },
        { url: `${siteMapBaseUrl}/marketing`, lastModified: new Date() },
        { url: `${siteMapBaseUrl}/road-assistance-signup`, lastModified: new Date() },
        { url: `${siteMapBaseUrl}/assistance-invoice`, lastModified: new Date() },
        { url: `${siteMapBaseUrl}/price-calculate`, lastModified: new Date() },
        { url: `${siteMapBaseUrl}/about-us`, lastModified: new Date() },
        { url: `${siteMapBaseUrl}/contact-us`, lastModified: new Date() },
    ];
}