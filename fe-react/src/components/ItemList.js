import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchItem } from '../store/actions'
import Item from './Item'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import SearchBar from '../SearchBar'
import AwesomeSlider from 'react-awesome-slider';
import Loader from 'react-loader-spinner'
import {SlideShow} from './SlideShow'


const ItemList = (props) => {
    const history = useHistory()
    const [search, setSearch] = useState('')
    const [filteredItem, setFilteredItem] = useState([])


    console.log(props.data)
    useEffect(() => {
    props.fetchItem()
    }, [])




    useEffect(() => {
        setFilteredItem(
        props.data.filter( item => {
        return item.name.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, props.data])
        
 

    function becomeSeller(e){
        axiosWithAuth()
        .put(`/users/becomeSeller`)
        .then(res => {
            console.log('become seller',res)
        })
        .catch(err => {
            console.log('promote error', err)
        })}

           if (props.isFetching) {
        return <Loader
         type="Puff"
         color="#EA8547"
         height={100}
         width={100}
        />
    }

    // const removeItem = () => {
    //     return (
    //         <div>
    //             d
    //         </div>
    //     )
    // }


    return (
        
        <ItemListDiv>
           <Buttons>
            <p onClick={becomeSeller}>become seller</p>
            <h1>Shop Now!</h1>
            <p onClick={() => history.push("/addItem")}>add Item</p>
            </Buttons>
            {/* <SlideShow/> */}
            {/* <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" /> */}
                
            <Image>
                <div>
                {/* <h3 onClick={becomeSeller}>become seller</h3> */}
                {/* <h3 onClick={() => history.push("/addItem")}>add Item</h3> */}
                </div>
            </Image>
            <div class="container">
                <input
                type="text"
                placeholder="Search..." 
                onChange={ e => setSearch(e.target.value)}
                />
                <div class="search"></div>
                </div>
            
            
            <Items>
                {filteredItem.map((item, index) => 
                <Item key={index} {...item} item={item} name={item.name} price={item.price} location={item.location} description={item.description} />
                )}
            </Items>
        </ItemListDiv>
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

const Buttons = styled.div`
display: flex;
`

const Items = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
margin-right: 10%;
margin-left: 10%;
width: 70%;
`
const Image = styled.div`
height: 400px;
width: 100%;
border-radius: 5px;
background-image: url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;




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
border-bottom: 5px solid #EA8547;
margin-top: 35px;

// img {
//     object-fit: fill;
//     height: 300px;
//     width 900px;
    
//     object-fit: contain;
// }

h1 {
    font-size: 35px;
    color: white;
    border-bottom: 5px solid #EA8547;
    
}

p {
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

 p:nth-child(1){
    min-width: 225px;
    // background-color: #EA8547;
    height: 40px;
    border-radius: 15px;
    margin: 15px;
    background-color: none;
    color: #EA8547;
    border: 5px solid #EA8547;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 500ms ease; 
 position: relative;


 
    &:hover {
     -webkit-transform: scale(1.05);
     -ms-transform: scale(1.05);
     transform: scale(1.05);
     color: #342F2C;
     border: #ff7a59 solid 1px;
     background:#EA8547;
    }
}
`

