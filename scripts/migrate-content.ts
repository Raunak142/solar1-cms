import {createClient} from '@sanity/client'
import {blogPosts} from './data/blogPosts.js'
import {projects} from './data/projects.js'
import {testimonials} from './data/testimonials.js'
import {faqs} from './data/faqs.js'
import {benefits} from './data/benefits.js'
import {services} from './data/services.js'

const client = createClient({
  projectId: '2j8u7yxd',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN, // You'll need to set this
})

async function migrateContent() {
  console.log('🚀 Starting content migration...\n')

  try {
    // 1. Migrate Blog Posts
    console.log('📝 Migrating blog posts...')
    for (const post of blogPosts) {
      await client.create({
        _type: 'post',
        title: post.title,
        slug: {_type: 'slug', current: post.slug},
        category: post.category,
        description: post.description,
        author: post.author,
        publishedAt: post.date,
        color: post.color,
        content: convertHTMLToBlocks(post.content),
      })
      console.log(`  ✓ Created: ${post.title}`)
    }

    // 2. Migrate Projects
    console.log('\n🏗️  Migrating projects...')
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i]
      await client.create({
        _type: 'project',
        title: project.title,
        slug: {_type: 'slug', current: project.slug},
        category: project.category,
        location: project.location,
        systemSize: project.systemSize,
        type: project.type,
        monthlySavings: project.monthlySavings,
        yearlySavings: project.yearlySavings,
        installationTime: project.installationTime,
        panelType: project.panelType,
        inverter: project.inverter,
        battery: project.battery,
        content: convertHTMLToBlocks(project.content),
        orderRank: i,
      })
      console.log(`  ✓ Created: ${project.title}`)
    }

    // 3. Migrate Testimonials
    console.log('\n💬 Migrating testimonials...')
    for (const testimonial of testimonials) {
      await client.create({
        _type: 'testimonial',
        name: testimonial.name,
        company: testimonial.location,
        systemSize: testimonial.systemSize,
        rating: testimonial.rating,
        text: testimonial.quote,
        date: new Date().toISOString(),
      })
      console.log(`  ✓ Created: ${testimonial.name}`)
    }

    // 4. Migrate FAQs
    console.log('\n❓ Migrating FAQs...')
    for (let i = 0; i < faqs.length; i++) {
      const faq = faqs[i]
      await client.create({
        _type: 'faq',
        question: faq.question,
        answer: faq.answer,
        category: 'General',
        orderRank: i,
      })
      console.log(`  ✓ Created: FAQ ${i + 1}`)
    }

    // 5. Migrate Benefits
    console.log('\n✨ Migrating benefits...')
    for (let i = 0; i < benefits.length; i++) {
      const benefit = benefits[i]
      await client.create({
        _type: 'benefit',
        title: benefit.title,
        description: benefit.description,
        icon: benefit.iconName,
        color: benefit.color,
        category: 'service',
        orderRank: i,
      })
      console.log(`  ✓ Created: ${benefit.title}`)
    }

    // 6. Migrate Services
    console.log('\n🔧 Migrating services...')
    for (let i = 0; i < services.length; i++) {
      const service = services[i]
      await client.create({
        _type: 'service',
        title: service.title,
        description: service.description || '',
        icon: service.iconName,
        orderRank: i,
      })
      console.log(`  ✓ Created: ${service.title}`)
    }

    console.log('\n✅ Migration completed successfully!')
    console.log(`\nSummary:`)
    console.log(`  • Blog Posts: ${blogPosts.length}`)
    console.log(`  • Projects: ${projects.length}`)
    console.log(`  • Testimonials: ${testimonials.length}`)
    console.log(`  • FAQs: ${faqs.length}`)
    console.log(`  • Benefits: ${benefits.length}`)
    console.log(`  • Services: ${services.length}`)
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Helper function to convert HTML to Sanity blocks
function convertHTMLToBlocks(html: string) {
  // Simple converter - you can enhance this
  const cleanHTML = html.trim()
  if (!cleanHTML) return []

  return [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: cleanHTML.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim(),
          marks: [],
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ]
}

// Run migration
migrateContent()
