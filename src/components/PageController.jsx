import Page from "./Page";

const PageController = ({ length }) => {
    let pages = [];

    for (let i = 1; i <= length; i++) {
        pages.push(i);
    }

    return (
        <div className="flex gap-5 mt-10 mb-[60px]">
            { pages.map(item => <Page number={item} key={item} />) }
        </div>
    )
}

export default PageController;