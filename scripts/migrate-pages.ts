
import {createClient} from '@sanity/client'
import dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('❌ Error: SANITY_WRITE_TOKEN not found in environment variables.')
  process.exit(1)
}

const client = createClient({
  projectId: '2j8u7yxd',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
})

const homePageData = {
  _id: 'homePage',
  _type: 'homePage',
  heroSection: {
    badge: '#1 Solar Partner in Uttarakhand',
    heading: 'Powering Uttarakhand with Sustainable Solar Energy',
    subheading: 'Switch to solar today and save up to 90% on your electricity bills. Trusted by 500+ homes and businesses across Dehradun, Haridwar, and Rishikesh.',
    ctaText: 'Get a Free Quote',
    ctaLink: '/contact',
    annualSavings: '₹60,000+',
    totalClients: '500+',
  },
  partnersSection: {
    partners: [] // Skipping images for now as they require upload
  },
  aboutSection: {
    heading: 'Why Choose SolarX?',
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'We are Uttarakhand\'s leading solar installation company, dedicated to providing high-quality, affordable solar solutions for homes and businesses. With over 10 years of experience, we ensure seamless installation and lifetime support.', marks: [] }]
      }
    ]
  },
  servicesSection: {
    badge: 'Our Services',
    heading: 'Comprehensive Solar Solutions',
    subheading: 'From residential rooftops to large-scale industrial plants, we have the expertise to handle projects of any size.',
    problemStatement: 'Rising electricity costs and power cuts are major challenges in Uttarakhand. SolarX provides a reliable, cost-effective solution.',
    benefitsHeading: 'Benefits of Going Solar',
    servicesHeading: 'Our Core Services',
    ctaHeading: 'Ready to Switch?',
    ctaText: 'Join the solar revolution today.',
    ctaButtonText: 'Explore Services'
  },
  featuresSection: {
    enabled: true,
    heading: 'Advanced Technology',
    subheading: 'We use only Tier-1 solar panels and top-rated inverters.'
  },
  benefitsSection: {
    badge: 'Benefits',
    heading: 'Why Go Solar today?',
    subheading: 'Invest in a cleaner, greener future.'
  },
  projectsSection: {
    heading: 'Our Recent Projects',
    subheading: 'See how we have helped your neighbors save money.',
    showCount: 6
  },
  testimonialsSection: {
    badge: 'Testimonials',
    heading: 'What Our Clients Say',
    subheading: '100% Customer Satisfaction'
  },
  faqSection: {
    badge: 'FAQ',
    heading: 'Frequently Asked Questions',
    showInitially: 6,
    bottomText: 'Have more questions? Contact our support team.',
    ctaButtonText: 'View All FAQs'
  },
  blogSection: {
    badge: 'Solar Knowledge',
    heading: 'Latest Updates',
    subheading: 'Stay informed about subsidies, technology, and savings.',
    showCount: 3
  },
  ctaSection: {
    heading: 'Start Your Solar Journey',
    description: 'Get a customized solar proposal for your home or business today.',
    buttonText: 'Get a Free Quote',
    buttonLink: '/contact'
  }
}

const aboutPageData = {
  _id: 'aboutPage',
  _type: 'aboutPage',
  heroSection: {
    heading: 'About SolarX',
    subheading: 'Empowering Uttarakhand with clean, renewable energy since 2016.'
  },
  introSection: {
    badge: 'Who We Are',
    heading: 'We Are SolarX',
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'SolarX is a team of passionate engineers and energy experts committed to making solar energy accessible to everyone in Uttarakhand. We believe in transparency, quality, and customer satisfaction.', marks: [] }]
      }
    ]
  },
  founderSection: {
    label: 'Our Founder',
    heading: 'Meet Raunak',
    founderName: 'Raunak',
    yearsExperience: '12+',
    bio: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Raunak started SolarX with a vision to transform how Uttarakhand consumes energy. With a background in electrical engineering and renewable energy systems, he has led the company to become a regional leader.', marks: [] }]
      }
    ]
  },
  differentiatorsSection: {
    heading: 'Why We Are Different',
    subheading: 'We don\'t just sell solar; we build long-term energy partnerships.',
    differentiators: [
      { title: 'Local Expertise', description: 'Deep understanding of Uttarakhand\'s terrain and climate.', icon: 'MapPin' },
      { title: 'Quality Assurance', description: 'We only use MNRE-approved components.', icon: 'CheckCircle' },
      { title: 'Lifetime Support', description: 'We are just a phone call away for any service needs.', icon: 'Phone' }
    ]
  },
  missionVisionSection: {
    missionHeading: 'Our Mission',
    mission: 'To install 100MW of solar capacity in Uttarakhand by 2030 and help 10,000 families become energy independent.',
    visionHeading: 'Our Vision',
    vision: 'To be the most trusted renewable energy partner in the Himalayas, driving the transition to a sustainable future.'
  },
  trustSection: {
    yearsExperience: '10+',
    happyClients: '500+',
    installations: '3MW+',
    support: '24/7'
  }
}

