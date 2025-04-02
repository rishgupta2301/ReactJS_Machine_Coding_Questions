const Profile = ({ data, setData, err }) => {
    const handleChange = (e) => {
      setData({
        ...data,
        [e.target.id]: e.target.value,
      });
      // console.log(data);
    };
  
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <span style={{ color: "red", fontSize: "10px" }}>{err.name}</span>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            id="age"
            value={data.age}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <span style={{ color: "red", fontSize: "10px" }}>{err.age}</span>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <span style={{ color: "red", fontSize: "10px" }}>{err.email}</span>
      </div>
    );
  };
  
  export default Profile;
  