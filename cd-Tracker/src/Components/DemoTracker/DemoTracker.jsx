import React from 'react'
import { Link } from 'react-router-dom'
import './DemoTracker.css'
import CustomizedMenus from './DropDown'
import DataTable from '../Table/Table'

function DemoTracker() {
  return (
    <>
    <div className='container'>
    <DataTable />
    </div>
    </>
  )
}

export default DemoTracker