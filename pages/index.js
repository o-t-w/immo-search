import PropertyTypesFilter from "../components/PropertyTypesFilter";
import SearchResults from "../components/SearchResults";
import SelectedProperties from "../components/SelectedProperties";
import SearchForm from "../components/SearchForm";
import {fetchProperties, getAvailablePropertyTypes, fetchPropertyDetails} from '../api.js';
import {useState, useEffect} from 'react';


export default function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [propertyType, setPropertyType] = useState("all");
    const [properties, setProperties] = useState(null);
    const [propertyTypes, setPropertyTypes] = useState([]);
    const [selectedProperties, setSelectedProperties] = useState([]);
    const [error, setError] = useState(false);

    useEffect(async () => {
        const result = await getAvailablePropertyTypes();
        setPropertyTypes(result.propertyTypes);
    })

    function handleSearchInput(event) {
        setSearchInput(event.target.value);
    }

    function handleCheckbox(property, checked) {
        if (checked) {
            setSelectedProperties([...selectedProperties, property])
        } else {
            const updatedArray = selectedProperties.filter((item) => item !== property);
            setSelectedProperties(updatedArray);
        }
    }

    async function submitSearch(address, propertyType) {
       try {
           setError(false);
        let response;
        if (propertyType === "all") {
             response = await fetchProperties({address: address});
        } else {
             response = await fetchProperties({address: address, propertyType:propertyType});
        }
        const allProperties = response.properties.map(property => fetchPropertyDetails(property.id));
        Promise.all(allProperties)
        .then(values => values.map(item => {return item.property}))
        .then(thing => thing.map(item => { item.checked = false; return item;}))
        .then(updatedValues => setProperties(updatedValues))

       } catch(error) {
        setError(error.message);
       }
        

    }

    return (
        <div className="App">
        <header className="App-header">
          <div className="constrain-width">
          <img className="immo-logo" width="100" src='/immo-logo.svg' alt="" />
            <h1 className="h1 align-center">Property search tool</h1>
            </div>
        </header>

        <div className="search-grid">
        <SearchForm handleSearchInput={handleSearchInput} searchInput={searchInput} submitSearch={submitSearch} propertyType={propertyType}/>
       
        {error && <p>An unexpected error occurred</p>}
        
        <SelectedProperties selectedProperties={selectedProperties}/>

        <div className="search-results">
       
        {properties ? <SearchResults handleCheckbox={handleCheckbox} properties={properties} /> : <p>Please enter a search query</p> }  
        </div>
       
        <PropertyTypesFilter searchInput={searchInput} submitSearch={submitSearch} propertyType={propertyType} setPropertyType={setPropertyType} propertyTypes={propertyTypes} />
       
      </div>
      </div>
    )
}