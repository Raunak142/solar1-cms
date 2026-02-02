import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Industrial', value: 'industrial' },
          { title: 'Off-Grid', value: 'offgrid' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'systemSize',
      title: 'System Size',
      type: 'string',
      description: 'e.g., "3 kW", "10 kW"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Project Type',
      type: 'string',
      description: 'e.g., "Residential", "Retail Shop", "Manufacturing Unit"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'monthlySavings',
      title: 'Monthly Savings',
      type: 'string',
      description: 'e.g., "₹2,500/month" (optional)',
    }),
    defineField({
      name: 'yearlySavings',
      title: 'Yearly Savings',
      type: 'string',
      description: 'e.g., "₹2,00,000/year" (optional)',
    }),
    defineField({
      name: 'installationTime',
      title: 'Installation Time',
      type: 'string',
      description: 'e.g., "2 days", "5 days"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'panelType',
      title: 'Panel Type',
      type: 'string',
      description: 'e.g., "Monocrystalline", "Half-cut Bifacial"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'inverter',
      title: 'Inverter',
      type: 'string',
      description: 'e.g., "Growatt 3kW String Inverter" (optional)',
    }),
    defineField({
      name: 'battery',
      title: 'Battery',
      type: 'string',
      description: 'e.g., "Yes", "No", "Yes (Full Off-Grid)"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Project Details',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orderRank',
      title: 'Order',
      type: 'number',
      description: 'Used for sorting projects (lower numbers appear first)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})
