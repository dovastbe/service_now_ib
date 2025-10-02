import React, { useState, useEffect } from 'react'
import './ImageRequestForm.css'

export default function ImageRequestForm({ baseImages, onSubmit, onCancel, initialData }) {
    const [formData, setFormData] = useState({
        requester: '',
        base_image: '',
        image_name: '',
        additional_packages: [],
        configuration_steps: '',
    })
    useEffect(() => {
        if (initialData) {
            setFormData({
                requester: initialData.requester || '',
                base_image: typeof initialData.base_image === 'object'
                    ? initialData.base_image.value
                    : initialData.base_image || '',
                image_name: initialData.image_name || '',
                additional_packages: Array.isArray(initialData.additional_packages)
                    ? initialData.additional_packages
                    : (initialData.additional_packages || '').split(',').map(pkg => pkg.trim()).filter(Boolean),
                configuration_steps: initialData.configuration_steps || '',
            })
        }
    }, [initialData])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handlePackagesChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            additional_packages: e.target.value.split(',').map(pkg => pkg.trim()),
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <div className="form-overlay">
            <div className="form-container">
                <div className="form-header">
                    <h2>Request New Image</h2>
                    <button type="button" className="close-button" onClick={onCancel}>×</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="requester">Requester *</label>
                        <input
                            type="text"
                            id="requester"
                            name="requester"
                            value={formData.requester}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="base_image">Base Image *</label>
                        <select
                            id="base_image"
                            name="base_image"
                            value={formData.base_image}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a base image</option>
                            {baseImages.map(img => (
                                <option key={img.sys_id} value={img.sys_id}>
                                    {img.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image_name">Image Name *</label>
                        <input
                            type="text"
                            id="image_name"
                            name="image_name"
                            value={formData.image_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="additional_packages">Additional Packages (comma separated)</label>
                        <input
                            type="text"
                            id="additional_packages"
                            name="additional_packages"
                            value={formData.additional_packages.join(', ')}
                            onChange={handlePackagesChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="configuration_steps">Additional Configuration Steps</label>
                        <textarea
                            id="configuration_steps"
                            name="configuration_steps"
                            value={formData.configuration_steps}
                            onChange={handleChange}
                            rows={4}
                        />
                    </div>
                    <div className="form-actions">
                        <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
                        <button type="submit" className="submit-button">Submit Request</button>
                    </div>
                </form>
            </div>
        </div>
    )
}