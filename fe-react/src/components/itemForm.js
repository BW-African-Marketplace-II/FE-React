import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import styled from 'styled-components'
import ItemCard from './itemCard'


const MainDiv = styled.div`
    
`

const FormDiv = styled.div`
    margin: 0 auto;
    width: 500px;
    height: 500px;
    background: white;
    border-radius: 500px;
    border: 8px solid rgba(245,245,245, 0.5);
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
`

const Header = styled.h1`
    margin:0 0 50px 0;
    padding:10px;
    text-align:center;
    font-size:30px;
    color:darken(#e5e5e5, 50%);
    border-bottom:solid 1px #e5e5e5;
`

const SubHeader = styled.span`
    display:block;
    background: #F9A5A5;
    padding: 2px 5px;
    color: #666;
`

const FormInputs = styled.p`
    margin: 0 0 3em 0;
    position: relative;
`

const Inputs = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    margin:0;
`

const Submit = styled.button`
    background: $button;
    box-shadow: 0 3px 0 0
`


const formSchema = yup.object().shape({
    itemName: yup
        .string()
        .required("Item name is required"),
    description: yup
        .string()
        .required("Item description is required"),
    category: yup
        .string()
        .required("Item category is required")
})

// Form Function

function ItemForm() {

    const [itemList, setItemList] = useState([]);

    const [formState, setFormState] = useState({
        itemName: "",
        description: "",
        category: ""
    });

const [buttonDisabled, setButtonDisabled] = useState(true);

useEffect(() => {
    formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
    });
}, [formState]);

const [errorState, setErrorState] = useState({
        itemName: "",
        description: "",
        category: ""
});

const validate = e => {
    let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then(valid => {
          setErrorState({
              ...errorState,
              [e.target.name]: ""
          })
      })
      .catch(err => {
          setErrorState({
              ...errorState,
              [e.target.name]: err.errors[0]
          });
      });
};

// onChange function

const inputChange = e => {
    e.persist();
    validate(e);
    let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({...formState, [e.target.name]: value});
};

const formSubmit = e => {
    // e.preventDefault();
    axios
        .post("https://reqres.in/api/users", formState)
        .then(response => {
            const apiReturn = response.data
            console.log(response.data)
            setItemList([...itemList, apiReturn])
            setFormState(formState)
        })
        .catch(err => console.log(err));
};


// ITEM UPLOAD TEST

// const uploadedImage = React.useRef(null);
//   const imageUploader = React.useRef(null);

//   const handleImageUpload = e => {
//     const [file] = e.target.files;
//     if (file) {
//       const reader = new FileReader();
//       const { current } = uploadedImage;
//       current.file = file;
//       reader.onload = e => {
//         current.src = e.target.result;
//       };
//       reader.readAsDataURL(file);
//     }
//   };

// END 

return (
    <MainDiv>
    <form onSubmit={formSubmit}>
    <FormDiv>
    <Header>
            List Your Item
    </Header>
   
    {/* IMAGE UPLOAD TEST */}

    {/* <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
        <label htmlFor="image">
      <Inputs
        type="file"
        name="image"
        id="image"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        style={{
          height: "60px",
          width: "60px",
          border: "1px dashed black"
        }}
        onClick={() => imageUploader.current.click()}
      >
      </div>
      </label>
      Click to upload Image
    </div> */}
    
    {/* END TEST */}

        <FormInputs>
        <label htmlFor="itemName">
            Item Name
            <Inputs
                type="itemName"
                name="itemName"
                id="itemName"
                value={formState.itemName}
                onChange={inputChange}
                />
                {errorState.itemName.length > 0 ? (
                    <p className="error">{errorState.itemName}</p>
                ) : null}
        </label>
        </FormInputs>
        <FormInputs>
        <label htmlFor="description">
            Item Description
            <br></br>
            <textarea
                type="description"
                name="description"
                id="description"
                placeholder="Please provide an item description"
                value={formState.description}
                onChange={inputChange}
            />
            {errorState.description.length < 0 ? (
                    <p className="error">{errorState.description}</p>
                ) : null}
        </label>
        </FormInputs>
        <FormInputs>
        <label htmlFor="category">
            Item Category
            <Inputs
                type="category"
                name="category"
                id="category"
                value={formState.category}
                onChange={inputChange}
            />
            {errorState.category.length < 0 ? (
                    <p className="error">{errorState.category}</p>
                ) : null}
        </label>
        </FormInputs>
            <div className="button-div">
        <button disabled={buttonDisabled}>Submit</button>
        </div>
    </FormDiv>
    </form>
    <div className="item-card-div">
    <ItemCard items={itemList} />
    </div>
    </MainDiv>
);

};

export default ItemForm;
