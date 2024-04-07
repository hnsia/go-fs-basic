import React, { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserInterfaceProps {
  backendName: string; // go
}

const UserInterface = ({ backendName }: UserInterfaceProps) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [updatedUser, setUpdatedUser] = useState({
    id: "",
    name: "",
    email: "",
  });

  // Define styles based on backend name
  const backgroundColors: { [key: string]: string } = {
    go: "bg-cyan-500",
  };

  const buttonColors: { [key: string]: string } = {
    go: "bg-cyan-700 hover:bg-blue-600",
  };

  const bgColor = backgroundColors[backendName] || "bg-gray-200";
  const btnColor = buttonColors[backendName] || "bg-gray-500 hover:bg-gray-600";

  // Fetch all users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/${backendName}/users`);
        setUsers(response.data.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [backendName, apiUrl]);

  return (
    <div
      className={`user-interface ${bgColor} ${backendName} w-full max-w-md p-4 my-4 rounded shadow`}
    >
      test
    </div>
  );
};

export default UserInterface;
