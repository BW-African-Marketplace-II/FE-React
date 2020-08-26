import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../store/actions'
import { useHistory } from 'react-router-dom'

const AddItem = (props) => {
    const { push } = useHistory()
    const [formState, setFormState] = useState({
        name: '',
        price:'',
        location: '',
        description: '',
    })

    const handleChanges = e => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addItem(formState)
        push('/protected')
    }
    return (
        <div>
            add
            <form onSubmit={handleSubmit}>
                <div>
            <label htmlFor="Name">Name</label>
                <input
                type="text"
                name="name"
                placeholder="enter name"
                onChange={handleChanges}
                value={formState.name}
                />
                </div>
                <div>
                <label htmlFor="price">price</label>
                <input
                type="text"
                name="price"
                placeholder="price"
                onChange={handleChanges}
                value={formState.price}
                />
                </div>
                <div>
                <label htmlFor="location">location</label>
                <input
                type="text"
                name="location"
                placeholder="location"
                onChange={handleChanges}
                value={formState.location}
                />
                </div>
                <div>
                <label htmlFor="description">description</label>
                <input
                type="text"
                name="description"
                placeholder="description"
                onChange={handleChanges}
                value={formState.description}
                />
                </div>
                <button type='submit' onClick={handleSubmit} >add smurf</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        addItem: state.addItem
    }
}
export default connect(mapStateToProps, { addItem })(AddItem)