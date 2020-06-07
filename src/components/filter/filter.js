import React, {useState} from "react";
import {SetFilterAC} from "../../state/app-reducer";
import classes from './filter.module.css'
const Filter = ({SetFilterAC}) => {
    const [toggleSearch, changeToggleSearch] = useState(null)

    const checkedState = (x) => {
        changeToggleSearch(x)
        SetFilterAC(x)
    }

    return <div className={classes.filter}>
        <h1>количество пересадок</h1>
        <div>
            <input checked={toggleSearch === 'SHOW_ALL'} type={"checkbox"} onClick={() => {
                changeToggleSearch('SHOW_ALL')
            }} onChange={() => {
                SetFilterAC('SHOW_ALL')
            }}></input>
            <span>SHOW_ALL</span>
        </div>
        <div>
            <input checked={toggleSearch === 'SHOW_NO_TRANSFER'} type={"checkbox"} onClick={() => {
                changeToggleSearch('SHOW_NO_TRANSFER')
            }} onChange={() => {
                SetFilterAC('SHOW_NO_TRANSFER')
            }}></input>
            <span>SHOW_NO_TRANSFER </span>
        </div>
        <div>
            <input checked={toggleSearch === 'SHOW_ONE_TRANSFER'} type={"checkbox"} onClick={() => {
                changeToggleSearch('SHOW_ONE_TRANSFER')
            }} onChange={() => {
                SetFilterAC('SHOW_ONE_TRANSFER')
            }}></input>
            <span>SHOW_ONE_TRANSFER </span>
        </div>
        <div>
            <input checked={toggleSearch === 'SHOW_TWO_TRANSFERS'} type={"checkbox"} onClick={() => {
                changeToggleSearch('SHOW_TWO_TRANSFERS')
            }} onChange={() => {
                SetFilterAC('SHOW_TWO_TRANSFERS')
            }}></input><span>SHOW_TWO_TRANSFERS </span>
        </div>
        <div>
            <input checked={toggleSearch === 'SHOW_THREE_TRANSFERS'} type={"checkbox"} onClick={() => {
                changeToggleSearch('SHOW_THREE_TRANSFERS')
            }} onChange={() => {
                SetFilterAC('SHOW_THREE_TRANSFERS')
            }}></input>
            <span>SHOW_THREE_TRANSFERS </span>
        </div>

    </div>
}

export default Filter