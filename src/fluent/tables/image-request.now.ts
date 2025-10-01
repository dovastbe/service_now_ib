import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_559749_iac_image_request = Table({
    name: 'x_559749_iac_image_request',
    label: 'Image Request',
    schema: {
        requester: StringColumn({
            label: 'Requester',
            maxLength: 100,
            mandatory: true,
        }),
        base_image: ReferenceColumn({
            label: 'Base Image',
            reference: 'x_559749_iac_image_base_image',
            mandatory: true,
        }),
        image_name: StringColumn({
            label: 'Requested Image Name',
            maxLength: 100,
            mandatory: true,
        }),
        additional_packages: StringColumn({
            label: 'Additional Packages',
            maxLength: 100,
        }),
        configuration_steps: StringColumn({
            label: 'Additional Configuration Steps',
            maxLength: 2000,
        }),
    },
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete'],
    allow_web_service_access: true,
})