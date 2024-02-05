import React from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CustomizedMenus from '../Filter/CustomizedMenus';

function SearchBar() {
  return (
    <>
    <div className='searchbar_container'>
    <input className='searchbar'/>
    <SearchIcon/>
    <CustomizedMenus/>
    <button className='demo_detail'>Add Demo Detail</button>
    </div>

    </>
    
  )
}

export default SearchBar