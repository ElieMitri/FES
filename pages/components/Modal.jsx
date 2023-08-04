import Link from "next/link";
import { GrFormClose } from "react-icons/gr";
import Image from "next/image";
import loginDesign from "../../src/assets/login-design.jpg";
import { useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  updateProfile,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "@/firebase";
import { useRouter } from "next/router";
import { FaLessThan } from "react-icons/fa";

export default function Modal({
  setIsModalOpen,
  isModalSignUpOpen,
  setIsModalSignUpOpen,
  setSubscribed,
}) {
  const router = useRouter();
  const userName = useRef("");
  const userEmail = useRef("");
  const userPassword = useRef("");
  const [user, setUser] = useState({ email: "", username: "" });
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const userInfo = auth.currentUser;

  function closeModal() {
    setIsModalSignUpOpen(false);
    setIsModalOpen(false);
    document.body.style.overflow = "visible";
  }

  async function createAccount(e) {
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      userEmail.current.value,
      userPassword.current.value
    );
    let userInfo = auth.currentUser;
    userInfo.displayName = userName.current.value;
    console.log(auth.currentUser);
    setEmail(event.target.value);
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate("/"))
        .catch((error) => {
          alert(error.message);
        });
    } catch (err) {
      alert(err);
    }
    userInfo.displayName = userName.current.value;
    setIsModalSignUpOpen(false);
    updateProfile(auth.currentUser, {
      displayName: userName.current.value,
      email: userEmail.current.value,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  }

  async function login() {
    try {
      await signInWithEmailAndPassword(
        auth,
        userEmail.current.value,
        userPassword.current.value
      );
      router.push("/");
    } catch (error) {
      setError("Incorrect email or password!");
    }
  }

  function trying() {
    console.log(error)
  }

  useEffect(() => {
    const userInfo = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
        setSubscribed(true)
      }
    });

    return () => {
      userInfo;
    };
  }, []);

  return (
    <>
      {isModalSignUpOpen ? (
        <>
          <div className="modal">
            <div className="half__modal">
              <h1 className="title">Sign into your account</h1>
              <div className="name__signUp">
                <h4>Name</h4>
                <input
                  type="text"
                  className="modal__input"
                  placeholder="John Doe"
                  ref={userName}
                />
              </div>
              <div className="email__login">
                <h4>Email</h4>
                <input
                  type="email"
                  className="modal__input"
                  placeholder="jane@example.com"
                  ref={userEmail}
                />
              </div>
              <div className="password__login">
                <h4>Password</h4>
                <input
                  type="password"
                  className="modal__input"
                  placeholder="••••••••••••"
                  ref={userPassword}
                />
              </div>
              <button className="get__started--btn" onClick={createAccount}>
                Get Started
              </button>
              <h4 className="new__here">
                Already signed up?{" "}
                <Link href="" onClick={() => setIsModalSignUpOpen(false)}>
                  Log In
                </Link>
              </h4>
            </div>
            <Image src={loginDesign} className="login__img" alt="" />
            <GrFormClose className="close__modal cursor" onClick={closeModal} />
          </div>
          <div className="backdrop" />
        </>
      ) : (
        <>
          <div className="modal">
            <div className="half__modal">
              <h1 className="title">Sign into your account</h1>
              <div className="email__login">
                {error && <p className="login__error">{error}</p>}
                <h4>Email</h4>
                <input
                  type="email"
                  className="modal__input"
                  placeholder="Email"
                  ref={userEmail}
                />
              </div>
              <div className="password__login">
                <h4>Password</h4>
                <input
                  type="password"
                  className="modal__input"
                  placeholder="••••••••••••"
                  ref={userPassword}
                />
              </div>
              <button className="login__signIn--button" onClick={login}>
                Sign In
              </button>
              <Link href="" className="forgot__password">
                Forgot password?
              </Link>
              <h4 className="new__here">
                New here?{" "}
                <Link href="" onClick={() => setIsModalSignUpOpen(true)}>
                  Sign Up
                </Link>
              </h4>
            </div>
            <Image src={loginDesign} className="login__img" alt="" />
            <GrFormClose className="close__modal cursor" onClick={closeModal} />
          </div>
          <div className="backdrop" />
        </>
      )}
    </>
  );
}
