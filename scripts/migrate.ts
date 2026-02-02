import {createClient} from '@sanity/client'
import dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('❌ Error: SANITY_WRITE_TOKEN not found in environment variables.')
  console.error('   Please ensure you have a .env.local file with SANITY_WRITE_TOKEN set.')
  process.exit(1)
}

const client = createClient({
  projectId: '2j8u7yxd',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN, // Will need to set this in .env.local
})

// Blog Posts Data
const blogPosts = [
  {
    slug: 'education',
    title: "Solar Energy 101: A Beginner's Guide",
    category: 'Education',
    description: 'Everything you need to know about how solar panels work and why they are the future of energy in India.',
    date: '2026-01-15',
    author: 'SolarX Team',
    color: 'bg-blue-500',
  },
  {
    slug: 'cost-savings',
    title: 'Understanding ROI & Solar Savings',
    category: 'Finance',
    description: 'Detailed breakdown of solar costs, monthly savings, and how to calculate your Return on Investment.',
    date: '2026-01-12',
    author: 'Finance Expert',
    color: 'bg-green-500',
  },
  {
    slug: 'subsidy',
    title: 'Government Subsidies & Policies',
    category: 'Government',
    description: 'Navigate the latest MNRE guidelines and learn how to claim government subsidies for your rooftop plant.',
    date: '2026-01-10',
    author: 'Policy Desk',
    color: 'bg-amber-500',
  },
  {
    slug: 'lifestyle',
    title: 'Living the Solar Lifestyle',
    category: 'Lifestyle',
    description: 'How switching to solar improves your quality of life, increases property value, and reduces carbon footprint.',
    date: '2026-01-08',
    author: 'Green Living',
    color: 'bg-purple-500',
  },
  {
    slug: 'maintenance',
    title: 'Maintenance Tips for Peak Performance',
    category: 'Technical',
    description: 'Simple maintenance routines to ensure your solar panels generate maximum power for 25+ years.',
    date: '2026-01-05',
    author: 'Tech Support',
    color: 'bg-orange-500',
  },
  {
    slug: 'case-studies',
    title: 'Real Stories from Happy Customers',
    category: 'Case Studies',
    description: 'Explore real-world installations across Uttarakhand and hear directly from homes powered by SolarX.',
    date: '2026-01-01',
    author: 'Community Team',
    color: 'bg-teal-500',
  },
  {
    slug: 'commercial-solar',
    title: 'Commercial Solar: A Game Changer',
    category: 'Business',
    description: 'See how local factories in Uttarakhand are saving lakhs each month by switching to commercial solar plants.',
    date: '2025-12-28',
    author: 'Business Team',
    color: 'bg-blue-600',
  },
  {
    slug: 'tips-tricks',
    title: '10 Tips to Maximize Solar Efficiency',
    category: 'Tips',
    description: 'Simple hacks to get the most out of your solar panels, from cleaning schedules to energy consumption habits.',
    date: '2025-12-25',
    author: 'Solar Expert',
    color: 'bg-amber-600',
  },
  {
    slug: 'future-tech',
    title: 'The Future of Solar Storage',
    category: 'Technology',
    description: 'Exploring the latest advancements in battery technology and how they will revolutionize home energy storage.',
    date: '2025-12-20',
    author: 'Tech Team',
    color: 'bg-purple-600',
  },
]

// Testimonials Data
const testimonials = [
  {
    name: 'Ramesh Sharma',
    location: 'Rajpur Road, Dehradun',
    systemSize: '5 kW',
    rating: 5,
    quote: 'SolarX made the entire process simple and affordable. My electricity bill is almost zero now.',
  },
  {
    name: 'Priya Gupta',
    location: 'Vasant Vihar, Dehradun',
    systemSize: '3 kW',
    rating: 5,
    quote: 'The team explained everything clearly. Very professional installation.',
  },
  {
    name: 'Anil Thakur',
    location: 'Selaqui, Dehradun',
    systemSize: '10 kW',
    rating: 5,
    quote: "My factory's power bill dropped by ₹40,000 per month. Best investment ever.",
  },
  {
    name: 'Sunita Rawat',
    location: 'Mussoorie',
    systemSize: '4 kW',
    rating: 5,
    quote: 'Living off-grid in the hills was a dream. SolarX made it happen.',
  },
  {
    name: 'Vikram Singh',
    location: 'Clement Town, Dehradun',
    systemSize: '6 kW',
    rating: 5,
    quote: 'No more power cuts during summers. My family is very happy with SolarX.',
  },
]

