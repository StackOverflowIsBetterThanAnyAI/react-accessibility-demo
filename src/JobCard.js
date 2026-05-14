import React from 'react'

function JobCard({ job }) {
    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <p aria-labelledby="invalid1">Location: {job.location}</p>
            <p aria-labelledby="invalid2">Category: {job.category}</p>
        </div>
    )
}

export default JobCard
