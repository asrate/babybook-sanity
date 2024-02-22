import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'faq',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      readOnly: true, 
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      initialValue:"hello world"
    }),
  ],

  
})
