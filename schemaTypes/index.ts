import post from './post'
import project from './project'
import testimonial from './testimonial'
import faq from './faq'
import benefit from './benefit'
import service from './service'
import siteSettings from './siteSettings'
import homePage from './homePage'
import aboutPage from './aboutPage'
import projectsPage from './projectsPage'
import blogsPage from './blogsPage'
import contactPage from './contactPage'

export const schemaTypes = [
  // Page Schemas
  homePage,
  aboutPage,
  projectsPage,
  blogsPage,
  contactPage,
  
  // Content Schemas
  post,
  project,
  testimonial,
  faq,
  benefit,
  service,
  
  // Settings
  siteSettings,
]

