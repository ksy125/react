import { useMediaQuery } from "react-responsive";
import SecondPC from "./SecondPC";
import SecondTablet from "./SecondTablet";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div>
      {isDesktopOrLaptop && <SecondPC />}
      {isTablet && <SecondTablet />}
    </div>
  );
}

export default App;
