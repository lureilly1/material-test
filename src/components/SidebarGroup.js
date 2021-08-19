
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


function SidebarGroup () {
  
    const pageHeight = 50
    const [isLoading, setLoading] = useState(false)
    const [currPageHeight, setCurrPageHeight] = useState(pageHeight)
    const [checked_trans, setTrans] = useState({})

    const transDim = [['TransID'], ['TransID']]
   
    //Function to create dimension dictionaries
    function dimension_dict(dimensions, checked){
          for (let i = 0; i < dimensions.length; i++) {
          if (checked[dimensions[i]] == undefined) {
              checked[dimensions[i]] = [];
              }
          }
      }
    dimension_dict(transDim, checked_trans)

     //Account
     var dimension = ['TransID'];
     var {
         listData, select, selections, clearSelections, layout, changePage
     } = useList({
         dimension,
         qPage: { qTop: 0, qLeft: 0, qWidth: 1, qHeight: pageHeight },
     })

     useEffect(() => {
        listData && setCurrPageHeight(listData.length)
      },[listData])
      
   
    const TransData1 = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))
    const transVariable = [TransData1]

    //Drag-select functions and mousedown state
    const [mouseDown, mouseChange] = useState(0)
    
    const handleMouseDown = () => {
            mouseChange(1)
    }
        const handleMouseUp = () => {
            //check if mouse has been pressed over selectable items
            if (mouseDown == 1) {
                mouseChange(-1);
                Array.from(document.getElementsByClassName('toClick')).forEach((element) => {
                    element.click()
                    //element.classList.remove('toClick')
                })
            }  
        }

        //Fuzzy search functions
    const handleOnSelect = (item, i) => {
        document.getElementById(i.toString()+item.id.toString()).click()
      }
    const formatResult = (item) => {
        return (
            <div className="form-check">
            <input
                class="form-check-input" 
                type="checkbox"  
                />
            {item}
            </div> 
            );
     }

     const loadNextPage = () => {
         console.log('LOAD NEXT PAGE')
         console.log(pageHeight+currPageHeight)
         changePage({ qHeight: pageHeight+currPageHeight })
     }

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
            <Accordion.Item eventKey="0">
            <Accordion.Header><span style = {{fontSize: "18px"}}>{'Location'}</span></Accordion.Header>
            <Accordion.Body>
            <Accordion defaultActiveKey="0" flush>
            {transVariable.map((c,i) => {
                const items = transVariable[i]
                return(
                <Accordion.Item eventKey={i}>
                    <Accordion.Header>{transDim[i]}</Accordion.Header>
                    <Accordion.Body>
                    <div style = {{paddingBottom: "10px"}}>
                    {transVariable[i] &&
                    <ReactSearchAutocomplete
                        autoFocus 
                        placeholder = "Search" 
                        styling = {{height: "28px", fontSize: "14px", fontFamily: "Roboto,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol"}}
                        items={items}
                        onSelect={(item) => handleOnSelect(item, i)}
                        formatResult={formatResult}
                        showIcon = {true}
                        fuseOptions = {{threshold: 0.3}}
                        />
                    }
                    </div>
                    <div 
                    onMouseDown = {handleMouseDown}
                    onMouseUp = {handleMouseUp}
                    onMouseLeave = {handleMouseUp}
                    className = "selectables"
                    >  
                    { TransData1 &&     
                    // New Sidebar - Performance Test
                    <div>
                        <SidebarNew 
                            items={TransData1} 
                            layout={layout} 
                            pageHeight={currPageHeight || pageHeight}
                            loadNextPage={loadNextPage}
                        />
                    </div>

                    }
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
            )
        })}
        {/*missing data on QS*/}
    </Accordion>
            </Accordion.Body>
            </Accordion.Item>

            </>
    }
        </Accordion>
      </div>
    </Card>
    </div>
       
    )
}

export default SidebarGroup

