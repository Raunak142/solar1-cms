import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'Main heading on the homepage hero section',
    }),
    defineField({
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'text',
      rows: 2,
      description: 'Hero description text',
    }),
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge Text',
      type: 'string',
      description: 'Badge text (e.g., "#1 Solar Partner in Uttarakhand")',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
    // Stats
    defineField({
      name: 'totalClients',
      title: 'Total Clients',
      type: 'string',
      description: 'e.g., "500+"',
    }),
    defineField({
      name: 'yearsExperience',
      title: 'Years of Experience',
      type: 'string',
      description: 'e.g., "10+"',
    }),
    defineField({
      name: 'totalInstallations',
      title: 'Total Installations',
      type: 'string',
      description: 'e.g., "2 MW+"',
    }),
    
    // About Section
    defineField({
      name: 'aboutHeading',
      title: 'About Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'aboutDescription',
      title: 'About Section Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'founderName',
      title: 'Founder Name',
      type: 'string',
    }),
    defineField({
      name: 'founderBio',
      title: 'Founder Bio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'founderImage',
      title: 'Founder Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
    // Mission & Vision
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
      rows: 4,
    }),
    
    // Contact Information
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
    }),
    
    // Social Links
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    
    // Partners
    defineField({
      name: 'partners',
      title: 'Partner Companies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Partner Name', type: 'string' },
            { name: 'logo', title: 'Partner Logo', type: 'image' },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
