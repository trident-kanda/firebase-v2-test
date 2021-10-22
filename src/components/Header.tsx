import Image from "next/image";
const Header = () => {
  return (
    <header className=" bg-blue-300 w-full h-16 mb-10 flex items-center">
      <Image
        src={"/firebaselogo.svg"}
        width="188"
        height="52"
        className=" flex-auto"
      />
      <div>
        <a className="text-white">aaaa</a>
      </div>
    </header>
  );
};

export default Header;
