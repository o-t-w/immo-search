export default function PropertyTypesFilter(props) {
    return(
    <div className="property-types mb24">
    <h2 className="h2 mb24">Property types</h2>
      <ul className="unstyled-list property-types-list">
      <li><button className={props.propertyType === 'all' ? 'bold' : null} onClick={() => {props.setPropertyType('all'); props.submitSearch(props.searchInput)}}>All</button> </li>
          {props.propertyTypes.map((item) => {
              return <li key={item.value}><button className={item.value === props.propertyType ? 'bold' : null} onClick={() => {props.setPropertyType(item.value); props.submitSearch(props.searchInput, item.value)}}>{item.label}</button> </li>
          })}
      </ul>
    </div>
    )
}