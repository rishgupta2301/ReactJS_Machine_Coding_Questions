const Settings = ({ data, setData }) => {
    const { theme } = data;
  
    const handleChange = (e) => {
      setData({ ...data, theme: e.target.name });
    };
  
    return (
      <div>
        <div>
          <label>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              type="radio"
              name="dark"
              checked={theme === "dark"}
            />
            Dark
          </label>
        </div>
        <div>
          <label>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              type="radio"
              name="light"
              checked={theme === "light"}
            />
            Light
          </label>
        </div>
      </div>
    );
  };
  
  export default Settings;
  