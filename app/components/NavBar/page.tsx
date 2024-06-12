import Link from "next/link";
import { useState } from "react";
import { Login } from "../Login/page";
const Navbar: React.FC = () => {
  const [modal, setModal] = useState(false);
  const onModalOpen = () => {
    setModal(true);
  };
  const onModalClose = () => {
    setModal(false);
  };

  return (
    <nav
      className="flex
      p-4 items-center  bg-blue-300  md:m-auto sm:m-auto"
    >
      <ul className="flex  justify-between w-1/2">
        {/* left */}
        <li>
          <Link href="/">
            <ul>Home</ul>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <ul>about</ul>
          </Link>
        </li>
      </ul>
      {/* right */}
      <ul className="flex justify-end w-1/2 cursor-pointer">
        <li onClick={onModalOpen}>
          {" "}
          <ul>profile</ul>
        </li>
      </ul>
      {modal && <Login showModal={true} closeModal={onModalClose} />}
    </nav>
  );
};

export default Navbar;
