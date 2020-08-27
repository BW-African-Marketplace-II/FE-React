import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchItemId, editItem } from '../store/actions'
import {
    MainDiv,
    FormDiv, 
    Header, 
    FormInputs, 
    Inputs, 
    TextInput, 
    Submit} from './itemForm'

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
        <MainDiv>
            <form onSubmit={formSubmit}>
                <FormDiv>
                    <Header>
                        Update Item
                    </Header>
                <FormInputs>
                <label htmlFor="name">
                <Inputs
                type="text"
                name="name"
                onChange={changeHandler}
                placeholder="name"
                value={item.name}
                />
                </label>
                </FormInputs>

                <FormInputs>
                <label htmlFor="price">
                <Inputs
                type="text"
                name="price"
                onChange={changeHandler}
                placeholder="price"
                value={item.price}
                />
                </label>
                </FormInputs>

                <FormInputs>
                <label htmlFor="location">
                <Inputs
                type="text"
                name="location"
                onChange={changeHandler}
                placeholder="location"
                value={item.location}
                />
                </label>
                </FormInputs>

                <FormInputs>
                <label htmlFor="description">
                <Inputs
                type="text"
                name="description"
                onChange={changeHandler}
                placeholder={"description"}
                value={item.description}
                />
                </label>
                </FormInputs>
                <Submit onClick={formSubmit}>update</Submit>
                </FormDiv>
            </form>

        </MainDiv>
    )
}

const mapStateToProps = state => {
    return {
        data: state.ItemListReducer.data,
        updated: state.ItemListReducer.updated,
    }
}

export default connect(mapStateToProps, {fetchItemId, editItem })(UpdateItemForm)


