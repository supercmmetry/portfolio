const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withSvgr = require('next-svgr')

module.exports = withPlugins([
  withImages,
  withFonts,
  withSvgr
])
