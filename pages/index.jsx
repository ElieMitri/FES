import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Results from "./components/Results";
import MagicTriangle from "./components/MagicTriangle";
import Valuable from "./components/Valuable";
import Solution from "./components/Solution";
import Sidebar from "./components/Sidebar";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  updateProfile,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
 
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSignUpOpen, setIsModalSignUpOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const auth = getAuth();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const userInfo = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSubscribed(true);
      }
      setIsClient(true)
    }, []);

    return () => {
      userInfo;
    };
  }, []);

  return (
    <div>
      <Navbar
        setIsModalOpen={setIsModalOpen}
        setIsModalSignUpOpen={setIsModalSignUpOpen}
        isModalSignUpOpen={isModalSignUpOpen}
        isModalOpen={isModalOpen}
        subscribed={subscribed}
        setSubscribed={setSubscribed}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="course__wrapper">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="course">
          {isModalOpen ? (
            <div>
              <Modal
                setIsModalOpen={setIsModalOpen}
                setIsModalSignUpOpen={setIsModalSignUpOpen}
                isModalSignUpOpen={isModalSignUpOpen}
                subscribed={subscribed}
                setSubscribed={setSubscribed}
              />
              <Landing />
              <Results />
              <MagicTriangle />
              <Valuable />
              <Solution />
            </div>
          ) : (
            <>
              <Landing />
              <Results />
              <MagicTriangle />
              <Valuable />
              <Solution />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
