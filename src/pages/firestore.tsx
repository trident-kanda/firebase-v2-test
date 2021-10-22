import Layout from "../components/Layout";
import Main from "../components/Main";
import Header from "../components/Header";
import Task from "../components/Task";
import Title from "../components/Title";
import { GetServerSideProps } from "next";
import { addData, getData } from "../../firebase/firestore";
const Firestore = () => {
  return (
    <>
      <Layout>
        <Header />
        <Main>
          <div className="bg-white sm:rounded-lg shadow p-4">
            <Title title={"LIST"} />
            <Task title={"aaaa"} state={false} />
            <Task title={"aaaa"} state={false} />
            <Task title={"aaaa"} state={false} />
            <Title title={"ADD"} />
          </div>
        </Main>
      </Layout>
    </>
  );
};

export default Firestore;

export const getServerSideProps: GetServerSideProps = async () => {
  
    return{
      props:{

      }
    }
}
