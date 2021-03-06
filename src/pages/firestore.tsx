import Layout from "../components/Layout";
import Main from "../components/Main";
import Header from "../components/Header";
import Task from "../components/Task";
import Title from "../components/Title";
import { GetServerSideProps } from "next";
import {  getData } from "../../firebase/firestore";
import { useState } from "react";
import Add from "../components/Add";
interface props {
  data: {
    id: string;
    title: string;
    state: boolean;
  }[];
}

const Firestore = ({ data }: props) => {
  const [list,changeList] = useState(data)
  return (
    <>
      <Layout>
        <Header />
        <Main>
          <div className="bg-white sm:rounded-lg shadow p-4">
            <Title title={"LIST"} />
            {list.map((data) => {
              return (
                <Task title={data.title} state={data.state} key={data.id} />
              );
            })}
            <Title title={"ADD"} />
            <Add />
          </div>
        </Main>
      </Layout>
    </>
  );
};

export default Firestore;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getData("todo");
  return {
    props: {
      data,
    },
  };
};
