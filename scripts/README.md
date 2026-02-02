# Quick Start: Content Migration

## Ready to Migrate? Follow These Steps:

### 1. Run the Main Migration

This migrates blogs, testimonials, FAQs, benefits, and services:

```bash
cd "g:\Solar Webpage\solar1-cms"
npm run migrate
```

### 2. Run Projects Migration

This migrates all 15 solar projects:

```bash
npm run migrate:projects
```

### 3. Or Run Everything at Once

```bash
npm run migrate:all
```

## What Gets Migrated:

✅ **9 Blog Posts** - All categories (Education, Finance, Government, etc.)  
✅ **5 Testimonials** - Customer reviews from Dehradun, Mussoorie, etc.  
✅ **20 FAQs** - Common questions about solar  
✅ **6 Benefits** - Why choose solar  
✅ **6 Services** - Service offerings  
✅ **15 Projects** - Residential, Commercial, Industrial, Off-Grid

## After Migration:

1. Open Sanity Studio: http://localhost:3333
2. Verify all content appears correctly
3. Upload images for blog posts and projects
4. Review and edit any content as needed

## Need Help?

Check `MIGRATION_GUIDE.md` for detailed instructions and troubleshooting.

---

**Note:** The token is already configured in `.env.local`, so you can run the migration immediately!
