import {useState} from 'react';

export default function SearchFormAndSelected(props) {


    return (
        <div className="search-form-and-selected">
        <form className="mb24" onSubmit={(event) => {event.preventDefault(); props.submitSearch(props.searchInput, props.propertyType)}} action="">
        <label className="h2 mb24" htmlFor="search">Search</label>
        <div className="flex colgap16">
        <input className="flex1" placeholder="Address" value={props.searchInput} onChange={(event) => props.handleSearchInput(event)} id="search" type="search"/>
        <button className="btn-search">Search</button>
        </div>
    </form>
    
    </div>
    )
}