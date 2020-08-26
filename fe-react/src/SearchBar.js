import React from 'react'
import styled from 'styled-components'
import './App.scss'

const SearchBar = () => {

    
    return (
        <div class="container">
  <input type="text" placeholder="Search..." />
  <div class="search"></div>
  
</div>
    )
}

export default SearchBar

const Input = styled.input`
width: 300px;
height: 80px;
`