import React from 'react'
import './ImageRequestList.css'

export default function ImageRequestList({ requests }) {
    return (
        <div className="image-request-list">
            <table>
                <thead>
                    <tr>
                        <th>Requester</th>
                        <th>Base Image</th>
                        <th>Image Name</th>
                        <th>Packages</th>
                        <th>Config Steps</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map(req => (
                        <tr key={req.sys_id}>
                            <td>{req.requester}</td>
                            {/* Use display_value for base_image */}
                            <td>{req.base_image?.display_value || ''}</td>
                            <td>{req.image_name}</td>
                            <td>{(req.additional_packages || []).join(', ')}</td>
                            <td>{req.configuration_steps}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}