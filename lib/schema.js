'use strict'

const { schema } = require('@platformatic/service')

const testStackableIvanSchema = {
  ...schema.schema,
  $id: 'test-stackable-ivan',
  title: 'Test Stackable Ivan Config',
  properties: {
    ...schema.schema.properties,
    module: { type: 'string' },
    greeting: {
      type: 'object',
      properties: {
        text: {
          type: 'string'
        }
      },
      required: ['text'],
      additionalProperties: false
    }
  }
}

module.exports.schema = testStackableIvanSchema

if (require.main === module) {
  console.log(JSON.stringify(testStackableIvanSchema, null, 2))
}
