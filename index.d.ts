import { FastifyInstance } from 'fastify'
import { PlatformaticApp } from '@platformatic/service'
import { TestStackableIvanConfig } from './config'

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<TestStackableIvanConfig>
  }
}

export { PlatformaticApp, TestStackableIvanConfig }
