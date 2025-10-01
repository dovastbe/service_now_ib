import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import imageRequestListPage from '../../client/image-request-list.html'

UiPage({
    $id: Now.ID['image-request-list-page'],
    endpoint: 'x_559749_iac_image_request_list.do',
    description: 'Image Request List UI Page',
    category: 'general',
    html: imageRequestListPage,
    direct: true,
})