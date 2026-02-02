import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogsPage',
  title: 'Blogs Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Learn About Solar' },
        { name: 'heading', title: 'Page Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text' },
      ],
    }),

    // Blog Grid Section
    defineField({
      name: 'gridSection',
      title: 'Blog Grid Section',
      type: 'object',
      fields: [
        { name: 'postsPerPage', title: 'Posts Per Page', type: 'number', initialValue: 9 },
        { name: 'loadMoreText', title: '"Load More" Button Text', type: 'string', initialValue: 'Load More Articles' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Blogs Page Content',
      }
    },
  },
})
