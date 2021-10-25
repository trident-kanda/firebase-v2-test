import { createRef, LegacyRef, useState } from "react";

const Add = () => {
  const [inputText, changeText] = useState("");
  const inputRef: LegacyRef<HTMLInputElement> | undefined = createRef();
  return (
    <div className="flex">
      <input
        className="w-5/6 mr-4 border-2 border-blue-300 rounded focus:outline-none px-4"
        ref={inputRef}
      />
      <button
        className="w-1/6 bg-blue-300 hover:bg-blue-500 text-white font-bold py-2  rounded"
        onClick={() => {
          console.log(inputRef.current?.value);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Add;
