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

  return (
    <>
      <Navbar />
      <div id="introduction">
        <div className="player">
            <div className="vimeo">
              <iframe
                src="https://player.vimeo.com/video/851580640?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                className="vimeo__iframe"
                title="Fortnite"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}

