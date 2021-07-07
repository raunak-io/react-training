import React, { useEffect, useState } from "react";


export const SearchBox = ({ placeHolder, handleChange ,handleClick, style, type }) => {
  return ( 
  
  <div>
  <input
      onChange={handleChange}
      placeholder={placeHolder}
      type={type}
      className={style}
      type={type}
      placeholder={placeHolder}
    />
    <button  onClick={handleClick}>{type}</button>
</div>
    )

//   console.log("cakes data", ...Cakes);


  //   ...Cakes

  //   const filterItem = (e) => {
  //     e.preventDefault();
  //     console.log("cakes input ", e.target.filt.value);
  //     // const item = e.target.newItem.value;
  //     // if (item) setList([...list, item]);
  //     // e.target.reset();

  //     console.log("list here", list);
  //     data = data.filter((el) => {
  //       //   console.log(
  //       //     "element",
  //       //     el.name.toLowerCase() == e.target.filt.value.toLowerCase(),
  //       //     el.name
  //       //   );
  //       return el.name
  //         .toLowerCase()
  //         .includes(e.target.filt.value.toString().toLowerCase());
  //     });

  //     console.log("searched data", data);
  //   };

  //   cakeid: 1623076149741;
  //   image: "https://res.cloudinary.com/ashudev/image/upload/v1623076144/x6svihz4ldsybxj5r3t1.jpg";
  //   name: "Chocolate Cake";
  //   price: 500;

//   return (
//     <div className="content">
//       <div className="container">
//         <section className="section">
//           <ul>
//             {data.map((item) => (
//               <li key={item.cakeid}>{JSON.stringify(item.name)}</li>
//             ))}
//           </ul>
//         </section>
//         <hr />
//         <section className="section">
//           <form className="form">
//             {/* onSubmit={(e) => filterItem(e)} */}
//             <input
//               type="text"
//               className="input"
//               name="filt"
//               id="filt"
//               onChange={handleChange}
//               placeholder="Something that needs to be done..."
//             />
//             <button className="button is-info" onClick={handleClick}>
//               Search
//             </button>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
};
