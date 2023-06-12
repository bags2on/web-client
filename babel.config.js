module.exports = function (api) {
  api.cache(true)

  const presets = ['next/babel']
  const plugins = [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              name: 'removeAttrs',
              params: { attrs: 'xmlns' }
            }
          ]
        }
      }
    ],
    ['styled-components', { ssr: true, displayName: process.env.NODE_ENV === 'development' }]
  ]

  return {
    presets,
    plugins
  }
}
