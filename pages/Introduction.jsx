import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { auth } from "@/firebase";
import { VscMenu } from "react-icons/vsc";
import { FaCrown } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Logo from "../src/assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Introduction({ isSidebarOpen, setIsSidebarOpen }) {
  const [firstLetter, setFirstLetter] = useState();
  const user = auth.currentUser;
  const router = useRouter();

  function openMenu() {
    setIsSidebarOpen(true);
  }

  function closeMenu() {
    setIsSidebarOpen(false);
  }

  function signOut() {
    router.push("/");
  }

  useEffect(() => {
    // console.log(user.email[0].toUpperCase())
    setFirstLetter(auth.currentUser?.email[0].toUpperCase());
  }, [user]);

  return (
    <>
      <div className="nav">
        <div className="logo__Wrapper">
          {isSidebarOpen ? (
            <AiOutlineClose className="menu cursor" onClick={closeMenu} />
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
      <div id="introduction"></div>
      <iframe
        src="https://player.vimeo.com/video/851580640?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        width="1280"
        height="720"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Fortnite_20221029212356"
      ></iframe>
    </>
  );
}
