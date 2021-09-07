export default function SearchResults({properties, handleCheckbox}) {
    if (properties.length > 0) {
    return (
        <>
         <h2 className="h2 mb16">Search results</h2>
        <div className="mb24 table-container">

        <table>
            <thead>
                <tr>
                    <th>✓</th>
                    <th>Address</th>
                    <th>Postcode</th>
                    <th>Property type</th>
                    <th>Number of rooms</th>
                    <th>Floor area</th>
                </tr>
               { properties.map((property) => {
                    return (
                    <tr key={property.id}>
                        {/* <td><input checked={property.checked} onChange={() => setChecked(property.id)} type="checkbox" /></td> */}
                        <td><input onChange={(event) => handleCheckbox(property, event.target.checked)} type="checkbox" /></td>
                        <td>{property.address}</td>  
                        <td>{property.postcode}</td>
                        <td>{property.propertyType}</td>
                        <td>{property.numberOfRooms}</td>
                        <td>{property.floorArea}</td>
                    </tr>
                    )
                })}
            </thead>
        </table>
        </div>
        </>
    ) } else if (properties === null) {
        return (
            <>
            <h2 className="h2 mb16">Search results</h2>
            <p>Search for an address in the input above</p>
            </>
        )
    } else {
        return (
            <>
            <h2 className="h2 mb16">Search results</h2>
            <p>No results found</p>
            </>
        )
    }
}