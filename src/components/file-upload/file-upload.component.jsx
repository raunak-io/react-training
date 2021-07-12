import axios from "axios";
import { useState } from "react";

const FilePicker = () => {
  let file = "";
  let file2 = "";
  let image = "";

  let [immg,setImg] = useState();

  let [img2 ,setSecImg] = useState();
  const handleChange = (event) => {
    console.log("tracking file", event);
    file = event.target.files[0];
    file2 = file;


    if (file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        console.log("file reading", e, e.target.result);
        //   setImg(e.target.result);
        setSecImg(e.target.value)

        // immg = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    console.log("file in file uploader", file);
  };

  const handleClick = () => {
    console.log("file here", file);

    let formData = new FormData();
    formData.append("file", file2);
    let head = JSON.parse(localStorage.getItem("user"));
    console.log("head tracker", head);

    let apiurl = "https://apifromashu.herokuapp.com/api/";

    console.log("data to send in file upload", {
      method: "POST",
      data: formData,
      url: apiurl + "upload",
      headers: { authtoken: head.token },
    });
    axios({
      method: "POST",
      data: formData,
      url: apiurl + "upload",
      headers: { authtoken: head.token },
    })
      .then((res) => {
        image = res.data.imageUrl;

        setImg(image);
        // console.log("success res", res.data.imageUrl, "and image", image);
        // return (
        //   <div>
        //     <img src={image.toString()} />{" "}
        //   </div>
        // );
      })
      .catch((err) => {
        console.log("failure", err);
      });
  };

  return (
    <div>
      <input type="file" name="Pick Image" onChange={handleChange} />
      <button type="file" onClick={handleClick}>
        Pick Fle
      </button>

      <img id="target" src={immg? immg:img2} style={{ width: "200px", height: "200px" }} />
    </div>
  );
};

// import { useFilePicker } from "use-file-picker";

// const FilePicker = () => {
//   const [filesContent, errors, openFileSelector, loading] = useFilePicker({
//     multiple: true,
//     // accept: '.ics,.pdf',
//     accept: [".json", ".pdf"],
//   });

//   if (errors.length > 0) return <p>Error!</p>;

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <button onClick={() => openFileSelector()}>Pick File</button>
//       <pre>{JSON.stringify(filesContent)}</pre>
//     </div>
//   );
// };

export default FilePicker;
