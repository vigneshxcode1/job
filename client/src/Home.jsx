import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './assets/compoents/jobcard';


const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setsearch] = useState('')


  useEffect(() => {
    axios.get("http://localhost:8000")
      .then(result => {
        setJobs(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>JOBS POST</h1>
      <div className="card-container">
        <form>
          <input onChange={(e) => setsearch(e.target.value)} placeholder='search' />
        </form>

        {jobs.length > 0 ? (
          jobs.filter((job) => {
            return search.trim() === "" 
            ||job.jobTitle.toLowerCase().includes(search.toLowerCase())
            ||job.companyname.toLowerCase().includes(search.toLowerCase())
            ||job.salary.toLowerCase().includes(search.toLowerCase())

          }).map((job, index) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs available</p>
        )}

      </div>

    </>

  );

};

export default Home;
