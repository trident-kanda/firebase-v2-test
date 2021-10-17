import { collection, addDoc } from "@firebase/firestore";
import { db } from "./util";

//データを追加
const addData = async() => {
    try{
        const docRef = await addDoc(collection(db, "users"),{
            first:"Tanaka",
            last:"Taro",
            born: 1999
        });
    }catch(e) {
        console.error("err")
    }
}
