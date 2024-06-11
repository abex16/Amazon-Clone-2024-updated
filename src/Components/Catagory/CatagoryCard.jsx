import React from 'react'
import classes from './catagory.module.css'
import { Link } from 'react-router-dom'
function CatagoryCard({data}) {
  return (
    <div className={classes.catagory}>
      <Link to={`/category/${data.name}`}>
        <span>
            <h2>{data?.name}</h2>
        </span>
        <img src={data?.imgLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  )
}

export default CatagoryCard

