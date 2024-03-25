import "../App.css";
import Link from "next/link";

function App() {
  return (
    <div>
      <Link href="/article">
        <button type="button">article</button>
      </Link>
    </div>
  );
}

export default App;
