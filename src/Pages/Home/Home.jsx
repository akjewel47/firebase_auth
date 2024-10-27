import MainPage from "../MainPage/MainPage";
import BreackingNews from "./BreackingNews";
import Header from "./Shared/Header/Header";
import LeftSideNav from "./Shared/LeftSideNav/LeftSideNav";
import Navbar from "./Shared/Navbar/Navbar";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
           <div className="">
           <Header></Header>
            <Navbar></Navbar>
             <BreackingNews></BreackingNews>
           </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="borde right-0 top-0">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <MainPage></MainPage>
                </div>
                <div className="border left-0 top-0">
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;