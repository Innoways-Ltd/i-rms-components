import React from 'react'

export default function Card(props) {
  return (
    <div className={`card h-100 ${props?.className}`}>
      <div className="card-body">
        <h5 className="card-title">Card title {props?.i}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
