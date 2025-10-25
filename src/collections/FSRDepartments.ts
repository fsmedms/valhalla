import { CollectionConfig } from 'payload'

export const FSRDepartments: CollectionConfig = {
  slug: 'fsrDepartments',
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: 'FSR-Referat',
    plural: 'FSR-Referate',
  },
  fields: [
    {
      name: 'name',
      label: 'Name des Referats',
      type: 'text',
      required: true,
    },
    {
      name: 'positions',
      label: 'Positionen',
      type: 'join',
      collection: 'fsrPositions',
      on: 'department',
      hasMany: true,
      required: true,
    },
  ],
}
