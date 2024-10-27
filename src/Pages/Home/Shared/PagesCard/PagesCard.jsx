import { CiShare2 } from "react-icons/ci";
import { BsBookmarkStar } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const PagesCard = ({ newspage }) => {
    const { title, author, image_url, details, rating, total_view, _id } = newspage;
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md  text-gray-100">
            <div className="flex justify-between space-x-4 bg-gray-200">

                <div className="flex gap-3 p-2 rounded-lg">
                    <img alt="" src={author.img} className="object-cover w-12 h-12 rounded-full shadow" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm text-black font-semibold">{author.name}</a>
                        <span className="text-xs text-gray-400">{author.published_date}</span>
                    </div>
                </div>
                <div className="flex gap-4 text-2xl pt-5 text-black px-2">
                    <BsBookmarkStar />
                    <CiShare2 />
                </div>
            </div>
            <h2 className="text-lg font-bold text-black">{title}</h2>
            <div>
                <img src={image_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold"></h2>
               <div className="text-black">
               {
                    details.length > 200 ?
                    <p>{details.slice(0,200)}<Link 
                    to={`/newspage/${_id}`}
                    className="text-blue-500 font-bold"> Read More</Link></p> :
                        <p className="text-black">{details}</p>
                }
               </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h2 className="text-black">{rating.number}</h2>
                </div>
                <div className="text-black flex justify-center items-center gap-3">
                    <FaEye />
                    <h2 className="text-black">{total_view}</h2>
                </div>
            </div>

        </div>
    );
};

export default PagesCard;