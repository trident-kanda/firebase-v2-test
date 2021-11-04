import { collection, doc,setDoc, getDocs } from "@firebase/firestore";
import { db } from "./util";

//データを追加
interface addDataProps {
  dbName: string;
  data: object;
}


export const addData = async ({ dbName, data }: addDataProps) => {
  const docRef = doc(collection(db, dbName));
  try{
    await setDoc(docRef,data)
  }catch (e){
    console.error("err");
  }
  
};

export const getData = async ( dbName:string) => {
  const querySnapshot = await getDocs(collection(db, dbName));
  const array:any[] = []
  querySnapshot.forEach((doc) => {
    array.push({
      id:doc.id,
      title: doc.data().title,
      state: doc.data().state
    })
  });
  return array
};
