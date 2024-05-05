import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Header() {
  const auth = getAuth()
  const [pageState, setPageState]=useState('Sign In')
  const location = useLocation();
  function pathMatch(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if (user) {
        setPageState('Profile')
      }else{
        setPageState('Sign In')
      }
    })
  },[auth])
  return (
    <div>
      <header className="flex justify-between items-center p-1 max-w-xl sticky top-0 z-50">
        <div>
          <img
            width="142"
            height="46"
            alt="realtor.com"
            className="bgheader_brand-img"
            data-testid="global-nav-default"
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`text-sm py-3 font-semibold border-b-[3px] ${pathMatch(
                "/"
              )?"text-black border-b-red-600":"text-gray-400 border-b-transparent"} transition ease-linear`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={`text-sm py-3 font-semibold border-b-[3px] ${pathMatch(
                "/offers"
              )?"text-black border-b-red-600":"text-gray-400 border-b-transparent"} transition ease-linear`}
            >
              <Link to={"/offers"}>Offers</Link>
            </li>
            <li
              className={`text-sm py-3 font-semibold border-b-[3px] ${
                (pathMatch("/signin") || pathMatch("/profile"))?"text-black border-b-red-600":"text-gray-400 border-b-transparent"
              } transition ease-linear`}
            >
              <Link to={pageState==='Sign In'?"/signin":"/profile"}>{pageState}</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
