import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Page Heading', type: 'string', initialValue: 'About SolarX' },
        { name: 'subheading', title: 'Subheading', type: 'text' },
        { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
      ],
    }),

    // Who We Are Section
    defineField({
      name: 'introSection',
      title: 'Who We Are Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Who We Are' },
        { name: 'heading', title: 'Section Heading', type: 'string' },
        { name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] },
      ],
    }),

    // Founder Section
    defineField({
      name: 'founderSection',
      title: 'Founder Section',
      type: 'object',
      fields: [
        { name: 'label', title: 'Section Label', type: 'string', initialValue: 'Our Founder' },
        { name: 'heading', title: 'Heading', type: 'string', initialValue: 'Meet Raunak' },
        { name: 'founderName', title: 'Founder Name', type: 'string' },
        { name: 'bio', title: 'Founder Bio', type: 'array', of: [{ type: 'block' }] },
        { name: 'image', title: 'Founder Image', type: 'image', options: { hotspot: true } },
        { name: 'yearsExperience', title: 'Years of Experience', type: 'string', description: 'e.g., "10+"' },
      ],
    }),

    // Why SolarX Is Different Section
    defineField({
      name: 'differentiatorsSection',
      title: 'Why SolarX Is Different',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Section Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text' },
        {
          name: 'differentiators',
          title: 'Differentiators',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name' },
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'description', title: 'Description', type: 'text' },
              ],
            },
          ],
        },
      ],
    }),

    // Mission & Vision Section
    defineField({
      name: 'missionVisionSection',
      title: 'Mission & Vision',
      type: 'object',
      fields: [
        { name: 'missionHeading', title: 'Mission Heading', type: 'string', initialValue: 'Our Mission' },
        { name: 'mission', title: 'Mission Statement', type: 'text', rows: 4 },
        { name: 'visionHeading', title: 'Vision Heading', type: 'string', initialValue: 'Our Vision' },
        { name: 'vision', title: 'Vision Statement', type: 'text', rows: 4 },
      ],
    }),

    // Trust Indicators Section
    defineField({
      name: 'trustSection',
      title: 'Trust Indicators',
      type: 'object',
      fields: [
        { name: 'yearsExperience', title: 'Years Experience', type: 'string' },
        { name: 'happyClients', title: 'Happy Clients', type: 'string' },
        { name: 'installations', title: 'Total Installations', type: 'string' },
        { name: 'support', title: 'Support Availability', type: 'string', initialValue: '24/7' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page Content',
      }
    },
  },
})
