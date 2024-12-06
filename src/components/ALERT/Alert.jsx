import "./Alert.css";

const Alert = ({ variant, children }) => {
  const classNames = ["alert", variant];

  return <p className={classNames.join(" ")}>{children}</p>;
};

export default Alert;
////////////////////////////////////////////

// src/components/Alert.jsx

// import clsx from "clsx";
// import "./Alert.css";

// const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx("alert", variant, {
//         "is-outlined": outlined,
//         "is-elevated": elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };

////////////////////////////////////////

// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   color: "white",
// };

// const getBgColor = (variant) => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

// export const Alert = ({ variant, children }) => {
//   return (
//     <p
//       style={{
//         ...alertStyles, // Статичні стилі
//         backgroundColor: getBgColor(variant), // Динамічний колір фону
//       }}
//     >
//       {/* Вміст повідомлення */}
//       {children}
//     </p>
//   );
// };

// ////////////////////////////////////////////////////////////////

// src/components/Alert.jsx

// import "./Alert.css";

// const Alert = ({ children }) => {
//   return <p className="alert">{children}</p>;
// };

// src/components/Alert.jsx
