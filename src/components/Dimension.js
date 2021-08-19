
import React, { useState, useEffect } from 'react';
import { useList, } from "@motor-js/engine"
import {
  Card,
  Button,
} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import '../Sidebar.css'
import '../scss/custom.scss'
import Dimension from '../Dimension'
//import SuspenseLoader from 'src/components/SuspenseLoader';

import SidebarNew from './SidebarNew'


function Dimension ({
  dimension,
  pageHeight
}) {
  
    const [isLoading, setLoading] = useState(false)
    const [currPageHeight, setCurrPageHeight] = useState(pageHeight)

     //Account
     var {
         listData,
         select,
         selections,
         clearSelections,
         layout,
         changePage
     } = useList({
         dimension,
         qPage: { qTop: 0, qLeft: 0, qWidth: 1, qHeight: pageHeight },
     })

     useEffect(() => {
        listData && setCurrPageHeight(listData.length)
      },[listData])
      
   
    const TransData1 = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    return(
        <div>
    </div>
       
    )
}

export default Dimension

