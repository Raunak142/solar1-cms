
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

// Load environment variables
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

// Mapping of blog slugs to local image filenames
const imageMapping: Record<string, string> = {
  'education': 'Panel.png',
  'cost-savings': 'Cost.png',
  'subsidy': 'RoofPanel.png',
  'lifestyle': 'House.png',
  'maintenance': 'Field Panel.png',
  'case-studies': 'House.png',
  'commercial-solar': 'Field Panel.png',
  'tips-tricks': 'RoofPanel.png',
  'future-tech': 'Benifits4-Photoroom.png',
}

const IMAGES_DIR = path.join(__dirname, '../../solar1/public/images')

async function updateBlogImages() {
  console.log('🚀 Starting blog image update...')

  for (const [slug, filename] of Object.entries(imageMapping)) {
    const imagePath = path.join(IMAGES_DIR, filename)

    if (!fs.existsSync(imagePath)) {
      console.warn(`⚠️  Image not found: ${filename} (skipping ${slug})`)
      continue
    }

    try {
      console.log(`\nProcessing ${slug}...`)
      
      // 1. Find the blog post document ID
      const query = `*[_type == "post" && slug.current == $slug][0]._id`
      const docId = await client.fetch(query, { slug })

      if (!docId) {
        console.warn(`  ⚠️  Blog post not found for slug: ${slug}`)
        continue
      }

      // 2. Upload the image
      console.log(`  uploading ${filename}...`)
      const imageBuffer = fs.readFileSync(imagePath)
      const asset = await client.assets.upload('image', imageBuffer, {
        filename: filename
      })

      // 3. Patch the document
      console.log(`  updating document ${docId}...`)
      await client.patch(docId)
        .set({
          image: {
            _type: 'image',
            asset: {
              _type: "reference",
              _ref: asset._id
            }
          }
        })
        .commit()

      console.log(`  ✓ Updated image for ${slug}`)

    } catch (error) {
      console.error(`  ❌ Failed to update ${slug}:`, error)
    }
  }

  console.log('\n✅ Blog image update completed!')
}

updateBlogImages()
