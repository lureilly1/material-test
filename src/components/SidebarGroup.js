
import React, { useState, useEffect } from 'react';
import { useList, useSelections} from "@motor-js/engine"
import {
  Card,
  Button,
} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

import '../Sidebar.css'
import '../scss/custom.scss'

import FilterGroup from './FilterGroup'
//import SuspenseLoader from 'src/components/SuspenseLoader';

function SidebarGroup () {
    const [isLoading, setLoading] = useState(false)
    const { clearSelections } = useSelections()
    
    return(
        <div>
            <button onClick={() => clearSelections()}>CLEAR SELECTIONS</button>
      <Card>      
      <div>
      {/* {console.log(location_variable, product_variable)} */}
      <Accordion id = "accordion">
            {isLoading ?<div>Loading</div>
            :
            <>
                <FilterGroup 
                    groupName={'Group 1'}
                    filters={[{
                            dimension: 'TransID',
                            label: 'TransID1'
                        },
                        {
                            dimension: 'TransID',
                            label: 'TransID2'
                        }]}
                    eventKey='0'
                />
                <FilterGroup 
                    groupName={'Group 2'}
                    filters={[{
                        dimension: 'TransID',
                        label: 'TransID3'
                    },
                    {
                        dimension: 'TransID',
                        label: 'TransID4'
                    }]}
                    eventKey='1'
                />
            </>
    }
        </Accordion>
      </div>
    </Card>
    </div>
       
    )
}

export default SidebarGroup

