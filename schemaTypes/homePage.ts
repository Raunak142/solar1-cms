import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge Text', type: 'string', description: 'e.g., "#1 Solar Partner in Uttarakhand"' },
        { name: 'heading', title: 'Main Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text', rows: 2 },
        { name: 'ctaText', title: 'CTA Button Text', type: 'string', initialValue: 'Explore Solutions' },
        { name: 'ctaLink', title: 'CTA Link', type: 'string', initialValue: '/#services' },
        { name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } },
        { name: 'annualSavings', title: 'Annual Savings Display', type: 'string', description: 'e.g., "₹60,000+"' },
        { name: 'totalClients', title: 'Total Clients', type: 'string', description: 'e.g., "500+"' },
      ],
    }),

    // Partners Section
    defineField({
      name: 'partnersSection',
      title: 'Partners Section',
      type: 'object',
      fields: [
        {
          name: 'partners',
          title: 'Partner Companies',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', title: 'Partner Name', type: 'string' },
                { name: 'logo', title: 'Logo', type: 'image' },
              ],
            },
          ],
        },
      ],
    }),

    // About Section
    defineField({
      name: 'aboutSection',
      title: 'About Section (Homepage)',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Section Heading', type: 'string' },
        { name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] },
        { name: 'image', title: 'Section Image', type: 'image', options: { hotspot: true } },
      ],
    }),

    // Services Section
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Why Solar?' },
        { name: 'heading', title: 'Section Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text', rows: 3 },
        { name: 'benefitsHeading', title: 'Benefits Section Heading', type: 'string' },
        { name: 'servicesHeading', title: 'Services Section Heading', type: 'string' },
        { name: 'ctaHeading', title: 'CTA Heading', type: 'string' },
        { name: 'ctaText', title: 'CTA Description', type: 'text' },
        { name: 'ctaButtonText', title: 'CTA Button Text', type: 'string' },
      ],
    }),

    // Features Section
    defineField({
      name: 'featuresSection',
      title: 'Features Section',
      type: 'object',
      fields: [
        { name: 'enabled', title: 'Show Features Section', type: 'boolean', initialValue: true },
        { name: 'heading', title: 'Section Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text' },
      ],
    }),

    // Benefits Section
    defineField({
      name: 'benefitsSection',
      title: 'Benefits Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Benefits' },
        { name: 'heading', title: 'Section Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text' },
      ],
    }),

    // Projects Section
    defineField({
      name: 'projectsSection',
      title: 'Projects Section (Homepage)',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Section Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text' },
        { name: 'showCount', title: 'Number of Projects to Show', type: 'number', initialValue: 6 },
      ],
    }),

    // Testimonials Section
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Testimonials' },
        { name: 'heading', title: 'Section Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text' },
      ],
    }),

    // FAQ Section
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'FAQ' },
        { name: 'heading', title: 'Section Heading', type: 'string' },
        { name: 'showInitially', title: 'Questions Shown Initially', type: 'number', initialValue: 6 },
        { name: 'bottomText', title: 'Bottom Helper Text', type: 'text' },
        { name: 'ctaButtonText', title: 'CTA Button Text', type: 'string', initialValue: 'Explore More' },
      ],
    }),

    // Blog Section
    defineField({
      name: 'blogSection',
      title: 'Blog Section (Homepage)',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Learn About Solar' },
        { name: 'heading', title: 'Section Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text' },
        { name: 'showCount', title: 'Number of Posts to Show', type: 'number', initialValue: 3 },
      ],
    }),

    // CTA Section
    defineField({
      name: 'ctaSection',
      title: 'Final CTA Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'CTA Heading', type: 'string' },
        { name: 'description', title: 'CTA Description', type: 'text' },
        { name: 'formEnabled', title: 'Show Contact Form', type: 'boolean', initialValue: true, description: 'When enabled, shows a contact form. When disabled, shows a button.' },
        { name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Get Started Today', description: 'Used when form is disabled' },
        { name: 'buttonLink', title: 'Button Link', type: 'string', initialValue: '/contact', description: 'Used when form is disabled' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page Content',
      }
    },
  },
})
