const Movie = ({ title, link, img }) => {

    return (
        <a href={link}>
            <div className="h-[420px] w-[250px] transition rounded-lg hover:bg-gray-500 hover:translate-y-[-15px]">
                <div className="flex justify-center">
                    <img className="rounded-lg pt-3" src={"https://lord-u17.lordfilm1.org" + img} alt={title} />
                </div>
                <h3 className="text-white text-center mt-5 text-lg px-2">{title}</h3>
            </div>
        </a>
    )
}

export default Movie;