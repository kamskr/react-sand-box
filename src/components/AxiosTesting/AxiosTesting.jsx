import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosTesting = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(
          "https://run.mocky.io/v3/c07db711-a844-4b1b-ba5f-72856a458ce3?mocky-delay=300ms"
        );
        setUsersData(data);
      } catch (err) {}
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h2>Axios Testings</h2>
      <div>
        {usersData.length > 0 ? (
          usersData.map(({ name, age }, index) => (
            <div key={index}>
              {name} is {age} years old
            </div>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </div>
  );
};

export default AxiosTesting;
