import Alert from "./Alert";

export default function App() {
  return (
    <>
      <Alert variant="info">This is an informational message.</Alert>
      <Alert variant="success">Success! Your action was completed.</Alert>
      <Alert variant="error">Error! Something went wrong.</Alert>
      <Alert variant="warning">Warning! Check your input.</Alert>
    </>
  );
}
