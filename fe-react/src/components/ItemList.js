import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchItem } from '../store/actions'
import Item from './Item'


const ItemList = (props) => {
console.log(props.data)
useEffect(() => {
    props.fetchItem()
}, [])
    return (
        <div>
            
            items
            {props.data.map(item => 
                <Item name={item.name}/>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.ItemListReducer.data,
        isFetching: state.ItemListReducer.isFetching,
        error: state.ItemListReducer.error,
        updated: state.ItemListReducer.updated
    }
}

export default connect(mapStateToProps, { fetchItem })(ItemList)