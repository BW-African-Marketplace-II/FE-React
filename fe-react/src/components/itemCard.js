import React from 'react';


const ItemCard = props => {

    // const uploadedImage = React.useRef(null);

    // const handleImageUpload = e => {
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

    if (props.items.length ===0) {
        return <div></div>
    }
    else {
        return (
            props.items.map(item => {
                return (
                    <div>
                    {/* <div className="item-image" key={item.id}>
                         <img
                            ref={uploadedImage}
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute"
                             }}
                        />
                    </div> */}
                    <div className="item-card" key={item.id}>
                        <h2>{item.name}</h2>
                    </div>
                    </div>
                )
            })
        )
    }
}



export default ItemCard;
