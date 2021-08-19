import { useState, useEffect } from 'react';
import { useList, } from "@motor-js/engine"
import {
  Card,
  Button,
} from '@material-ui/core';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
//import './Sidebar.css'
//import './scss/custom.scss'
import Dimension from './Dimension'
//import SuspenseLoader from 'src/components/SuspenseLoader';

function Sidebar () {
    
    //some dimensions don't exactly match the QS, but no problem so far because only used in dictionaries
    const location_dimensions = [['Account'], ['Area Name'], ['State'], ['Store']]
    const product_dimensions = [['Brand'], ['Department'], ['Class'], ['Subclass'], ['Style ID'], ['Style Description'], ['VPN'], ['Color'], ['Supplier Color Name'], ['Delivery'], ['Fashion Year Season']]
    const location_toadd = [['District'], ['City']]
    const product_toadd = [['Supplier'], ['Supplier Site ID'], ['Brand ID'], ['Gender'], ['Division'], ['Group'], ['UPC']]

    //Dictionaries used to track checked off location and product dimensions
    const [checked_location, setLocation] = useState({})
    const [checked_product, setProduct] = useState({})

    //Function to create dimension dictionaries
    function dimension_dict(dimensions, checked){
        for (let i = 0; i < dimensions.length; i++) {
        if (checked[dimensions[i]] == undefined) {
            checked[dimensions[i]] = [];
            }
        }
    }

    dimension_dict(location_dimensions, checked_location)
    dimension_dict(product_dimensions, checked_product)

    //Define listData, select function, clearSelections function and selections for each dimension. Cannot do it through a single function because of react hook rules.
    
    //Account
    var dimension = ['Account'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const chain_names_select = select
    const chain_names_selections = selections
    const clear_chain_names = clearSelections
    const chain_names = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    //Area Name
    var dimension = ['Area Name'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const area_names_select = select
    const area_names_selections = selections
    const clear_area_names = clearSelections
    const area_names = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    //State
    var dimension = ['State'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const state_select = select
    const state_selections = selections
    const clear_state = clearSelections
    const state = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))


    //Store
    var dimension = ['Store'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const store_select = select
    const store_selections = selections
    const clear_store = clearSelections
    const store = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))


    //Brand
    var dimension = ['Brand'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const brand_select = select
    const brand_selections = selections
    const clear_brand = clearSelections
    const brand = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))
    
    //Dept Desc
    var dimension = ['Dept Desc'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const department_select = select
    const department_selections = selections
    const clear_department = clearSelections
    const department = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    //Class Desc
    var dimension = ['Class Desc'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const class_desc_select = select
    const class_desc_selections = selections
    const clear_class_desc = clearSelections
    const class_desc = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    //Subclass Desc
    var dimension = ['Subclass Desc'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const subclass_select = select
    const subclass_selections = selections
    const clear_subclass = clearSelections
    const subclass = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    //Style ID
    var dimension = ['Style ID'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const style_id_select = select
    const style_id_selections = selections
    const clear_style_id = clearSelections
    const style_id = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    //Style
    var dimension = ['Style'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const style_select = select
    const style_selections = selections
    const clear_style = clearSelections
    const style = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    //VPN
    var dimension = ['VPN'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const vpn_select = select
    const vpn_selections = selections
    const clear_vpn = clearSelections
    const vpn = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    //Color
    var dimension = ['Color'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    
    const color_select = select
    const color_selections = selections
    const clear_color = clearSelections
    const color = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    //Supplier Color Name
    var dimension = ['Supplier Color Name'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const supplier_color_name_select = select
    const supplier_color_name_selections = selections
    const clear_supplier_color_name = clearSelections
    const supplier_color_name = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    //Delivery
    var dimension = ['Delivery'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const delivery_select = select
    const delivery_selections = selections
    const clear_delivery = clearSelections
    const delivery = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    //Fashion Year Season
    var dimension = ['Fashion Year Season'];
    var {
        listData, select, selections, clearSelections
    } = useList({
        dimension,
    })
    const fashion_year_season_select = select
    const fashion_year_season_selections = selections
    const clear_fashion_year_season = clearSelections
    const fashion_year_season = listData && listData.map(c => ({'id': c.key, 'name': c.text, 'state': c.state}))

    //Define lists for select function, selection, clear selection and listdata for product and location attribute
    const select_location = [chain_names_select,  area_names_select,  state_select,  store_select]
    const selection_location =  [chain_names_selections,  area_names_selections,  state_selections,  store_selections]
    const clear_location =  [clear_chain_names, clear_area_names, clear_state, clear_store]
    const location_variable = [chain_names, area_names, state, store]

    const select_product = [brand_select,  department_select,  class_desc_select,  subclass_select,  style_id_select,  style_select,  vpn_select,  color_select,  supplier_color_name_select,  delivery_select,  fashion_year_season_select]
    const selection_product =  [brand_selections,  department_selections,  class_desc_selections,  subclass_selections,  style_id_selections,  style_selections,  vpn_selections,  color_selections,  supplier_color_name_selections,  delivery_selections,  fashion_year_season_selections]
    const clear_product =  [clear_brand, clear_department, clear_class_desc, clear_subclass, clear_style_id, clear_style, clear_vpn, clear_color, clear_supplier_color_name, clear_delivery, clear_fashion_year_season]
    const product_variable = [brand, department, class_desc, subclass, style_id, style, vpn, color, supplier_color_name, delivery, fashion_year_season]
    const [isLoading, setLoading] = useState(false)
    ///Functions to handle location and product checkbox toggles
    const handleLocation = (id, dimension, index) => {
        setLoading(true)
        const newChecked = checked_location
        const currentIndex = newChecked[dimension].indexOf(id)
        //check if the item is checked off, if not push it to the array
        if (currentIndex == -1){
            newChecked[dimension].push(id);
        } else {
            
            newChecked[dimension].splice(currentIndex, 1)
        }
        //make a selection on QS
        setLocation(newChecked)
      
        select_location[index]([id]).then(() => {
            setLoading(false)
        })
      };
    const handleProduct = (id, dimension, index) => {
        const newChecked = checked_product[dimension]
        const currentIndex = newChecked.indexOf(id)
        if (currentIndex === -1){
            newChecked.push(id);
        } else {
            newChecked.splice(currentIndex, 1)
        }
        select_product[index]([id])
    };      
    
    

    //Prevent text selection in drag select
    useEffect(() => {
        document.getElementById('accordion').addEventListener('selectstart', function(e){
        e.preventDefault()})
    })

   //Drag-select functions and mousedown state
    const [mouseDown, mouseChange] = useState(0)
    const checkSelect = (event, element) => {
        if (mouseDown == 1) {
            //select items if the mouse is pressed down
            
            document.getElementById(element).classList.add("toClick")
            
            
            //checked = true
            //event.target.classList.add("toClick")
        }
    }
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
 
    return(
    <Card>      
        <div>
        {/* {console.log(location_variable, product_variable)} */}
        <Accordion id = "accordion">
            {isLoading ?<div>Loading</div>
            :
            <>
            <Accordion.Item eventKey = "0">
            <Accordion.Header><span style = {{fontSize: "18px"}}>{'Location'}</span></Accordion.Header>
            <Accordion.Body>
                <Accordion defaultActiveKey="0" flush>
                {location_variable.map((c,i) => {
                    const items = location_variable[i]
                    return(
                        <Accordion.Item eventKey={i}>
                            <Accordion.Header>{location_dimensions[i]}</Accordion.Header>
                            <Accordion.Body>
                            <div style = {{paddingBottom: "10px"}}>
                            {location_variable[i] &&
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
                                {c && c.map(element => 
                                <Dimension 
                                //checked = {checked_location[i].includes(element.id)}
                                element = {element} 
                                attribute_dimension = {location_dimensions[i]} 
                                i = {i}
                                el_id = {i.toString()+element.id.toString()}
                                selection = {selection_location[i]}
                                handle = {handleLocation}
                                checkSelect = {checkSelect}
                                />
                                )}
                            </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
                {/*missing data on QS*/}
                
                {location_toadd.map((c,i) => {
                    return(
                        <Accordion.Item eventKey={i+100}>
                            <Accordion.Header>{c}</Accordion.Header>
                            <Accordion.Body>
                            
                                {'no data on QS'}  
                            

                            </Accordion.Body>
                        </Accordion.Item>    
                    )
                })}
                    </Accordion>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey = "1">
            <Accordion.Header><span style = {{fontSize: "18px"}}>{'Product'}</span></Accordion.Header>
            <Accordion.Body>
                <Accordion defaultActiveKey="0" flush>
                {product_variable.map((c,i) => {
                    const items = product_variable[i]
                    return(
                        <Accordion.Item eventKey={i}>
                            <Accordion.Header>{product_dimensions[i]}</Accordion.Header>
                            <Accordion.Body>
                                <div style = {{paddingBottom: "10px"}}>
                                    {product_variable[i] &&
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
                                className = "selectables">
                                    {c && c.map(element =>
                                   
                                    <Dimension 
                                    element = {element} 
                                    attribute_dimension = {product_dimensions[i]} 
                                    i = {i}
                                    selection = {selection_product[i]}
                                    handle = {handleProduct}
                                    checkSelect = {checkSelect}
                                    />)}
                                    
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}

                {/*missing data on QS*/}
                
                {product_toadd.map((c,i) => {
                    return(
                        <Accordion.Item eventKey={i+100}>
                            <Accordion.Header>{c}</Accordion.Header>
                            <Accordion.Body>
                                  {'no data on QS'}  
                            </Accordion.Body>
                        </Accordion.Item>
                    
                    )
                })}
                </Accordion>
            </Accordion.Body>
            </Accordion.Item>
            </>
}
        </Accordion>
        </div>
    </Card>
       
    )
}

export default Sidebar