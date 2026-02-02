import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'projectsPage',
  title: 'Projects Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Page Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text' },
        { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
      ],
    }),

    // Filter Section
    defineField({
      name: 'filterSection',
      title: 'Filter Section',
      type: 'object',
      fields: [
        { name: 'allProjectsLabel', title: '"All Projects" Label', type: 'string', initialValue: 'All' },
        { name: 'residentialLabel', title: '"Residential" Label', type: 'string', initialValue: 'Residential' },
        { name: 'commercialLabel', title: '"Commercial" Label', type: 'string', initialValue: 'Commercial' },
        { name: 'industrialLabel', title: '"Industrial" Label', type: 'string', initialValue: 'Industrial' },
        { name: 'offgridLabel', title: '"Off-Grid" Label', type: 'string', initialValue: 'Off-Grid' },
      ],
    }),

    // Projects Grid Section
    defineField({
      name: 'gridSection',
      title: 'Projects Grid Section',
      type: 'object',
      fields: [
        { name: 'emptyStateMessage', title: 'Empty State Message', type: 'string', initialValue: 'No projects found in this category.' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Projects Page Content',
      }
    },
  },
})
