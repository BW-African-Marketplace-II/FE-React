import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { deleteItem } from '../store/actions'
import { useHistory } from 'react-router-dom'

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
    const history = useHistory()
    const [modalIsOpen, setIsOpen] = React.useState(false)
    var subtitle

    const openModal = () => {
        setIsOpen(true)
    }

    const afterOpenModal = () => {
        
    }

    const closeModal = () => {
        setIsOpen(false)
    }
return (
    <div>
        <ItemContainer onClick ={openModal}>
            <img src="data:image/png;base64,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"/>
            
                <PriceAndName>
                <h3>{props.name}</h3>
            <h2>{props.price}$</h2>
            
            </PriceAndName>
            
            <TextInfo>
                
            <h2>click for more info</h2>
           
            
            
            </TextInfo>
    </ItemContainer>
    

    <Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="example model"
    >
        <StyledModal>
         
         <img src="data:image/png;base64,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"/>
         <h2>{props.name}</h2>
        <h2>{props.price}$</h2>
         
        <p>description: {props.description}</p>
         <Icons>
             <img onClick={() => history.push("/cart") } src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAtS2CaZ1gwZ4DLopHn9hjxlDiuFrquy7E5g&usqp=CAU" />
         <img src="data:image/png;base64,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" />

          <img onClick={() => deleteItem(props.item)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8AAAClpaWpqan5+fnv7++tra2YmJhHR0c3Nzdra2u6urqRkZHo6OjIyMiVlZVxcXFNTU2EhIQZGRmKiooQEBAWFhbPz8/Hx8fc3Nyenp5EREQfHx/t7e309PSiRJYcAAADT0lEQVR4nO2d2XLaQBAAEUICc2NOH+H/PzOYoMFJkdLOMqsdcPfraofukgphQ5V6PQAAAIB4BvVyXYSxXtaD3Lpqqk1gXcOmyq2sYxJ6+q5sJ7mlNUzVfV9Mc2uHExf4QImTyMCieJALtdpFF+4e4+1G+y76nU1u+RAGdwQWxSPcF+ur7nAWtGM2vG6pE9tZsBTbffCevexZJjSzQu71Q8UmOYvrZF52yOkIu0T/MJNdybzsiHOl0BMUWu7KA4WWu/JAoeWuPDxg4b7f8P7eb+X6wbtuPzhu1zeN8I++/+e4KjyzOt5dOMrd0MLo3sBD7oJW5ncWDttfIjOaP9J+ZuHzX6XP/07zA+4Wlzt+OW5mjsv2e/JCcbNX7fpXw+KO31A2o0vDoa40+s3ovvloJxoUdgSFPkc70aCwIyj0OdqJBoUdQaHP0U40KOwICn2OdqJBYUdQ6HO0E43w0YPX01GvN39kGLcUp6EmePTg5XzYyw3ZuKU4DT3Bo5sfed/40XbcUpyGnuDRzXE3vpGPW4rT0EOhQCGFRhp6KBQopNBIQw+FAoUUGmnooVCgkEIjDT0UChRSaKShh0KBQgqNNPRQKFBIoZGGHgoFCik00tBDoUAhhUYaeigUKKTQSEMPhQKFFBpp6KFQoJBCIw09FAoUUmikoYdCgUIKjTT0UChQSKGRhh4KBQopNNLQQ6FAIYVGGnooFCik0EhDD4UChRQaaeihUKCQQiMNPRQKFFJopKGHQoFCCo009FAoUEihkYYeCgUKKTTS0EOhQCGFRhp6KBQopNBIQw+FAoUUGmnooVCgkEIjDT0UCs9f2Dxu/sZj3eOW4jT0BI/eX4678djzuKU4DT3ho+vzYbXdUpyGGsXoqpyWleVSnIaWhKOdaFDYERT6HO1Eg8KOoNDnaCcaFHYEhT5HO9GgsCMo9DnaicbzF5bN6KX5aA3LRqM0Hz1pRhetTwdPyEAsJuazZzJ7bD47nLFYzOyH72T4am4/PYj5ShzWCcYPC08MExRWuaP+ov0/qxF4OokpTuGJj9xdwkeawF61zV12YZvkGj0nfuZuO/P5K1Vgr3cct79+csbHdIEnDqN2haSMDkn7vnhb5IscLd6S9wEAAMAj8htdcjRX4CcUYgAAAABJRU5ErkJggg=="/>
          <img onClick={closeModal} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAASFBMVEX///8AAAD8/Pz39/dISEg/Pz9FRUX6+vo5OTlsbGxlZWViYmJLS0teXl5aWlr09PQsLCxubm5QUFAjIyMzMzMpKSmHh4dVVVWkV1rAAAAEaUlEQVR4nO2d63qiMBRFi7aFXtWK9v3fdMgwDCCXA5vkhCR7/W8Prm+fJCgkT0+ExMDplG51nNO1zP1Vz8trkN5O5ywrDr6qH4osOwfozVjz581YC9Hb8Zb9pfDSp3lRV78dfVTHaaz5yduhaKqH5a215iNvedFWD8lb11qWvSh7y1+61cPxdjxnPXT79FD0q58D8fZoTdfbo7VQvB3Lx+uu+lTN2+FlWL0MwNswa5rexqyFkLdxa1rexq3t39uUNZ3xbTiuheGtv/LQzttU1gx7XoecJrOm4W3O2q7vT+9z1115c1t91lqW3d1W38JF8OYwb/NZy7KLu9LbefOWN8Ham7vKNpDy5qpuyFkzSHlz0qdSh+48awYfeQs9awb1eSHo2aBF6NNXy94Or/P1AujQGt0+jSNrBsW8RZM1w7vgzV4lwdq7vUoaaK17w1959FHp06g6tEbyZqNGfNYU8hZh1gyu8xanNdfzQmyzQYu0DtnQp1KHBrby6ONu/RazNXfe4rYmenuG+vTwHLk1N/NprHNoF8Hb+rxJWYvCmtyna/9f/B1aY3deiH02aPmwmDchax+uPoMP7HlLyZq98S2Vca1B8Pa57L98JmbNjrf0rNnwlqI1cV4QvQnWIpsNWrbNp2nNoV2+NuRNyNqX1mfwAZ63dLNmQMe3VMe1BsHbz/hf/SRuDVuHpLny6LM+b8yaYe18mvIc2mWdN1prWOON1lqWe6O1LkvnBc4GfYS8/fMmWEssa4YleWPWhsh5Y9bG+BasCF6/fV+/LwRvtDbBBm8JWxPHt2kSHdcaQG+JWwP7NHlrUN5o7QnIW9KzQcvvOmu/vq93L6zKG7P2nxXeaK3DYm+01mOhN1p7YJE3WhuwwButjSCuQ7jyGEXS5vv69gnThsCxDYEzKQLXbQi8S0DgPSkCvwFB4PdtCPx2F4G/JSBAv1wlnzf+TorAX+UR+AwIAp84QuDzbQh8mhKBz+4i8ElxBL6XgMC3YBD4zhUC3/BD4PukCHx7GYHvyiNwZwYE7gOCwF1nELjHEQJ31ELg/m0I3C0QgXtTInAnVATuu4vAXZ4RuKc4AnewR+B5CQg8nQOBZ8Eg8OQhBJ5zhcBT1RB4hh8CT4xE4PmkCDwNF4FnLyPwpG8EniuP4G699khM6xCVDq2JqE8v85/EWofWCH16sVvNHYpZM0SSNylrlq1V3mLIm26H1oTvTVp5WM+aQcrb7vvUR9YMYedNa5U7JOS8qc8GLQHPC3dvWTMI3u5uq2/gdPaVNcN83s4nt9W3cLz5szbv7XZ0XX0Lx8m8Fc6tVd6Kyazt2tq0N/dZM0zlbe/WprzpWJvytn9rlbfSn7Vxb2UA1sbypjGuNQzHtxCyZnj0pmlt6C0Ua4/rkJdct3re69N9rzz6dL0VytYqb0WY1rredDu0pu3TsKy13vSzZmjyFpq15v7UR9YMdd72fB86hfHmy1rtLURrlbdr6aVDa/LyGqS1ypvX6/ZbnRBr/AGuCDrQm9KBkAAAAABJRU5ErkJggg==" />

          </Icons>
          <h5>location: {props.location}</h5>
          </StyledModal>
    </Modal>
    </div>
)
}




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
    width: 200px;
    margin-left: 25px;
    margin-right: 25px;
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
padding-left: 5px;
padding-right: 25px;
font-size: 1vw;
align-items: center
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
border-radius: 10px;
min-height: 300px;
font-size: .5vw;
display:flex;
flex-direction: column;
transition: all 500ms ease; 
position: relative;

img {
    max-width: 200px;
}

&:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    color: #ff7a59;
    border: #ff7a59 solid 1px;
    background:#fff;

}
`

const mapStateToProps = state => {
    return {
        data: state.data,
        error: state.error,
        updated: state.updated
    }
}

export default connect(mapStateToProps, { deleteItem })(Item)