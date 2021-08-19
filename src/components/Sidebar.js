import { useState, useEffect } from 'react';
import { useList, } from "@motor-js/engine"
import {
  Card,
  Button,
} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Dimension from '../Dimension'
//import SuspenseLoader from 'src/components/SuspenseLoader';

function Sidebar ({

}) {

  const [isLoading, setLoading] = useState(false)


    //Prevent text selection in drag select
    useEffect(() => {
        document.getElementById('accordion').addEventListener('selectstart', function(e){
        e.preventDefault()})
    })

     
    return(
        <div>  
            {c && c.map(element => 
            <Dimension />
                )}
         </div>  
    )
}

export default Sidebar


/*



*/