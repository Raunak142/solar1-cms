/* eslint-disable @typescript-eslint/no-explicit-any */
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// List of singleton document types (pages that should only have one instance)
const singletonTypes = new Set(['homePage', 'aboutPage', 'contactPage', 'blogsPage', 'projectsPage'])

export default defineConfig({
  name: 'default',
  title: '.',

  projectId: '2j8u7yxd',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S: any) =>
        S.list()
          .title('Content')
          .items([
            // Singleton documents
            ...singletonTypes.values().map((typeName) =>
              S.listItem()
                .title(schemaTypes.find((t) => t.name === typeName)?.title || typeName)
                .id(typeName)
                .child(S.document().schemaType(typeName).documentId(typeName))
            ),
            // All other document types
            ...S.documentTypeListItems().filter(
              (listItem: any) => !singletonTypes.has(listItem.getId() || '')
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Prevent creation of new singleton documents
    newDocumentOptions: (prev, {creationContext}) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => !singletonTypes.has(templateItem.templateId))
      }
      return prev
    },
    // Remove duplicate action for singletons
    actions: (prev, context) => {
      if (singletonTypes.has(context.schemaType)) {
        return prev.filter(({action}) => action !== 'duplicate')
      }
      return prev
    },
  },
})
