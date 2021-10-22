import Layout from "../components/Layout";
import Main from "../components/Main";
import Header from "../components/Header";
const Firestore = () => {
  return (
    <>
      <Layout>
        <Header />
        <Main>
          <div className="bg-white sm:rounded-lg shadow p-4"></div>
        </Main>
      </Layout>
    </>
  );
};

export default Firestore;
