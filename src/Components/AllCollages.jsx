import { useEffect, useState } from "react";
import SingleCollage from "./SingleCollage";


const AllCollages = () => {

    const [collages, setCollages] = useState([]);

    useEffect(() => {
        fetch(' https://collage-bookings-server.vercel.app/collages')
            .then(res => res.json())
            .then(data => setCollages(data))

    }, [])

    return (
        <div className="py-10">
            <h2 className="text-center text-5xl font-bold text-sky-500 my-8"> All Collages</h2>
            <div className="divider px-44"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                collages.map((collage, index )=> <SingleCollage
                key={index}
                collage={collage}
                ></SingleCollage>)
            }
            </div>
        </div>
    );
};

export default AllCollages;