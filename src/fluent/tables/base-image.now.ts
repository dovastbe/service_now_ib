import '@servicenow/sdk/global'
import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_559749_iac_image_base_image = Table({
    name: 'x_559749_iac_image_base_image',
    label: 'Base Image',
    schema: {
        name: StringColumn({
            label: 'Image Name',
            maxLength: 100,
            mandatory: true,
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 400,
        }),
    },
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete'],
    allow_web_service_access: true,
})