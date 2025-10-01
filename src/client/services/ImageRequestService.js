export class ImageRequestService {
    constructor() {
        this.requestTable = 'x_559749_iac_image_request'
        this.baseImageTable = 'x_559749_iac_image_base_image'
    }

    async listRequests() {
        const response = await fetch(`/api/now/table/${this.requestTable}?sysparm_display_value=all`, {
            headers: { Accept: 'application/json', 'X-UserToken': window.g_ck },
        })
        const { result } = await response.json()
        return result || []
    }

    async createRequest(data) {
        const response = await fetch(`/api/now/table/${this.requestTable}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'X-UserToken': window.g_ck },
            body: JSON.stringify(data),
        })
        return response.json()
    }

    async listBaseImages() {
        const response = await fetch(`/api/now/table/${this.baseImageTable}?sysparm_display_value=all`, {
            headers: { Accept: 'application/json', 'X-UserToken': window.g_ck },
        })
        const { result } = await response.json()
        return result || []
    }
}