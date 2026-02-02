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
  token: process.env.SANITY_WRITE_TOKEN,
})

// All 15 Projects Data
const projects = [
  // RESIDENTIAL
  {
    slug: 'sharma-residence',
    title: 'Sharma Residence',
    category: 'residential',
    location: 'Dehradun',
    systemSize: '3 kW',
    type: 'Residential',
    monthlySavings: '₹2,500/month',
    installationTime: '2 days',
    panelType: 'Monocrystalline',
    battery: 'No',
    content: 'Efficient Rooftop Solar for Urban Home. The Sharma family in Dehradun wanted to reduce their monthly electricity bills. They have a flat roof with excellent sunlight exposure, making it ideal for a rooftop solar system. Since installation, they generate 12-14 units per day, covering 90% of their energy needs.',
  },
  {
    slug: 'verma-villa',
    title: 'Verma Villa',
    category: 'residential',
    location: ' Rishikesh',
    systemSize: '5 kW',
    type: 'Residential',
    monthlySavings: '₹4,200/month',
    installationTime: '3 days',
    panelType: 'Monocrystalline',
    battery: 'Yes',
    content: 'Hybrid Solar Solution for Reliable Power. Located in Rishikesh, Verma Villa experiences occasional power cuts. We designed a 5kW Hybrid System with lithium-ion battery bank for backup power while exporting excess to the grid.',
  },
  {
    slug: 'gupta-home',
    title: 'Gupta Home',
    category: 'residential',
    location: 'Haridwar',
    systemSize: '2 kW',
    type: 'Residential',
    monthlySavings: '₹1,800/month',
    installationTime: '2 days',
    panelType: 'Monocrystalline',
    battery: 'No',
    content: 'Compact System for Small Families. The Gupta residence in Haridwar installed a compact 2kW system that perfectly offsets their modest energy consumption. Installation completed in just 2 days.',
},
  {
    slug: 'singh-residence',
    title: 'Singh Residence',
    category: 'residential',
    location: 'Dehradun',
    systemSize: '4 kW',
    type: 'Residential',
    monthlySavings: '₹3,500/month',
    installationTime: '3 days',
    panelType: 'Half-cut Bifacial',
    battery: 'Yes',
    content: 'Advanced Bifacial Technology. Mr. Singh opted for Bifacial panels that generate power from both sides, utilizing reflected light to boost generation by up to 15%.',
  },
  // COMMERCIAL
  {
    slug: 'agarwal-sweets',
    title: 'Agarwal Sweets',
    category: 'commercial',
    location: 'Haridwar',
    systemSize: '10 kW',
    type: 'Retail Shop',
    monthlySavings: '₹12,000/month',
    installationTime: '5 days',
    panelType: 'Monocrystalline',
    battery: 'No',
    content: 'Powering Large Commercial Operations. A 10kW solar plant powers refrigeration and lighting for Agarwal Sweets, saving over ₹1.4 Lakhs annually with ROI in just 3 years.',
  },
  {
    slug: 'techpark-office',
    title: 'TechPark Office',
    category: 'commercial',
    location: 'Dehradun',
    systemSize: '15 kW',
    type: 'Office Building',
    monthlySavings: '₹18,000/month',
    installationTime: '6 days',
    panelType: 'Monocrystalline',
    battery: 'Yes',
    content: 'Sustainable Workspace. TechPark Dehradun\'s 15kW rooftop plant powers common areas, elevators, and server rooms while improving the building\'s LEED rating.',
  },
  {
    slug: 'city-care-clinic',
    title: 'City Care Clinic',
    category: 'commercial',
    location: 'Rishikesh',
    systemSize: '8 kW',
    type: 'Clinic',
    monthlySavings: '₹9,500/month',
    installationTime: '4 days',
    panelType: 'Half-cut Mono',
    battery: 'Yes',
    content: 'Critical Power for Healthcare. This 8kW system with battery backup ensures critical medicine storage and diagnostic equipment remain operational during grid failures.',
  },
  {
    slug: 'modern-honda-showroom',
    title: 'Modern Honda Showroom',
    category: 'commercial',
    location: 'Dehradun',
    systemSize: '12 kW',
    type: 'Showroom',
    monthlySavings: '₹14,000/month',
    installationTime: '5 days',
    panelType: 'Monocrystalline',
    battery: 'No',
    content: 'Solar-Powered Showroom. The vast roof space was perfect for a 12kW solar plant powering extensive lighting and air conditioning.',
  },
  // INDUSTRIAL
  {
    slug: 'doon-packaging-unit',
    title: 'Doon Packaging Unit',
    category: 'industrial',
    location: 'Selaqui',
    systemSize: '25 kW',
    type: 'Manufacturing Unit',
    yearlySavings: '₹2,00,000/year',
    installationTime: '10 days',
    panelType: 'Monocrystalline',
    battery: 'Yes',
    content: 'Industrial Cost Reduction. This 25kW system directly offsets peak daytime consumption of packaging machinery, drastically reducing demand charges.',
  },
  {
    slug: 'logistics-warehouse',
    title: 'Logistics Warehouse',
    category: 'industrial',
    location: 'Haridwar',
    systemSize: '30 kW',
    type: 'Warehouse',
    yearlySavings: '₹2,40,000/year',
    installationTime: '12 days',
    panelType: 'Monocrystalline',
    battery: 'No',
    content: 'Turning Roofs into Assets. By installing a 30kW solar plant, this logistics hub turned unused roof space into a revenue-generating power plant.',
  },
  {
    slug: 'auto-parts-factory',
    title: 'Auto Parts Factory',
    category: 'industrial',
    location: 'Selaqui',
    systemSize: '20 kW',
    type: 'Small Factory',
    yearlySavings: '₹1,60,000/year',
    installationTime: '9 days',
    panelType: 'Half-cut Bifacial',
    battery: 'Yes',
    content: 'Precision Power. This factory uses hybrid solar to prevent voltage fluctuations from affecting sensitive CNC machines.',
  },
  // OFF-GRID
  {
    slug: 'mountain-retreat',
    title: 'Mountain Retreat',
    category: 'offgrid',
    location: 'Mussoorie',
    systemSize: '5 kW',
    type: 'Remote Home',
    monthlySavings: '₹4,500/month',
    installationTime: '4 days',
    panelType: 'Polycrystalline',
    battery: 'Yes (Full Off-Grid)',
    content: 'Energy Independence in the Hills. A 5kW Off-Grid system with large battery bank provides 24/7 power for heating, lighting, and kitchen appliances.',
  },
  {
    slug: 'hillside-school',
    title: 'Hillside School',
    category: 'offgrid',
    location: 'Tehri',
    systemSize: '10 kW',
    type: 'School',
    monthlySavings: '₹8,000/month',
    installationTime: '6 days',
    panelType: 'Monocrystalline',
    battery: 'Yes (Off-Grid)',
    content: 'Empowering Education. The 10kW system enables digital classrooms and computer labs for this remote school, setting an example of sustainability.',
  },
  {
    slug: 'orchard-farmhouse',
    title: 'Orchard Farmhouse',
    category: 'offgrid',
    location: 'Mukteshwar',
    systemSize: '3 kW',
    type: 'Farmhouse',
    monthlySavings: '₹2,800/month',
    installationTime: '3 days',
    panelType: 'Monocrystalline',
    battery: 'Yes',
    content: 'Sustainable Agriculture. This farmhouse uses solar power for the home and water pumping for irrigation.',
  },
  {
    slug: 'village-clinic',
    title: 'Village Clinic',
    category: 'offgrid',
    location: 'Chamoli',
    systemSize: '8 kW',
    type: 'Rural Clinic',
    monthlySavings: '₹6,000/month',
    installationTime: '5 days',
    panelType: 'Monocrystalline',
    battery: 'Yes',
    content: 'Healthcare for All. This solar-powered clinic runs vaccine refrigerators and diagnostic tools reliably, saving lives in remote villages.',
  },
]

async function migrateProjects() {
  console.log('🏗️  Starting projects migration to Sanity...\n')

  try {
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i]
      const doc = await client.create({
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
        inverter: (project as any).inverter,
        battery: project.battery,
        content: [
          {
            _type: 'block',
            children: [{_type: 'span', text: project.content, marks: []}],
            markDefs: [],
            style: 'normal',
          },
        ],
        orderRank: i,
      })
      console.log(`  ✓ Created: ${doc.title} (${project.category})`)
    }

    console.log(`\n✅ Successfully migrated ${projects.length} projects!`)
    console.log(`\nBreakdown:`)
    console.log(`  • Residential: ${projects.filter((p) => p.category === 'residential').length}`)
    console.log(`  • Commercial: ${projects.filter((p) => p.category === 'commercial').length}`)
    console.log(`  • Industrial: ${projects.filter((p) => p.category === 'industrial').length}`)
    console.log(`  • Off-Grid: ${projects.filter((p) => p.category === 'offgrid').length}`)
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

migrateProjects()
