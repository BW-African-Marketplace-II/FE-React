import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchItem } from '../store/actions'
const Test = (props) => {
    console.log(props.data)
    useEffect(() => {
        props.fetchItem()
    })
    return (
        <div>
            test
        </div>
    )
}

export default connect(null, {fetchItem})(Test)