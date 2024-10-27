import Marquee from "react-fast-marquee";

const BreackingNews = () => {
    return (
        <div className="flex ">
            <button className="btn btn-secendary bg-purple-400">Breacking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreackingNews;