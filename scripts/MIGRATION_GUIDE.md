# Content Migration to Sanity CMS

This guide will help you migrate all existing website content to your Sanity CMS.

## Prerequisites

1. **Get your Sanity Write Token:**
   - Go to [sanity.io/manage](https://sanity.io/manage)
   - Select your project
   - Go to API → Tokens
   - Create a new token with "Editor" permissions
   - Copy the token

2. **Add token to environment variables:**
   Open `g:\Solar Webpage\solar1-cms\.env.local` and add:
   ```
   SANITY_WRITE_TOKEN=your_token_here
   ```

## Migration Steps

### Step 1: Run Main Migration Script

This will migrate:

- ✅ **9 Blog Posts** (Education, Finance, Government, Lifestyle, Technical, Business, Tips, Technology, Case Studies)
- ✅ **5 Testimonials** (Customer reviews)
- ✅ **20 FAQs** (Frequently asked questions)
- ✅ **6 Benefits** (Solar benefits)
- ✅ **6 Services** (Service offerings)

```bash
cd "g:\Solar Webpage\solar1-cms"
npx tsx scripts/migrate.ts
```

### Step 2: Manually Add Projects (Optional)

Due to the large amount of project data (15 projects with detailed content), you have two options:

**Option A: Add via Sanity Studio (Recommended)**

1. Open Sanity Studio: http://localhost:3333
2. Click on "Project" in the sidebar
3. Add each project manually using the data from `g:\Solar Webpage\solar1\components\sections\projects\projectData.ts`

**Option B: Create a Separate Migration Script**
If you want to automate project migration, let me know and I'll create a dedicated script.

## What Gets Migrated

### Blog Posts

- Solar Energy 101
- Understanding ROI & Solar Savings
- Government Subsidies & Policies
- Living the Solar Lifestyle
- Maintenance Tips
- Real Stories from Happy Customers
- Commercial Solar
- 10 Tips to Maximize Solar Efficiency
- The Future of Solar Storage

### Testimonials

- Ramesh Sharma (Dehradun, 5 kW)
- Priya Gupta (Dehradun, 3 kW)
- Anil Thakur (Selaqui, 10 kW)
- Sunita Rawat (Mussoorie, 4 kW)
- Vikram Singh (Dehradun, 6 kW)

### FAQs

- 20 frequently asked questions covering:
  - Solar viability
  - Technical questions
  - Cost and ROI
  - Maintenance
  - Subsidies
  - Safety

### Benefits

- Lower Electricity Bills
- Reliable Power Every Day
- Affordable & EMI Options
- Zero Maintenance Stress
- Higher Home Value
- Better Future for Your Family

### Services

- Residential Solar Systems
- Rooftop Solar Installation
- On-Grid & Off-Grid Systems
- Solar with Battery Backup
- Maintenance & AMC
- Government Subsidy Support

## Verification

After migration, verify in Sanity Studio:

1. Go to http://localhost:3333
2. Check each content type in the sidebar
3. Ensure all data appears correctly

## Troubleshooting

**Error: "Insufficient permissions"**

- Make sure your SANITY_WRITE_TOKEN has "Editor" permissions

**Error: "Module not found"**

- Run `npm install @sanity/client` first

**Migration runs but no data appears**

- Check that you're using the correct project ID and dataset
- Verify the token is set correctly in `.env.local`

## Next Steps

After successful migration:

1. Review all content in Sanity Studio
2. Add missing images using Sanity's image upload
3. Update your Next.js app to fetch from Sanity instead of hardcoded data
4. Test the website to ensure everything works

---

Need help? Check the Sanity documentation or reach out!
