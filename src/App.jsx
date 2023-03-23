import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
import PageController from "./components/PageController";
import Spinner from "./components/Spinner";

const App = () => {
      const [data, setData] = useState(false);
      const [pag, setPag] = useState(false);

      const path = document.location.pathname;

      const getData = () => {
          const page = path !== "/" && path.match(/\d$/gi)[0];
          const firstPage = path !== "/" && /^\/\d*$/gi.test(path);

          if (path === "/" || firstPage) {
              const url = `https://movie-app-api-production.up.railway.app/api/films/2023/${path === "/" ? "1" : page}`;
              fetch(url)
                  .then(response => response.json())
                  .then(data => {
                      setData(data.result)
                      setPag(data.pag);
                  })
          } else {
              const page = path.match(/\d$/gi)[0];
              const url = `https://movie-app-api-production.up.railway.app/api/films/2022/${page}`;

              fetch(url)
                  .then(response => response.json())
                  .then(data => {
                      setData(data.result)
                      setPag(data.pag);
                  })
          }

      }

      useEffect(() => {
          if (path) {
              getData();
          }
      }, [path])

  return (
      <div id="smooth-wrapper">
          <div id="smooth-content">


      <div className="w-full min-h-screen bg-black pt-10">
          <div className="container mx-auto md:px-7 lg:px-4 mb-20 sm:mb-[150px]">
              <Navbar />
          </div>

          <h1 className="text-center text-3xl sm:text-5xl text-white  mb-10 sm:mb-[150px]">{ data ? "Фильмы онлайн" : <Spinner /> }</h1>

          <div className="flex flex-wrap justify-center gap-10">
              { (data && path !== "/favorite") && data.map(({ title, img, link }) => <Movie title={title} img={img} link={link} key={title} />)}
          </div>



          {pag && <div className="flex justify-center">
              <PageController length={pag} />
          </div>}
      </div>
          </div>
      </div>
  )
}

export default App;