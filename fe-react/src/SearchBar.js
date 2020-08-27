import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import './App.scss'
import { connect } from 'react-redux'
import Item from './components/Item'

const SearchBar = (props) => {
const [search, setSearch] = useState('')
const [filteredItem, setFilteredItem] = useState([])



useEffect(() => {
setFilteredItem(
    props.data.filter( item => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    })
)
}, [search, props.data])
    
    return (
        <div class="container">
            
  <input
   type="text"
    placeholder="Search..." 
    onChange={ e => setSearch(e.target.value)}
    />
    {filteredItem.map((item, index) => (
        <Item key={index} {...item} />
    ))}
  
  <div class="search"></div>
  
</div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.ItemListReducer.data
    }
}

export default connect(mapStateToProps, {})(SearchBar)

const Input = styled.input`
width: 300px;
height: 80px;
`