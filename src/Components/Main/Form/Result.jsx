import "./Result.scss";

const Result = () => {
  return (
    <div className="result-wrapper">
      <div id="inputed-link" className="inputed-link">
        https://www.frontendmentor.io
      </div>
      <hr />
      <div className="flex">
        <div id="shortened-link" className="shortened-link">https://rel.ink./4lyk</div>
        <button className="">Copy</button>
      </div>
    </div>
  );
};

export default Result;