const projectsPageData = {
  _id: 'projectsPage',
  _type: 'projectsPage',
  heroSection: {
    heading: 'Our Projects',
    subheading: 'Explore our portfolio of residential, commercial, and industrial installations across Uttarakhand.'
  },
  filterSection: {
    allProjectsLabel: 'All',
    residentialLabel: 'Residential',
    commercialLabel: 'Commercial',
    industrialLabel: 'Industrial',
    offgridLabel: 'Off-Grid'
  },
  gridSection: {
    emptyStateMessage: 'No projects found in this category.'
  }
}

const blogsPageData = {
  _id: 'blogsPage',
  _type: 'blogsPage',
  heroSection: {
    badge: 'Blog',
    heading: 'Solar Insights',
    subheading: 'Expert advice, industry news, and guides to help you make informed decisions.'
  },
  gridSection: {
    postsPerPage: 9,
    loadMoreText: 'Load More Articles'
  }
}

const contactPageData = {
  _id: 'contactPage',
  _type: 'contactPage',
  heroSection: {
    heading: 'Contact Us',
    subheading: 'Get in touch with our team for a free consultation and site visit.'
  },
  contactInfoSection: {
    phone: '+91 98765 43210',
    email: 'hello@solarx.in',
    address: '123, Rajpur Road, Dehradun, Uttarakhand - 248001',
    whatsappNumber: '+919876543210',
    facebookUrl: 'https://facebook.com/solarx',
    instagramUrl: 'https://instagram.com/solarx',
    linkedinUrl: 'https://linkedin.com/company/solarx'
  },
  formSection: {
    heading: 'Send us a Message',
    subheading: 'Fill out the form below and we will get back to you within 24 hours.',
    nameLabel: 'Your Name',
    emailLabel: 'Email Address',
    phoneLabel: 'Phone Number',
    messageLabel: 'Your Message',
    submitButtonText: 'Send Message',
    successMessage: 'Thank you! Your message has been sent successfully.'
  },
  mapSection: {
    enabled: true,
    latitude: 30.3165,
    longitude: 78.0322,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...' // Placeholder
  },
  faqSection: {
    enabled: true,
    heading: 'Common Questions',
    showCount: 6
  }
}

const siteSettingsData = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  heroHeading: 'Powering Uttarakhand with Solar',
  heroSubheading: 'Your trusted partner for rooftop solar solutions.',
  heroBadge: '#1 Solar Installer',
  totalClients: '500+',
  yearsExperience: '10+',
  totalInstallations: '3 MW+',
  aboutHeading: 'About SolarX',
  aboutDescription: [
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'We are committed to a green energy future.', marks: [] }]
    }
  ],
  founderName: 'Raunak',
  founderBio: [
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Leading the solar revolution in the hills.', marks: [] }]
    }
  ],
  mission: 'To provide clean energy for all.',
  vision: 'A solar panel on every roof.',
  phone: '+91 98765 43210',
  email: 'info@solarx.in',
  address: 'Dehradun, Uttarakhand',
  whatsappNumber: '+919876543210',
  facebookUrl: 'https://facebook.com',
  instagramUrl: 'https://instagram.com',
  linkedinUrl: 'https://linkedin.com'
}

async function migratePages() {
  console.log('📄 Starting pages migration...')

  const pages = [
    homePageData,
    aboutPageData,
    projectsPageData,
    blogsPageData,
    contactPageData,
    siteSettingsData
  ]

  for (const page of pages) {
    try {
      // Use createOrReplace to ensure we don't create duplicates and can update existing one
      const doc = await client.createOrReplace(page)
      console.log(`  ✓ Created/Updated: ${page._type}`)
    } catch (error) {
      console.error(`  ❌ Failed to migrate ${page._type}:`, error)
    }
  }

  console.log('\n✅ Pages migration completed!')
}

migratePages()
