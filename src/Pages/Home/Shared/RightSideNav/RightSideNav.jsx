import { FaGoogle, FaGithub, FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../../assets/qZone1.png'
import qZone2 from '../../../../assets/qZone2.png'
import qZone3 from '../../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-3xl px-5">Login With</h2>

            <div className="space-y-3 p-4">
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login With Github
                </button>

                <div className="space-y-2">
                    <h2 className="text-lg font-bold">Find Us On</h2>
                    <div>
                        <a className="border flex items-center gap-3 text-lg p-2 ">
                            <FaFacebookSquare />
                            <h2>Facebook</h2>
                        </a>
                        <a className="border flex items-center gap-3 text-lg p-2">
                            <FaInstagram />
                            <h2>Facebook</h2>
                        </a>
                        <a className="border flex items-center gap-3 text-lg p-2">
                            <FaTwitter />
                            <h2>Facebook</h2>
                        </a>
                    </div>
                </div>
                {/* Q-Zone */}
                <div>
                    <div className="bg-gray-200 p-2 space-y-3 rounded-lg">
                        <h2 className="text-2xl font-bold text-white ">Q Zone</h2>
                        <img src={qZone1} alt="" />
                        <img src={qZone2} alt="" />
                        <img src={qZone3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;