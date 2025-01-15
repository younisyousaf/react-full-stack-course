import React from "react";
import CopyInput from "./components/CopyInput";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import TodoList from "./components/TodoList";
import ReactDOM from "react-dom";
import HooksExample from "./components/HooksExample";
import { DataContext } from "./Context";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./components/UserContext";

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null; // Do not render anything if the modal is closed.

//   // The element where the modal will be rendered.
//   const modalRoot = document.getElementById("modal-root");

//   return ReactDOM.createPortal(
//     <div style={styles.overlay}>
//       <div style={styles.modal}>
//         <button onClick={onClose} style={styles.closeButton}>
//           Close
//         </button>
//         {children}
//       </div>
//     </div>,
//     modalRoot
//   );
// };
const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      {/* <DataContext.Provider value={{ name: "John Doe" }}> */}
      {/* <Counter />
      	<TodoList />
      	<Profile />
      	<ShoppingList /> */}
      {/* <CopyInput /> */}
      {/* <HooksExample /> */}
      {/* <ComponentA />
        <ComponentB /> */}
      {/* </DataContext.Provider> */}
      <UserProvider>
        {" "}
        <UserProfile />
      </UserProvider>

      {/* <div>
        <h1>Welcome to createPortal Example</h1>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>I'm a Modal!</h2>
          <p>Rendered using React Portals</p>
        </Modal>
      </div> */}
    </>
  );
};
// const styles = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 1000,
//   },
//   modal: {
//     background: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     minWidth: "300px",
//     textAlign: "center",
//   },
//   closeButton: {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//   },
// };

export default App;
