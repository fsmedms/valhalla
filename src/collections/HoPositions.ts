import { CollectionConfig } from 'payload'

export const HoPositions: CollectionConfig = {
  slug: 'hoPositions',
  admin: {
    useAsTitle: 'name',
    group: 'Ämter',
  },
  labels: {
    singular: 'Hochschulpolitische:r Posten',
    plural: 'Hochschulpolitische Posten',
  },
  fields: [
    {
      name: 'name',
      label: 'Name des Postens',
      type: 'text',
      required: true,
    },
  ],
}
