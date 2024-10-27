import { useEffect, useState } from "react";
import PagesCard from "../Home/Shared/PagesCard/PagesCard";


const MainPage = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div>
            <h2 className="text-lg font-bold">Dragon News Home {news.length}</h2>
            <div>
                {
                    news.map((newspage) => <PagesCard 
                    key={news.id}
                    newspage={newspage}></PagesCard>)
                }
            </div>
        </div>
    );
};

export default MainPage;