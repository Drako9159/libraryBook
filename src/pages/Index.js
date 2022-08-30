import { useAppContext } from "../store/Store";

import Layout from "../components/Layout";
import Books from "../components/Books";

export default function Index() {
  const store = useAppContext();

  return (
    <Layout>
      
      {store.items.map((e) => (
        <Books key={e.key} item={e}/>
      ))}
    </Layout>
  );
}
