import React from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CustomizedMenus from '../Filter/CustomizedMenus';
import TemporaryDrawer from '../addData/Adddata';

function SearchBar() {
  return (
    <>
      <div className='searchbar_container'>
        <input className='searchbar' />
        <SearchIcon />
        <div className='filterclient'>
        <CustomizedMenus />
        <TemporaryDrawer />
        </div>
      </div>

    </>

  )
}

export default SearchBar    