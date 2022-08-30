import { useAppContext } from "../store/Store";

import Layout from "../components/Layout";
import Books from "../components/Books";

export default function Index() {
  const store = useAppContext();
  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  }

  return (
    <Layout>
      <div style={booksContainer}>{store.items.map((e) => (
        <Books key={e.id} item={e}/>
      ))}</div>
      
    </Layout>
  );
}
