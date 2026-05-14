import React from 'react'
import FilterPanel from './FilterPanel'
import JobCard from './JobCard'
import Pagination from './Pagination'
import './App.css'

const jobsData = [
    {
        id: 1,
        title: 'Frontend Developer',
        location: 'Remote',
        category: 'Tech',
    },
    {
        id: 2,
        title: 'Backend Developer',
        location: 'San Francisco',
        category: 'Tech',
    },
    { id: 3, title: 'UX Designer', location: 'New York', category: 'Design' },
]

function App() {
    return (
        <div className="app">
            <h1>Job Board</h1>
            <FilterPanel />
            <div className="job-grid">
                {jobsData.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
            <Pagination />
        </div>
    )
}

export default App
