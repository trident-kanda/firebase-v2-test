import { collection, addDoc, getDocs } from "@firebase/firestore";
import { db } from "./util";

//データを追加
const addData = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Tanaka",
      last: "Taro",
      born: 1999,
    });
  } catch (e) {
    console.error("err");
  }
};

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};
