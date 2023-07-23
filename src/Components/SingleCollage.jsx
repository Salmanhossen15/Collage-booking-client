import { Link } from "react-router-dom";


const SingleCollage = ({collage}) => {
    return (
        <div className="border p-6 rounded-2xl  shadow-lg bg-cyan-300">
            <div>
                <img className="w-56 h-56 rounded-xl border-4 mx-auto" src={collage.collage_image} alt="" />
            </div>
            <div className="text-center space-y-3 text-orange-700 mt-4">
                <h2 className="">{collage.collage_name}</h2>
                <p> Ratings:{collage.collage_rating}</p>
                <p> Admission Date : {collage.admission_dates}</p>
                <p>Number of research : {collage.research}</p>
                <Link to={`/details/${collage._id}`}><button className='btn bg-sky-500'>View Details</button></Link>

            </div>
        </div>
    );
};

export default SingleCollage;