// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { Card, Container} from 'react-bootstrap';
// const Products = () => {
   
//     const [loading,setLoading]=useState(false);
//     const [data,setData]=useState(null);

//     useEffect(()=>{
//         setLoading(true)
//         axios.get('https://fakestoreapi.com/products').then((res)=>{
//             console.log(res.data)
//             setData(res.data)
//         }).catch(e=>{console.log(e)})
//         .finally(()=>{setLoading(false)})
//     },[])

//   return (
//     <Container  >
//                 <h1>Fake Shop API response:</h1>
//                <div style={{display:'grid' , gridTemplateColumns:'auto auto auto',gap:'10px',
//     backgroundColor:"#ffff" , padding:'10px' , width:'100%' , sm:'2'}}> {loading && "Loading..."}
//                 {!!data && data.length > 0 ? data.map((product) => {
//                     return(
//                       <Card key={product.id} >
//                         <Card.Img src={product.image} alt={product.name} style={{width:'50%', height:'50%'}}/>
//                         <Card.Title>name: {product.title}</Card.Title>
//                         <p>id: {product.id}</p>
//                         <p>Price: {product.price}</p>
//                         <p>Category: {product.category}</p>
//                         <p>Rating:{product.rating.rate}</p>
//                       </Card>
//                     )   
//                   }):(<p>API did not provided any product, try again.</p>)
//                 }
//                 </div>
//     </Container>
//   )
// }

// export default Products