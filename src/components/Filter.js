import React, { useState, useEffect } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import FilterItem from './FilterItem'
import Accordion from 'react-bootstrap/Accordion';
import { useList } from "@motor-js/engine"

const Filter = ({ dimension, label, pageHeight }) => {

  console.log('RENDER OF ',label)
  const [currPageHeight, setCurrPageHeight] = useState(pageHeight)

  const {
      listData, select, selections, clearSelections, layout, changePage
    } = useList({
       dimension,
        qPage: { qTop: 0, qLeft: 0, qWidth: 1, qHeight: pageHeight },
     })

     const TransData = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    useEffect(() => {
      listData && setCurrPageHeight(listData.length)
    },[listData])


  const transVariable = [TransData]

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

  return (
    <Accordion defaultActiveKey="0" flush>
    {TransData && transVariable.map((c,i) => {
        const items = transVariable[i]
        return(
        <Accordion.Item eventKey={i}>
            <Accordion.Header>{label}</Accordion.Header>
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
            { listData && 
            // New Sidebar - Performance Test
            <div>
                <FilterItem 
                    key={i}
                    items={TransData} 
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
  )

}

export default Filter