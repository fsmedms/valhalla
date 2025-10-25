import { Block } from 'payload'
import { dateFields } from './utils'

const SpecialAgentBlock: Block = {
  slug: 'specialAgentBlock',
  labels: {
    singular: 'Sonderbeauftragte:r',
    plural: 'Sonderbeauftragte',
  },
  fields: [
    {
      name: 'position',
      label: 'Sonderbeauftragte Rolle',
      type: 'relationship',
      relationTo: 'specialPositions',
      required: true,
    },
    ...dateFields,
  ],
  admin: {
    disableBlockName: true,
  },
}

export default SpecialAgentBlock
