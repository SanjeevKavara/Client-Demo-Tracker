import React, { useState } from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CustomizedMenus from '../Filter/CustomizedMenus';
import TemporaryDrawer from '../addData/Adddata';
import searchApi from '../../api/searchApi';

function SearchBar({getFilterContent,searchContent,resetFilter}) {

  const [searchVal,setSearchVal] = useState("");

  const searchHandler = (e)=>{
    setSearchVal(e.target.value);

    onSearch();
  }

  const onSearch = ()=>{
    async function searchValue(){
      try{
        const response = await searchApi(searchVal);
        if(response)
        {
          searchContent(response);
        }
      }
      catch(error){
        alert('ERROR OCCURED');
      }
    }

    searchValue();

  }

  return (
    <>
      <div className='searchbar_container'>
        <input className='searchbar' onChange={searchHandler} />
        <SearchIcon onClick={onSearch}/>
        <div className='filterclient'>
        <CustomizedMenus getFilterContent={getFilterContent} resetFilter = {resetFilter} />
        <TemporaryDrawer />
        </div>
      </div>

    </>

  )
}

export default SearchBar    