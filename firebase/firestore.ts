import { collection, addDoc, getDocs } from "@firebase/firestore";
import { db } from "./util";

//データを追加
interface addDataProps {
  dbName: string;
  data: object;
}

interface getDataProps {
  dbName: string;
}
const addData = async ({ dbName, data }: addDataProps) => {
  try {
    const docRef = await addDoc(collection(db, dbName), data);
  } catch (e) {
    console.error("err");
  }
};

const getData = async ({ dbName }: getDataProps) => {
  const querySnapshot = await getDocs(collection(db, dbName));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};
