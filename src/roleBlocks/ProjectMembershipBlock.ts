import { Block } from 'payload'
import { dateFields } from './utils'

const ProjectMemberShipBlock: Block = {
  slug: 'projectMembershipBlock',
  labels: {
    singular: 'Projektmitgliedschaft',
    plural: 'Projektmitgliedschaften',
  },
  fields: [...dateFields],
  admin: {
    disableBlockName: true,
  },
}

export default ProjectMemberShipBlock
