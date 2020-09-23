module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return {
      ...defaultPathMap,
      '/helloWorld': {
        page: '/[foo]',
        query: {
          foo: 'helloWorld'
        }
      }
    }
  }
}