// import React, { useState, useEffect } from 'react'
// import { connect } from 'react-redux'
// import { addItem } from '../store/actions'
// import { useHistory } from 'react-router-dom'
// import * as yup from 'yup';
// import styled from 'styled-components'


// const MainDiv = styled.div`
    
// `

// const FormDiv = styled.div`
//     margin: 0 auto;
//     width: 500px;
//     height: 500px;
//     background: white;
//     border-radius: 500px;
//     border: 8px solid rgba(245,245,245, 0.5);
//     -webkit-background-clip: padding-box;
//     background-clip: padding-box;
// `

// const Header = styled.h1`
//     text-align: center;
//     margin-top: 70px;
//     font-size: 16px;
// `

// const SubHeader = styled.span`
    
// `

// const FormInputs = styled.p`
    
// `

// const Inputs = styled.input`
    
// `

// const Submit = styled.button`
    
// `


// const AddItem = (props) => {
//     console.log(props)
//     const { push } = useHistory()
//     const [itemList, setItemList] = useState([]);

//     const [formState, setFormState] = useState({
//         name: "",
//         description: "",
//         location: "",
//         price: "",
//     });
//     // itemName

// const [buttonDisabled, setButtonDisabled] = useState(true);

// useEffect(() => {
//     formSchema.isValid(formState).then(valid => {
//         setButtonDisabled(!valid);
//     });
// }, [formState]);

// const [errorState, setErrorState] = useState({
//         name: "",
//         description: "",
//         location: "",
//         price: "",
// });

// const validate = e => {
//     let value =
//         e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     yup
//       .reach(formSchema, e.target.name)
//       .validate(value)
//       .then(valid => {
//           setErrorState({
//               ...errorState,
//               [e.target.name]: ""
//           })
//       })
//       .catch(err => {
//           setErrorState({
//               ...errorState,
//               [e.target.name]: err.errors[0]
//           });
//       });
// };

// // onChange function

// const inputChange = e => {
//     e.persist();
//     validate(e);
//     let value =
//         e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     setFormState({...formState, [e.target.name]: value});
// };

// const formSubmit = e => {
//     e.preventDefault();
//     props.addItem(formState)
//     push('/protected')
//     // axios
//     //     .post("https://reqres.in/api/users", formState)
//     //     .then(response => {
//     //         const apiReturn = response.data
//     //         console.log(response.data)
//     //         setItemList([...itemList, apiReturn])
//     //         setFormState(formState)
//     //     })
//     //     .catch(err => console.log(err));
// };
//     return (
//         <MainDiv>
//     <form onSubmit={formSubmit}>
//     <FormDiv>
//     <Header>
//             List Your Item
//     </Header>
   
//         <FormInputs>
//         <label htmlFor="name">
//             Item Name
//             <Inputs
//                 type="name"
//                 name="name"
//                 id="name"
//                 value={formState.name}
//                 onChange={inputChange}
//                 />
//                 {errorState.name.length > 0 ? (
//                     <p className="error">{errorState.name}</p>
//                 ) : null}
//         </label>
//         </FormInputs>
//         <FormInputs>
//         <label htmlFor="description">
//             Item Description
//             <br></br>
//             <textarea
//                 type="description"
//                 name="description"
//                 id="description"
//                 placeholder="Please provide an item description"
//                 value={formState.description}
//                 onChange={inputChange}
//             />
//             {errorState.description.length < 0 ? (
//                     <p className="error">{errorState.description}</p>
//                 ) : null}
//         </label>
//         </FormInputs>
//         <FormInputs>
//         <label htmlFor="location">
//             Item location
//             <Inputs
//                 type="location"
//                 name="location"
//                 id="location"
//                 value={formState.location}
//                 onChange={inputChange}
//             />
//             {errorState.location.length < 0 ? (
//                     <p className="error">{errorState.location}</p>
//                 ) : null}
//         </label>
//         </FormInputs>
//         <FormInputs>
//         <label htmlFor="price">
//             Item price
//             <Inputs
//                 type="price"
//                 name="price"
//                 id="price"
//                 value={formState.price}
//                 onChange={inputChange}
//             />
//             {errorState.price.length < 0 ? (
//                     <p className="error">{errorState.price}</p>
//                 ) : null}
//         </label>
//         </FormInputs>
//             <div className="button-div">
//         <button disabled={buttonDisabled}>Submit</button>
//         </div>
//     </FormDiv>
//     </form>
//     <div className="item-card-div">
//     <ItemCard items={itemList} />
//     </div>
//     </MainDiv>
        
//     )
// }

// const mapStateToProps = state => {
//     return {
//         addItem: state.addItem
//     }
// }
// export default connect(mapStateToProps, { addItem })(AddItem)