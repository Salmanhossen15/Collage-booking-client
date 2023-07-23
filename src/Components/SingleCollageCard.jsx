import { Link } from "react-router-dom";


const SingleCollageCard = ({ item }) => {
    return (
        <div className="border p-6 rounded-2xl  shadow-lg ">
                    <div>
                        <img className="w-56 h-56 rounded-xl border-4 mx-auto" src={item.collage_image}alt="" />
                    </div>
                    <div className="text-center space-y-3 text-orange-700 mt-4">
                        <h2 className="">{item.collage_name}</h2>
                        <p>Admission dates :{item.admission_dates}</p>
                        <p> Events :{item.events[0]},{item.events[1]}</p>
                        <p>Research history: {item.research_history}</p>
                        <p className="pb-4">Sports:{item.sports[0]},{item.sports[1]},{item.sports[2]}</p>

                        <Link to={`/details/${item._id}`}><button className='btn bg-sky-500'>View Details</button></Link>
                        


                    </div>
                </div>
    );
};

export default SingleCollageCard;