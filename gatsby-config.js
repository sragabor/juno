require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Juno`,
        siteUrl: `https://juno.co`
    },
    plugins: ["gatsby-plugin-sass", {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
            "trackingId": "GA-555555"
        }
    }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
        resolve: 'gatsby-plugin-manifest',
        options: {
            "icon": "src/images/icon.png"
        }
    }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        __key: "images"
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "pages",
            "path": "./src/pages/"
        },
        __key: "pages"
    },
        {
            resolve: `gatsby-remark-videos`,
            options: {
                pipelines: [
                    {
                        name: 'vp9',
                        transcode: chain =>
                            chain
                                .videoCodec('libvpx-vp9')
                                .noAudio()
                                .outputOptions(['-crf 20', '-b:v 0']),
                        maxHeight: 480,
                        maxWidth: 900,
                        fileExtension: 'webm',
                    },
                    {
                        name: 'h264',
                        transcode: chain =>
                            chain
                                .videoCodec('libx264')
                                .noAudio()
                                .addOption('-profile:v', 'main')
                                .addOption('-pix_fmt', 'yuv420p')
                                .outputOptions(['-movflags faststart'])
                                .videoBitrate('1000k'),
                        maxHeight: 480,
                        maxWidth: 900,
                        fileExtension: 'mp4',
                    },
                ],
            }
        },`gatsby-transformer-ffmpeg`
    ]
};
