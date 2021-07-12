import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
import { useState, useEffect } from "react";
import axios from "axios";
const CardsList = (props) => {
  let [cakes, setCakes] = useState([]);

  // console.log("props.data tracker", props.data.length);

  useEffect(() => {
    console.log("props data tracker", props);

    if (props.data) {
      console.log("entering in if case", props.data);
      setCakes(props.data);
    } else {
      console.log("entering in else case");
      // let apiUrl = "https://apifromashu.herokuapp.com/api/";
      let apiUrl = process.env.REACT_APP_BASE_API_URL + "allcakes";
      console.log("api url here", apiUrl);
      axios({ url: apiUrl, method: "get" })
        .then((res) => {
          console.log("res m getting for cakes", res);
          setCakes(res.data.data);
        })
        .catch((err) => {
          console.log("error occured", err);
        });
    }
  }, []);

  // console.log("props data tracker", props.data.length);
  // if (props.data.length >0) {
  return (
    <div className="card-list">
      {/* {props.data[0].name} */}
      {cakes.map((el) => (
        <Card data={el} key={el.cakeid} />
      ))}
    </div>
  );
  // } else {
  //   return (
  //     <div>
  //       <h4>no results fount!</h4>
  //     </div>
  //   );
  // }
};

export default CardsList;
