import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchItem } from '../store/actions'
import Item from './Item'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const ItemList = (props) => {
console.log(props.data)
useEffect(() => {
    props.fetchItem()
}, [])

function becomeSeller(e){
    axiosWithAuth()
        .put(`/users/becomeSeller`)
        .then(res => {
            console.log('become seller',res)
            //const t = window.localStorage.getItem('token')
            //console.log(t)
            //window.localStorage.removeItem('token')
        })
        .catch(err => {
            console.log('promote error', err)
        })
}
    return (
        <div>
            
            <Link to="/addItem"><button>add Item</button></Link>
            <button onClick={becomeSeller}>become seller</button>
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