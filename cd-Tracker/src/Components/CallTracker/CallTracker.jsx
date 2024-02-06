import React from 'react'
import './CallTracker.css'
import DataTable from '../Table/Table'
import BasicPagination from '../Pagination/Pagination'
import DropDown from './DropDown'


function CallTracker() {
  return (
    <>
    <div className='container  container_call'>
    
    <DataTable />
    <BasicPagination/>
    </div>
    </>
  )
}

export default CallTracker

