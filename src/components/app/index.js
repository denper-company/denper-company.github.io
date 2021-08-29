import usePageViews from "hooks/page-views";
import Main from "components/main";

export default function App() {
  usePageViews();
  return <Main />;
}
