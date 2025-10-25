import { CollectionConfig } from 'payload'

export const FSRPositions: CollectionConfig = {
  slug: 'fsrPositions',
  admin: {
    useAsTitle: 'name',
    group: 'Ämter',
  },
  labels: {
    singular: 'FSR-Posten',
    plural: 'FSR-Posten',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'department',
      type: 'relationship',
      relationTo: 'fsrDepartments',
      required: true,
    },
  ],
}
