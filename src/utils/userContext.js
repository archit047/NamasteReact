import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummmy Name",
    email: "dummy@gmail.com",
  },
});

UserContext.displayName="UserContext";

export default UserContext;
