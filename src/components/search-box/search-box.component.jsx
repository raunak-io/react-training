import React, { useEffect, useState } from "react";
import Cakes from "../../cakesdata";
import CardsList from "../card-list/card-list.component";
import queryString from "query-string";
import axios from "axios";
import Card from "./../card/card.component";

export const SearchBox = (props) => {
  let [cakes, cakesList] = useState([]);
  let qString = queryString.parse(props.location.search);

  console.log("query is", qString);

  useEffect(() => {
    let apiurl =
      process.env.REACT_APP_BASE_API_URL + `searchcakes?q=${qString.q}`;

    axios({ url: apiurl, method: "get" })
      .then((res) => {
        console.log("search data from api", res.data.data);

        cakesList(res.data.data);
      })
      .catch((err) => {
        console.log("error in search", err);
      });
  }, [qString.q]);

  // const [list, setList] = useState([...Cakes]);
  // // const [open, setFilterState] = useState(searchText ? true : false);

  // let data = [...list];
  // console.log("dtaa here", data);
  // console.log("search text tacker", searchText, typeof searchText);
  // // console.log("open state", open);
  // if (searchText) {
  //   data = data.filter((el) => {
  //     return el.name
  //       .toLowerCase()
  //       .includes(searchText.toString().toLowerCase());
  //   });

  //   // setFilterState(true);
  //   // setList(data);
  // } else {
  //   data = list;
  // }

  // if (open) {
  //   setList(data);
  // }

  // if (searchText !== "") {
  //
  // }

  return (
    <div className="card-list">
      {
        cakes.map((el) => {
          // JSON.stringify(el)
          return <Card data={el} key={el.cakeid} />;
        })
        /* <CardsList data={cakes}></CardsList> */
      }
    </div>
  );

  /* <input */
  //   // onChange={handleChange}
  //   placeholder={placeHolder}
  //   type={type}
  //   className={style}
  //   type={type}
  //   placeholder={placeHolder}
  // />
  /* <button  onClick={handleClick}>{type}</button> */
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
