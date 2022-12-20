import React, { useContext, useEffect } from 'react'
import {getListAllAreas} from '../API'
import { useNavigate } from "react-router-dom";
import { AppContext } from '../context'
import AreaItem from './AreaItem'
import Search  from './Search'

function AreasList() {
  const navigate = useNavigate();
    const {setAreas, setFilteredAreas, filteredAreas, searchAreas} = useContext(AppContext)
    useEffect(() => {
        getListAllAreas().then((data) => {
            setAreas(data.meals);
            setFilteredAreas(data.meals)
        })
    }, [])
  return (
    <div>
       <button
        className="btn cyan darken-1 row go-back-button"
        onClick={() => navigate('/')}
      >
        Go Back
      </button>
      <Search search={searchAreas} />
      <div className='list'>
        {filteredAreas.map(area => <AreaItem {...area} key={area.strArea}/>)}
    </div>
    </div>
    
  )
}

export default AreasList