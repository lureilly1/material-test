import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import Accordion from 'react-bootstrap/Accordion';

const FilterGroup = ({ groupName, eventKey, filters }) => {

  const pageHeight = 50

  return (
    <Accordion.Item eventKey={eventKey}>
    <Accordion.Header><span style = {{fontSize: "18px"}}>{groupName}</span></Accordion.Header>
    <Accordion.Body>
       {filters && filters.map((d, i) => (
        <Filter 
        dimension={[d.dimension]}
        label={d.label}
        pageHeight={pageHeight}
        />
       ))}
    </Accordion.Body>
    </Accordion.Item>
  )
}

export default FilterGroup