import React, { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [searchTexm , setSearchText] = useState("");

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="/public/hero-img.png" alt="" />
          <h1>Find <span className="text-gradient">Movie</span> you'll Enjoy Without The Hassle</h1>
        </header>

        <Search searchTexm={searchTexm} setSearchText={setSearchText}/>
        <h1 className="text-white">{searchTexm}</h1>
      </div>
    </main>
  );
}

export default App;
