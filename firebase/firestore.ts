import { collection, addDoc, getDocs } from "@firebase/firestore";
import { db } from "./util";

//データを追加
interface addDataProps {
  dbName: string;
  data: object;
}


export const addData = async ({ dbName, data }: addDataProps) => {
  try {
    const docRef = await addDoc(collection(db, dbName), data);
  } catch (e) {
    console.error("err");
  }
};

export const getData = async ( dbName:string) => {
  const querySnapshot = await getDocs(collection(db, dbName));
  const array:any[] = []
  querySnapshot.forEach((doc) => {
    array.push(doc.data())
  });
  return array
};
