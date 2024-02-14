'use strict'

function generateGlobalTypesFile (npmPackageName) {
  return `import { FastifyInstance } from 'fastify'
import { TestStackableIvanConfig, PlatformaticApp } from '${npmPackageName}'
  
declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<TestStackableIvanConfig>
  }
}
`
}

module.exports = {
  generateGlobalTypesFile
}