// FAQs Data
const faqs = [
  {
    question: 'Is solar really worth it for Indian homes?',
    answer: 'Yes. With rising electricity prices, solar helps you save up to 70–90% on your monthly bills. It\'s a one-time investment that gives you free power for 25+ years.',
  },
  {
    question: 'Will solar panels work during cloudy or rainy days?',
    answer: 'Yes. Panels still generate electricity during cloudy days, though at a slightly reduced capacity. Uttarakhand\'s climate is suitable for solar production.',
  },
  {
    question: 'What happens at night?',
    answer: 'At night, your home uses grid power. If you choose a battery system, you can use stored solar power even at night.',
  },
  {
    question: 'Can I run AC, fridge, TV, and washing machine on solar?',
    answer: 'Yes. We design systems based on your appliance usage so that all essential devices run smoothly.',
  },
  {
    question: 'How much rooftop space do I need?',
    answer: 'Approximate requirement: 1kW = 80–100 sq. ft., 3kW = 250–300 sq. ft., 5kW = 400–500 sq. ft.',
  },
  {
    question: 'What is the lifespan of solar panels?',
    answer: 'High-quality solar panels last 25+ years. Inverters usually last 8–12 years.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Typically 2–4 days, depending on system size and roof condition.',
  },
  {
    question: 'Is maintenance expensive?',
    answer: 'No. Solar systems require very little maintenance—mainly panel cleaning once or twice a month.',
  },
  {
    question: 'What if my roof is small or shaded?',
    answer: 'We do a site inspection first. If solar is not suitable, we\'ll honestly tell you. No false promises.',
  },
  {
    question: 'Can I get government subsidy?',
    answer: 'Yes, for eligible residential systems. SolarX helps you with the full subsidy documentation process.',
  },
  {
    question: 'How much does a solar system cost in India?',
    answer: 'Cost depends on system size and type. We offer customized plans that suit middle-class budgets with EMI options.',
  },
  {
    question: 'Will my electricity bill become zero?',
    answer: 'In many cases, yes—or very close to zero. Small fixed charges from the electricity board may still apply.',
  },
  {
    question: 'What happens if there is a power cut?',
    answer: 'On-grid systems stop during power cuts for safety. If you want power during outages, we recommend a battery backup system.',
  },
  {
    question: 'Is solar safe for my home?',
    answer: 'Absolutely. Our systems include safety breakers, earthing, and surge protection.',
  },
  {
    question: 'Will solar damage my roof?',
    answer: 'No. We use strong, non-invasive mounting structures that do not damage your roof.',
  },
  {
    question: 'What if I move to another house?',
    answer: 'You can uninstall and reinstall the system at your new location.',
  },
  {
    question: 'Does solar work in winter?',
    answer: 'Yes. In fact, panels often perform better in cooler temperatures.',
  },
  {
    question: 'What if something goes wrong?',
    answer: 'SolarX provides long-term support, warranty handling, and quick service.',
  },
  {
    question: 'Can I monitor my solar power production?',
    answer: 'Yes. You can track everything on your mobile—daily output, savings, and system health.',
  },
  {
    question: 'Why should I choose SolarX?',
    answer: 'Because we offer: Honest pricing, Customized systems, Local support, 10+ years experience, After-sales service, Middle-class focused solutions.',
  },
]

