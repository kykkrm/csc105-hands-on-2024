import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function FavouriteDetailPage() {
  const { id } = useParams(); 
  const queryParams = new URLSearchParams(useLocation().search);
  const q = queryParams.get("q"); 
  const size = queryParams.get("size"); 

  return (
    <div>
        <Navbar/>
    <div className="pt-2 pl-3">
      <p className="text-lg ">
        Your favourite post is <span className="font-bold">{q}</span>. Post ID is <span className="font-bold">{id}</span>. Size is <span className="font-bold">{size}</span>.
      </p>
    </div>
    </div>
  );
}

export default FavouriteDetailPage;
