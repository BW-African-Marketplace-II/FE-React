import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchItem } from '../store/actions'
import Item from './Item'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import SearchBar from '../SearchBar'

const ItemList = (props) => {
    const history = useHistory()
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
        
        <ItemListDiv>
            <SearchBar/>
            <Image>
            
            
            
            {/* <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" /> */}
            <div>
            
            <h3 onClick={becomeSeller}>become seller</h3>
            <h3 onClick={() => history.push("/addItem")}>add Item</h3>
            </div>
            </Image>

            <h1>Shop Now!</h1>
            
            <Items>
            {props.data.map(item => 
                <Item item={item} name={item.name} price={item.price} location={item.location} description={item.description} />
            )}
            </Items>
            
        </ItemListDiv>
        
        
    )
}

const Items = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
margin-right: 10%;
margin-left: 10%;
`
const Image = styled.div`
height: 400px;
width: 900px;
background-image: url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;

h3 {
   min-width: 225px;
   height: 40px;
   border-radius: 15px;
   margin: 15px;
   background-color: none;
   color: white;
   border: 5px solid white;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all 500ms ease; 
position: relative;

   &:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    color: #ff7a59;
    border: #ff7a59 solid 1px;
    background:#fff;
   }
}

div{
    display: flex;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`

const ItemListDiv = styled.div`
display:flex;
flex-direction: column;
flex-wrap: no-wrap;
align-items: center;
justify-content: center;

img {
    width: 100%;
    
    object-fit: contain;
}

h1 {
    font-size: 35px;
    color: white;
    border-bottom: 5px solid #EA8547;
}
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