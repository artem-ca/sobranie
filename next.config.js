const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})

module.exports = withMDX({})
