import React from 'react'
import './CallTracker.css'
import DataTable from '../Table/Table'
import BasicPagination from '../Pagination/Pagination'
import DropDown from './DropDown'
import SearchBar from '../SearchBar/SearchBar'


function CallTracker() {
  return (
    <>
    <div className='containerCall'>
      <div className='sub_containerCall'>
      <SearchBar/>
    
    <DataTable />

      </div>
      <BasicPagination/>
  
    </div>
    </>
  )
}

export default CallTracker

