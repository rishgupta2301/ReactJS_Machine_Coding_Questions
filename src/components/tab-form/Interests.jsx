const Interests = ({ data, setData, err }) => {
    const { interests } = data;
  
    const handleChange = (e, name) => {
      setData({
        ...data,
        interests: e.target.checked
          ? [...interests, e.target.name]
          : data.interests.filter((name) => name !== e.target.name),
      });
    };
    // console.log(interests);
    return (
      <div style={{ textAlign: "left" }}>
        <div>
          <label>
            <input
              type="checkbox"
              name="travel"
              checked={interests.includes("travel")}
              onChange={handleChange}
            />
            Travel
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="code"
              checked={interests.includes("code")}
              onChange={handleChange}
            />
            Code
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="javascript"
              className=""
              checked={interests.includes("javascript")}
              onChange={handleChange}
            />
            Javascript
          </label>
        </div>
        <span style={{ color: "red", fontSize: "10px" }}>{err.interests}</span>
      </div>
    );
  };
  
  export default Interests;
  