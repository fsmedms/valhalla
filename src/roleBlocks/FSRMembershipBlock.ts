import { Block } from 'payload'
import { dateFields } from './utils'

const FSRMembershipBlock: Block = {
  slug: 'fsrMembershipBlock',
  labels: {
    singular: 'FSR-Mitgliedschaft',
    plural: 'FSR-Mitgliedschaften',
  },
  fields: [
    {
      name: 'position',
      label: 'Position im FSR',
      type: 'relationship',
      relationTo: 'fsrPositions',
      required: true,
    },
    {
      name: 'comment',
      label: 'Kommentar',
      type: 'textarea',
      required: false,
    },
    ...dateFields,
  ],
  admin: {
    disableBlockName: true,
  },
}

export default FSRMembershipBlock
