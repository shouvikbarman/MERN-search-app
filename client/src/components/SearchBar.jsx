import {useState,useEffect} from 'react';
import axios from 'axios';
import '../styles/searchbar.css'
import searchIcon from '../static/search-icon.png';
import cross from '../static/cross.jpg';
import Result from './Result'

function SearchBar() {

    const [isEmpty,setIsEmpty] = useState(true);
    const[data,setData] = useState([]);
    const[filteredData,setFilteredData] = useState([])

    async function getData() {
        const res = await axios.get('http://localhost:8000')
        return res.data.data
    }

    useEffect(() => {
        getData().then((val) => {
            setData(val)
        });  
    },[])
    
    function handleChange(event){
        const inputLength = event.target.value.length;
        const searchWord = event.target.value.toLowerCase();
        if(inputLength>=1){
            setIsEmpty(false);
            const newFilter = data.filter((ad) => {
                const {primaryText,headline,description} = ad;
                return (
                    primaryText.toLowerCase().includes(searchWord) || 
                    headline.toLowerCase().includes(searchWord) ||
                    description.toLowerCase().includes(searchWord)
                )
            })
    
            setFilteredData(newFilter)
        }else{
            setIsEmpty(true);
            setFilteredData([])
        }
    }

  return (
    <div className="search-container">
        <div className="search-input-container">
            <input className="search-input" type="text" placeholder="Type here..." onChange={handleChange}/>
            {isEmpty ? <button className="search-button">
                <img src={searchIcon} alt="SearchButton"/>
            </button> : <button className="search-button">
                <img src={cross} alt="SearchButton"/>
            </button>}

        </div>
        {filteredData.length >0 && <Result filteredData={filteredData}/>}
      
    </div>
  );
}

export default SearchBar;
