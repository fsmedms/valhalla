import { Block } from 'payload'
import { dateFields } from './utils'

const ProjectMemberShipBlock: Block = {
  slug: 'projectMembershipBlock',
  labels: {
    singular: 'Projektmitgliedschaft',
    plural: 'Projektmitgliedschaften',
  },
  fields: [
    {
      name: 'project',
      label: 'Projekt',
      relationTo: 'projects',
      type: 'relationship',
      required: true,
    },
    ...dateFields,
  ],
  admin: {
    disableBlockName: true,
  },
}

export default ProjectMemberShipBlock
