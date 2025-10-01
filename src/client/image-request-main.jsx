import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import ImageRequestForm from './components/ImageRequestForm'
import { ImageRequestService } from './services/ImageRequestService'

const service = new ImageRequestService()

function App() {
    const [baseImages, setBaseImages] = useState([])
    const [showForm, setShowForm] = useState(true)

    useEffect(() => {
        service.listBaseImages().then(setBaseImages)
    }, [])

    const handleSubmit = async (formData) => {
        await service.createRequest(formData)
        alert('Request submitted!')
        setShowForm(false)
    }

    return showForm ? (
        <ImageRequestForm baseImages={baseImages} onSubmit={handleSubmit} onCancel={() => setShowForm(false)} />
    ) : (
        <div>Thank you for your request.</div>
    )
}

const rootElement = document.getElementById('root')
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />)
}