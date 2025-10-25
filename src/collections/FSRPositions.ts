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
      label: 'Name des Postens',
      type: 'text',
      required: true,
    },
    {
      name: 'department',
      label: 'Referat',
      type: 'relationship',
      relationTo: 'fsrDepartments',
      required: true,
    },
  ],
}
