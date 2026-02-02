import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
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

    // Contact Info Section
    defineField({
      name: 'contactInfoSection',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'phone', title: 'Phone Number', type: 'string' },
        { name: 'email', title: 'Email Address', type: 'string' },
        { name: 'address', title: 'Physical Address', type: 'text', rows: 3 },
        { name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string' },
        { name: 'facebookUrl', title: 'Facebook URL', type: 'url' },
        { name: 'instagramUrl', title: 'Instagram URL', type: 'url' },
        { name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' },
      ],
    }),

    // Contact Form Section
    defineField({
      name: 'formSection',
      title: 'Contact Form',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Form Heading', type: 'string' },
        { name: 'subheading', title: 'Form Subheading', type: 'text' },
        { name: 'nameLabel', title: 'Name Field Label', type: 'string', initialValue: 'Your Name' },
        { name: 'emailLabel', title: 'Email Field Label', type: 'string', initialValue: 'Email Address' },
        { name: 'phoneLabel', title: 'Phone Field Label', type: 'string', initialValue: 'Phone Number' },
        { name: 'messageLabel', title: 'Message Field Label', type: 'string', initialValue: 'Your Message' },
        { name: 'submitButtonText', title: 'Submit Button Text', type: 'string', initialValue: 'Send Message' },
        { name: 'successMessage', title: 'Success Message', type: 'text' },
      ],
    }),

    // Map Section
    defineField({
      name: 'mapSection',
      title: 'Map Section',
      type: 'object',
      fields: [
        { name: 'enabled', title: 'Show Map', type: 'boolean', initialValue: true },
        { name: 'latitude', title: 'Latitude', type: 'number' },
        { name: 'longitude', title: 'Longitude', type: 'number' },
        { name: 'mapEmbedUrl', title: 'Google Maps Embed URL', type: 'url'},
      ],
    }),

    // FAQ Section
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        { name: 'enabled', title: 'Show FAQ on Contact Page', type: 'boolean', initialValue: true },
        { name: 'heading', title: 'FAQ Heading', type: 'string' },
        { name: 'showCount', title: 'Number of FAQs to Show', type: 'number', initialValue: 6 },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Page Content',
      }
    },
  },
})
