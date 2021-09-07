export default function SearchResults({selectedProperties}) {   
    if (selectedProperties.length > 0) {
        return (
            <div style={{gridColumn: '2 / 3'}}>
            <h2 className="h2 mb16">Selected Properties</h2>
            <div className="mb24 table-container">
    
            <table>
                <thead>
                    <tr>
                       
                        <th>Address</th>
                        <th>Postcode</th>
                        <th>Number of rooms</th>
                        <th>Floor area</th>
                    </tr>
                   { selectedProperties.map((property) => {
                        return (
                        <tr key={property.id}>
                            <td>{property.address}</td>
                            <td>{property.postcode}</td>
                            <td>{property.numberOfRooms}</td>
                            <td>{property.floorArea}</td>
                        </tr>
                        )
                    })}
                </thead>
            </table>
            </div>
            </div>
        )    
    } else {
        return (
            <div style={{gridColumn: ' 2 / 3'}}>
             <h2 className="h2 mb16">Selected Properties</h2>
             <p>No properties selected</p>
            </div>
        )
    }
   
}