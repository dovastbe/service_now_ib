import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import ImageRequestList from './components/ImageRequestList'
import { ImageRequestService } from './services/ImageRequestService'

const service = new ImageRequestService()

function App() {
    const [requests, setRequests] = useState([])
    const [baseImages, setBaseImages] = useState([])

    useEffect(() => {
        service.listRequests().then(setRequests)
        service.listBaseImages().then(setBaseImages)
    }, [])

    return <ImageRequestList requests={requests} baseImages={baseImages} />
}

const rootElement = document.getElementById('root')
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />)
}