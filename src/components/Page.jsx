const Page = ({ number }) => {

    const path = document.location.pathname;
    const page = path === "/" ? 1 : path.match(/\d$/gi)[0] || 1;

    const changePage = () => {
        document.location = number;
    }

    return (
        <div onClick={changePage} className={`w-12 h-12 ${ (page == number) && "bg-amber-600 text-white" } bg-gray-300 rounded-full cursor-pointer items-center justify-center transition hover:text-white hover:bg-amber-600`}>
            <p className="text-center pt-2.5">{ number }</p>
        </div>
    )
}

export default Page;