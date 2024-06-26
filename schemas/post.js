import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'english',
      title: 'Body English',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Line break', value: 'lineBreak' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true }, // Optional, enables image hotspot selection
        },
      ],
    }),
    defineField({
      name: 'amharic',
      title: 'Body Amharic',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Line break', value: 'lineBreak' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true }, // Optional, enables image hotspot selection
        },
      ],
    }),
    defineField({
      name: 'oromigna',
      title: 'Body Oromigna',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Line break', value: 'lineBreak' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true }, // Optional, enables image hotspot selection
        },
      ],
    }),
    defineField
    ({
      name: 'likes',
      title: 'Likes',
      type: 'number',
      initialValue: 0,
      // readOnly: true, // Prevent editing from frontend
    }),
    defineField
    (  {
      name: 'dislikes',
      title: 'Dislikes',
      type: 'number',
      initialValue: 0,
      // readOnly: true, // Prevent editing from frontend
    })

  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