// Benefits Data (from Services section)
const benefits = [
  {title: 'Lower Electricity Bills', description: 'Save up to 70–90% on monthly bills for the next 25+ years', iconName: 'Wallet', color: 'bg-green-500'},
  {title: 'Reliable Power Every Day', description: 'No interruptions for work, study, or appliances', iconName: 'Zap', color: 'bg-amber-500'},
  {title: 'Affordable & EMI Options', description: 'Designed for middle-class budgets with subsidy support', iconName: 'IndianRupee', color: 'bg-blue-500'},
  {title: 'Zero Maintenance Stress', description: 'Installation, monitoring, and support handled by SolarX', iconName: 'Wrench', color: 'bg-purple-500'},
  {title: 'Higher Home Value', description: 'A modern, future-ready solar-powered home', iconName: 'Home', color: 'bg-teal-500'},
  {title: 'Better Future for Your Family', description: 'Save money while protecting the environment', iconName: 'Leaf', color: 'bg-emerald-500'},
]

// Services Data
const services = [
  {title: 'Residential Solar Systems', iconName: 'Sun'},
  {title: 'Rooftop Solar Installation', iconName: 'Grid3X3'},
  {title: 'On-Grid & Off-Grid Systems', iconName: 'Zap'},
  {title: 'Solar with Battery Backup', iconName: 'Battery'},
  {title: 'Maintenance & AMC', iconName: 'Settings'},
  {title: 'Government Subsidy Support', iconName: 'FileCheck'},
]

async function migrateContent() {
  console.log('🚀 Starting content migration to Sanity...\n')

  try {
    // 1. Migrate Blog Posts
    console.log('📝 Migrating blog posts...')
    for (const post of blogPosts) {
      const doc = await client.create({
        _type: 'post',
        title: post.title,
        slug: {_type: 'slug', current: post.slug},
        category: post.category,
        description: post.description,
        author: post.author,
        publishedAt: post.date,
        color: post.color,
        content: [{
          _type: 'block',
          children: [{_type: 'span', text: post.description, marks: []}],
          markDefs: [],
          style: 'normal',
        }],
      })
      console.log(`  ✓ Created: ${doc.title}`)
    }

    // 2. Migrate Testimonials
    console.log('\n💬 Migrating testimonials...')
    for (const testimonial of testimonials) {
      const doc = await client.create({
        _type: 'testimonial',
        name: testimonial.name,
        company: testimonial.location,
        systemSize: testimonial.systemSize,
        rating: testimonial.rating,
        text: testimonial.quote,
        date: new Date().toISOString(),
      })
      console.log(`  ✓ Created: ${doc.name}`)
    }

    // 3. Migrate FAQs
    console.log('\n❓ Migrating FAQs...')
    for (let i = 0; i < faqs.length; i++) {
      const faq = faqs[i]
      const doc = await client.create({
        _type: 'faq',
        question: faq.question,
        answer: faq.answer,
        category: 'General',
        orderRank: i,
      })
      console.log(`  ✓ Created FAQ #${i + 1}`)
    }

    // 4. Migrate Benefits
    console.log('\n✨ Migrating benefits...')
    for (let i = 0; i < benefits.length; i++) {
      const benefit = benefits[i]
      const doc = await client.create({
        _type: 'benefit',
        title: benefit.title,
        description: benefit.description,
        icon: benefit.iconName,
        color: benefit.color,
        category: 'service',
        orderRank: i,
      })
      console.log(`  ✓ Created: ${doc.title}`)
    }

    // 5. Migrate Services
    console.log('\n🔧 Migrating services...')
    for (let i = 0; i < services.length; i++) {
      const service = services[i]
      const doc = await client.create({
        _type: 'service',
        title: service.title,
        icon: service.iconName,
        orderRank: i,
      })
      console.log(`  ✓ Created: ${doc.title}`)
    }

    console.log('\n✅ Migration completed successfully!')
    console.log(`\nSummary:`)
    console.log(`  • Blog Posts: ${blogPosts.length}`)
    console.log(`  • Testimonials: ${testimonials.length}`)
    console.log(`  • FAQs: ${faqs.length}`)
    console.log(`  • Benefits: ${benefits.length}`)
    console.log(`  • Services: ${services.length}`)
    console.log(`\nNote: Projects need to be migrated separately due to their size.`)
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run migration
migrateContent()
