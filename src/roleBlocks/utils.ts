import { Field } from 'payload'

export const dateFields: Field[] = [
  {
    name: 'startDate',
    label: 'Startdatum der Tätigkeit',
    type: 'date',
    defaultValue: new Date().toISOString().split('T')[0],
    required: true,
  },
  {
    name: 'endDate',
    label: 'Enddatum der Tätigkeit',
    type: 'date',
    required: false,
  },
  {
    name: 'statusControl',
    label: 'Statussteuerung',
    type: 'select',
    required: true,
    defaultValue: 'automatic',
    options: [
      {
        label: 'Aktiv erzwingen',
        value: 'forceActive',
      },
      {
        label: 'Inaktiv erzwingen',
        value: 'forceInactive',
      },
      {
        label: 'Datumsangaben berücksichtigen',
        value: 'automatic',
      },
    ],
  },
  {
    name: 'isActive',
    label: 'Aktiv',
    type: 'checkbox',
    required: true,
    virtual: true,
    admin: {
      readOnly: true,
    },
    hooks: {
      afterRead: [
        ({ siblingData }) => {
          const { startDate, endDate, statusControl } = siblingData
          const now = new Date()

          if (statusControl === 'forceActive') {
            return true
          }
          if (statusControl === 'forceInactive') {
            return false
          }

          const start = startDate ? new Date(startDate) : null
          const end = endDate ? new Date(endDate) : null

          if (start && now < start) {
            return false
          }
          if (end && now > end) {
            return false
          }
          return true
        },
      ],
    },
  },
]
