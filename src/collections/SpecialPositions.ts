import { CollectionConfig } from 'payload'

export const SpecialPositions: CollectionConfig = {
  slug: 'specialPositions',
  admin: {
    useAsTitle: 'name',
    group: 'Ämter',
  },
  labels: {
    singular: 'Sonderamt',
    plural: 'Sonderämter',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
  ],
}
