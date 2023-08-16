// import React, { useState } from 'react'
// import './Form.scss'
// // import backgroundImage from '../../../images/bg-boost-desktop.svg'
// import Result from './Result'

// const Form =()=> {
//   const [inputValue, setInputValue] = useState("")
//   return (
//     <div>
//         <div className="form-wrapper">
//             <form action="">
//                 <div className="input-control">
//                     <input setInputValue ={setInputValue} type="text" placeholder='Shorten a link here..' />
//                     <div className="error"></div>
//                 </div>
//                 <button className='shorten'>Shorten it!</button>
//             </form>
            
//         </div>

//         <Result inputValue ={inputValue}/>
//     </div>
//   )
// }

// export default Form;

// import React, { useState } from 'react';
// import './Form.scss';
// import Result from './Result';

// const Form = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [shortenLink, setShortenLink] = useState("");
//   const [error, setError] = useState("");

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // Basic URL validation
//     const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
//     if (!urlRegex.test(inputValue)) {
//       setError("Invalid URL");
//       return;
//     }

//     try {
//       const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
//       const data = await response.json();
//       if (data.ok) {
//         setShortenLink(data.result.short_link);
//         setError("");
//       } else {
//         console.error("Error shortening link");
//         setError("Error shortening link");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("Error occurred");
//     }
//   };

//   return (
//     <div>
//       <div className="form-wrapper">
//         <form onSubmit={handleFormSubmit}>
//           <div className="input-control">
//             <input
//               type="text"
//               placeholder='Shorten a link here..'
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//             />
//             <div className="error">{error}</div>
//           </div>
//           <button type="submit" className='shorten'>Shorten it!</button>
//         </form>
//       </div>

//       <Result inputValue={inputValue} shortenLink={shortenLink} />
//     </div>
//   );
// }

// export default Form;

import React, { useState } from 'react';
import './Form.scss';
import Result from './Result';

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [originalInputValue, setOriginalInputValue] = useState("");
  const [shortenLink, setShortenLink] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = async (e) => {
    // Prevents default submission
    e.preventDefault();

    // Basic URL validation
    const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    if (!urlRegex.test(inputValue)) {
      setError("Please add a link");
      return;
    }

    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      const data = await response.json();
      if (data.ok) {
        setShortenLink(data.result.short_link);
        setOriginalInputValue(inputValue); // Store original input value
        setInputValue(""); // Clear the input field
        setError("");
      } else {
        console.error("Error shortening link");
        setError("Error shortening link");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Error occurred");
    }
  };

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={handleFormSubmit}>
          <div className="input-control">
            <input
              type="text"
              placeholder='Shorten a link here..'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="error">{error}</div>
          </div>
          <button type="submit" className='shorten'>Shorten it!</button>
        </form>
      </div>

      {shortenLink && <Result inputValue={originalInputValue} shortenLink={shortenLink} />}
    </div>
  );
}

export default Form;
