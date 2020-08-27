import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { deleteItem } from '../store/actions'
import { useHistory } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

const Item = (props) => {
    const {push} = useHistory()
    const [modalIsOpen, setIsOpen] = useState(false)
    const [formModalIsOpen, setFormIsOpen] = useState(false)
    var subtitle

    const openModal = () => {
        setIsOpen(true)
    }

    const openModalTwo = () => {
        setFormIsOpen(true)
    }

    const afterOpenModal = () => {
        
    }

    const closeModal = () => {
        setIsOpen(false)
    }
    const closeModalTwo = () => {
        setFormIsOpen(false)
    }

    const removeItem = () => {
        deleteItem(props.item) 
        
    }

    const refreshPage = () => {
        window.location.reload(false)
    }

    
    //     const picture = ["https://images.unsplash.com/photo-1575462096967-4844fd4796ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    // "https://images.unsplash.com/photo-1594489166073-2effaca079cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    // ]


    // const images = picture.map(pics => {
    //     return <img key={pics} src={`${pics}`} />
    // })

     const confirm = () => {
        return(
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    deleteItem(props.item);
                    // refreshPage()
                }
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          }))
        
}


return (
    <div>
        <ItemContainer onClick ={openModal}>
            <img src="https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
            
            <PriceAndName>
                <h3>{props.name}-</h3>
                <h2>{props.price}$</h2>
            </PriceAndName>
            <TextInfo> 
                <h4>click for more info</h4>
            </TextInfo>
        </ItemContainer>
    

        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="example model"
        backdrop= 'static'
        keyboard= "false"
        >
        <StyledModal>
            <img src="https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
            <h2>{props.name}</h2>
            <h2>{props.price}$</h2>
            <p>description: {props.description}</p>
         <Icons>
            <img onClick={() => push("/cart") } src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAtS2CaZ1gwZ4DLopHn9hjxlDiuFrquy7E5g&usqp=CAU" />
            <img onClick={() => push(`/updateItem/${props.item.id}`)} src="data:image/png;base64,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" />
            <img onClick={confirm} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8AAAClpaWpqan5+fnv7++tra2YmJhHR0c3Nzdra2u6urqRkZHo6OjIyMiVlZVxcXFNTU2EhIQZGRmKiooQEBAWFhbPz8/Hx8fc3Nyenp5EREQfHx/t7e309PSiRJYcAAADT0lEQVR4nO2d2XLaQBAAEUICc2NOH+H/PzOYoMFJkdLOMqsdcPfraofukgphQ5V6PQAAAIB4BvVyXYSxXtaD3Lpqqk1gXcOmyq2sYxJ6+q5sJ7mlNUzVfV9Mc2uHExf4QImTyMCieJALtdpFF+4e4+1G+y76nU1u+RAGdwQWxSPcF+ur7nAWtGM2vG6pE9tZsBTbffCevexZJjSzQu71Q8UmOYvrZF52yOkIu0T/MJNdybzsiHOl0BMUWu7KA4WWu/JAoeWuPDxg4b7f8P7eb+X6wbtuPzhu1zeN8I++/+e4KjyzOt5dOMrd0MLo3sBD7oJW5ncWDttfIjOaP9J+ZuHzX6XP/07zA+4Wlzt+OW5mjsv2e/JCcbNX7fpXw+KO31A2o0vDoa40+s3ovvloJxoUdgSFPkc70aCwIyj0OdqJBoUdQaHP0U40KOwICn2OdqJBYUdQ6HO0E43w0YPX01GvN39kGLcUp6EmePTg5XzYyw3ZuKU4DT3Bo5sfed/40XbcUpyGnuDRzXE3vpGPW4rT0EOhQCGFRhp6KBQopNBIQw+FAoUUGmnooVCgkEIjDT0UChRSaKShh0KBQgqNNPRQKFBIoZGGHgoFCik00tBDoUAhhUYaeigUKKTQSEMPhQKFFBpp6KFQoJBCIw09FAoUUmikoYdCgUIKjTT0UChQSKGRhh4KBQopNNLQQ6FAIYVGGnooFCik0EhDD4UChRQaaeihUKCQQiMNPRQKFFJopKGHQoFCCo009FAoUEihkYYeCgUKKTTS0EOhQCGFRhp6KBQopNBIQw+FAoUUGmnooVCgkEIjDT0UCs9f2Dxu/sZj3eOW4jT0BI/eX4678djzuKU4DT3ho+vzYbXdUpyGGsXoqpyWleVSnIaWhKOdaFDYERT6HO1Eg8KOoNDnaCcaFHYEhT5HO9GgsCMo9DnaicbzF5bN6KX5aA3LRqM0Hz1pRhetTwdPyEAsJuazZzJ7bD47nLFYzOyH72T4am4/PYj5ShzWCcYPC08MExRWuaP+ov0/qxF4OokpTuGJj9xdwkeawF61zV12YZvkGj0nfuZuO/P5K1Vgr3cct79+csbHdIEnDqN2haSMDkn7vnhb5IscLd6S9wEAAMAj8htdcjRX4CcUYgAAAABJRU5ErkJggg=="/>
            <img onClick={refreshPage} src="data:image/png;base64,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" />
          </Icons>
            <h5>location: {props.location}</h5>
          </StyledModal>
        </Modal>
    </div>
)
}

const mapStateToProps = state => {
    return {
        data: state.data,
        error: state.error,
        updated: state.updated
    }
}

export default connect(mapStateToProps, { deleteItem })(Item)


const StyledModal = styled.div`
color: black;
border-radius: 15px;
height: 400px;
width: 400px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

img {
    width: 100px;
    margin-left: 25px;
    margin-right: 25px;
    border-radius: 50%;
    margin-top: 30px;
 
}

p {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 15px;
}

`

const Icons = styled.div`
img {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 50px;
    transition: all 500ms ease; 
position: relative;

    &:hover {
        -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
    }
}
`

const PriceAndName = styled.div`
display: flex;
justify-content: space-between;
align-items: center
padding-left: 5px;
padding-right: 25px;
font-size: 1vw;
align-items: center;

h2 {
    color:white;
    font-size: 25px;
    margin-right: 15px;
    margin-left: 15px;
    border-bottom: 1px solid white;
}

h3 {
    color:white;
    font-size: 15px;
    margin-right: 15px;
    m
`

const TextInfo = styled.div`
display: flex;
justify-content:space-between;
flex-direction: column;

h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-top: 1px solid #342F2C;
}



`

const ItemContainer = styled.div`
border: 1px solid black;
background-color: #EA8547;
margin: 15px;
max-width: 200px;
justify-content: center;
align-items: center;
border-radius: 10px;
min-height: 300px;
min-width: 210px;
font-size: .5vw;
display:flex;
flex-direction: column;
transition: all 500ms ease; 
position: relative;

h4 {
    font-size: 20px;
}

img {
    max-width: 200px;
    margin: 5px;
    border: 2px solid #EA8547;
    border-radius: 10px;
}

&:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    color: #ff7a59;
    border: #ff7a59 solid 1px;
    background:#fff;

    h2 {
        color: black;
    }

}
`

