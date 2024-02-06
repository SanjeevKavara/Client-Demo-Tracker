import React from 'react'
import { Link } from 'react-router-dom'
import './DemoTracker.css'
import DataTable from '../Table/Table'
import BasicPagination from '../Pagination/Pagination'
import PositionedMenu from '../PositionedMenu/PositionedMenu'
import SearchBar from '../SearchBar/SearchBar';
import CustomizedMenus from '../Filter/CustomizedMenus'

function DemoTracker() {
  return (
    <>
    <div className='container'>
    <SearchBar/>
    
    <DataTable />
    <BasicPagination/>
  
    </div>
    </>
  )
}

export default DemoTracker