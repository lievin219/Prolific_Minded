import React from 'react'

const Service = () => {
  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <img src="/images/service1.jpg" alt="Service 1" />
          <h2>Personal Coaching</h2>
          <p>One-on-one coaching tailored to your needs.</p>
        </div>
        <div className="service-card">
          <img src="/images/service2.jpg" alt="Service 2" />
          <h2>Group Workshops</h2>
          <p>Interactive group sessions to improve skills.</p>
        </div>
        <div className="service-card">
          <img src="/images/service3.jpg" alt="Service 3" />
          <h2>Career Guidance</h2>
          <p>Helping you make have a good mental and phyisical healthy.</p>
        </div>
      </div>
    </div>
  )
}

export default Service
