import { Block } from 'payload'
import { dateFields } from './utils'

const HoPoliticianBlock: Block = {
  slug: 'hoPoliticianBlock',
  labels: {
    singular: 'Hochschulpolitische:r Mitarbeiter:in',
    plural: 'Hochschulpolitische Mitarbeiter:innen',
  },
  fields: [
    {
      name: 'positions',
      label: 'Hochschulpolitische Rolle',
      type: 'relationship',
      relationTo: 'hoPositions',
      required: true,
    },
    ...dateFields,
  ],
  admin: {
    disableBlockName: true,
  },
}

export default HoPoliticianBlock
