import FSRMembershipBlock from '@/roleBlocks/FSRMembershipBlock'
import FSVMembershipBlock from '@/roleBlocks/FSVMembershipBlock'
import HoPoAgentBlock from '@/roleBlocks/HoPoliticianBlock'
import ProjectMemberShipBlock from '@/roleBlocks/ProjectMembershipBlock'
import SpecialAgentBlock from '@/roleBlocks/SpecialAgentBlock'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Fachschaftler:in',
    plural: 'Fachschaftler:innen',
  },
  admin: {
    useAsTitle: 'universityId',
    listSearchableFields: ['displayName', 'universityId'],
  },
  auth: true,
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Allgemein',
          fields: [
            {
              name: 'profileImage',
              label: 'Profilbild',
              type: 'upload',
              relationTo: 'media',
              required: false,
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'universityId',
              label: 'Uni-Kennung',
              type: 'text',
              required: false,
              unique: true,
            },
            {
              name: 'universityEmail',
              label: 'Uni-Mail',
              type: 'email',
              required: false,
              unique: true,
              virtual: true,
              admin: {
                readOnly: true,
              },
              hooks: {
                afterRead: [
                  ({ siblingData }) => {
                    return `${siblingData.universityId}@uni-muenster.de`
                  },
                ],
              },
            },
            {
              name: 'lastName',
              label: 'Bürgerlicher Nachname',
              type: 'text',
              required: true,
            },
            {
              name: 'firstName',
              label: 'Bürgerlicher Vorname',
              type: 'text',
              required: true,
            },
            {
              name: 'displayName',
              label: 'Anzeigename',
              type: 'text',
              required: true,
            },
            {
              name: 'nickname',
              label: 'Anredename',
              type: 'text',
              required: true,
            },
            {
              name: 'cohort',
              label: 'Kohorte',
              type: 'relationship',
              relationTo: 'cohorts',
              required: false, // Temporarily optional to migrate existing data
            },
            {
              name: 'comment',
              label: 'Kommentar',
              type: 'textarea',
              required: false,
            },
          ],
        },
        {
          label: 'Kontaktdaten',
          fields: [
            {
              name: 'address',
              label: 'Adresse',
              type: 'text',
              required: false,
            },
            {
              name: 'phoneNumber',
              label: 'Telefonnummer',
              type: 'text',
              required: false,
            },
          ],
        },
        {
          label: 'Rollen',
          fields: [
            {
              name: 'roles',
              label: 'Rollen',
              type: 'blocks',
              blocks: [
                FSRMembershipBlock,
                FSVMembershipBlock,
                SpecialAgentBlock,
                HoPoAgentBlock,
                ProjectMemberShipBlock,
              ],
              admin: {
                isSortable: false,
                initCollapsed: false,
              },
            },
          ],
        },
      ],
    },
  ],
}
