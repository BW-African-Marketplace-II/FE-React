import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchItem } from '../store/actions'
import Item from './Item'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ItemList = (props) => {
console.log(props.data)
useEffect(() => {
    props.fetchItem()
}, [])
    return (
        <div>
            
            <Link to="/addItem"><button>add Item</button></Link>
            items
            <Items>
            {props.data.map(item => 
                <Item item={item} name={item.name} price={item.price} location={item.location} description={item.description} />
            )}
            </Items>
        </div>
    )
}

const Items = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
margin-right: 10%;
margin-left: 10%;
`

const mapStateToProps = (state) => {
    return {
        data: state.ItemListReducer.data,
        isFetching: state.ItemListReducer.isFetching,
        error: state.ItemListReducer.error,
        updated: state.ItemListReducer.updated
    }
}

export default connect(mapStateToProps, { fetchItem })(ItemList)