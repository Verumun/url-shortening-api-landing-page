import "./Result.scss";
import React from "react";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Result = () => {
  const [shortenLink, setShortenLink] = useState("https://rel.ink./4lyk");
  const [copied, setCopied] = useState(false)

  const handleCopyClick = () => {
    // Perform the copy operation here if needed

    // Update the state to show "Copied!" text
    setCopied(true);

    // Reset the "Copied!" text after a certain time (e.g., 2 seconds)
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="result-wrapper">
      <div id="inputed-link" className="inputed-link">
        https://www.frontendmentor.io
      </div>
      <hr />
      <div className="flex">
        <div id="shortened-link" className="shortened-link">
          {shortenLink}
        </div>

        <CopyToClipboard 
          text={shortenLink}
          onCopy={() => setCopied(true)}
        >
          <button className={copied ? "copied" : ""} onClick={handleCopyClick}>
          {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Result;
