import { CollectionConfig } from 'payload'

export const Cohorts: CollectionConfig = {
  slug: 'cohorts',
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: 'Kohorte',
    plural: 'Kohorten',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}
