import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchItemId, editItem } from '../store/actions'

const initialItem = {
    name: '',
    price:'',
    location: '',
    description: '',
}

const UpdateItemForm = (props) => {
    const [item, setItem] = useState(initialItem)
    const { id } = useParams()
    const { push } = useHistory()

    console.log(id)

    const changeHandler = e => {
        e.persist()
        setItem({...item, [e.target.name]: e.target.value})
    }

    const formSubmit = e => {
        e.preventDefault()
        console.log("form submitted")
        
      props.editItem(item, id)
            push(`/protected`)
    
        
        }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <div>
                name:
                <input
                type="text"
                name="name"
                onChange={changeHandler}
                placeholder="name"
                value={item.name}
                />
                </div>

                <div>
                price:
                <input
                type="text"
                name="price"
                onChange={changeHandler}
                placeholder="price"
                value={item.price}
                />
                </div>

                <div>
                location:
                <input
                type="text"
                name="location"
                onChange={changeHandler}
                placeholder="location"
                value={item.location}
                />
                </div>

                <div>
                description:
                <input
                type="text"
                name="description"
                onChange={changeHandler}
                placeholder="description"
                value={item.description}
                />
                </div>
                <button onClick={formSubmit}>update</button>
            </form>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.ItemListReducer.data,
        updated: state.ItemListReducer.updated,
    }
}

export default connect(mapStateToProps, {fetchItemId, editItem })(UpdateItemForm)