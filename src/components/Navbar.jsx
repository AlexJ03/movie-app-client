const Navbar = () => {

    const path = document.location.pathname;

    const firstPage = /^\/\d*$/gi.test(path);

    const changePath = (path) => {
        document.location = path;
    }

    return (
        <div className="w-full md:flex md:justify-between items-center">
            <h2 className="text-center sm:text-left text-white text-3xl text-amber-600">MY FILMS</h2>
            <ul className="mt-12 sm:mt-0 flex justify-center sm:justify-start gap-x-20">
                <li><a onClick={() => changePath("/")} className={`text-2xl text-gray-500 transition-colors transition-width hover:text-white relative cursor-pointer ${firstPage && "after:w-full after:h-0.5 after:bg-indigo-600 after:absolute after:top-[120%] after:left-0 text-white"} `}>2023</a></li>
                <li><a onClick={() => changePath("/films/2022/page/1")} className={`text-2xl text-gray-500 transition-colors transition-width cursor-pointer hover:text-white relative ${!firstPage && "after:w-full after:h-0.5 after:bg-indigo-600 after:absolute after:top-[120%] after:left-0 text-white"} `}>2022</a></li>
            </ul>
        </div>
    )
}

export default Navbar;