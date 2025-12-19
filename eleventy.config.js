module.exports = function (eleventyConfig) {
    // Pass-through copy for assets
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("admin");

    // Filter to format dates (useful for blog posts)
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return new Date(dateObj).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    });

    return {
        pathPrefix: "/abdellah-portfolio/",
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
};
