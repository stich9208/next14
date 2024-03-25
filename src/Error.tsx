import { FallbackProps } from "react-error-boundary";

const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      에러에러
      {error.message}
      <button onClick={() => resetErrorBoundary()}>새로고침</button>
    </div>
  );
};

export default Error;
