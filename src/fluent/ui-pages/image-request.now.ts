import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import imageRequestPage from '../../client/image-request.html'

UiPage({
    $id: Now.ID['image-request-page'],
    endpoint: 'x_559749_iac_image_request.do',
    description: 'Image Build Request Self-Service UI Page',
    category: 'general',
    html: imageRequestPage,
    direct: true,
})

