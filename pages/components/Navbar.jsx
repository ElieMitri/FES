import { VscMenu } from "react-icons/vsc";
import { FaCrown } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../src/assets/logo.png";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/firebase";
import { signOut as firebaseSignOut } from "firebase/auth";

export default function Navbar({
  isModalOpen,
  setIsModalOpen,
  setIsModalSignUpOpen,
  subscribed,
  setSubscribed,
  setIsSidebarOpen,
  isSidebarOpen,
}) {
  const router = useRouter();
  const user = auth.currentUser;
  const [email, setEmail] = useState();
  const [firstLetter, setFirstLetter] = useState();

  function signOut() {
    firebaseSignOut(auth).then(() => {
      setSubscribed(false);
    });
  }

  function toggleModel() {
    setIsModalOpen(true);
    setIsModalSignUpOpen(true);
    document.body.style.overflow = "hidden";
  }

  function isModalClicked() {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function openMenu() {
    setIsSidebarOpen(true);
  }

  function closeMenu() {
    setIsSidebarOpen(false);
  }

  useEffect(() => {
    // console.log(user.email[0].toUpperCase())
    setFirstLetter(auth.currentUser?.email[0].toUpperCase());
  }, [user]);

  return (
    <div className="nav__wrapper">
      {subscribed ? (
        <div className="nav">
          <div className="logo__Wrapper">
            {isSidebarOpen ? (
              <AiOutlineClose className="menu cursor" onClick={closeMenu}/>
            ) : (
              <VscMenu className="menu cursor" onClick={openMenu} />
            )}
            <Image src={Logo} alt="" className="logo" />
          </div>
          <ul className="links">
            <Link className="link__wrapper" href="/Profile">
              <button className="job__guarantee--button">
                Job Guarantee <FaCrown className="crown" />
              </button>
            </Link>
            <button className="logout__button" onClick={signOut}>
              {firstLetter}
            </button>
          </ul>
        </div>
      ) : (
        <div className="nav">
          <div className="logo__Wrapper">
            <Image src={Logo} alt="" className="logo" />
          </div>
          <ul className="links">
            <Link href="" className="link__wrapper">
              <h3 className="nav__login--link" onClick={isModalClicked}>
                login
              </h3>
            </Link>
            <button className="get__started--button" onClick={toggleModel}>
              Get Started
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}
