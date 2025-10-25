import { Block } from 'payload'
import { dateFields } from './utils'

const FSVMembershipBlock: Block = {
  slug: 'fsvMembershipBlock',
  labels: {
    singular: 'FSV-Mitgliedschaft',
    plural: 'FSV-Mitgliedschaften',
  },
  fields: [
    {
      name: 'position',
      label: 'Position im FSV',
      type: 'select',
      options: [
        { label: 'Präsident:in', value: 'president' },
        { label: 'Stellvertretende:r Präsident:in', value: 'president' },
        { label: 'Mitglied', value: 'member' },
      ],
    },
    ...dateFields,
  ],
  admin: {
    disableBlockName: true,
  },
}

export default FSVMembershipBlock
