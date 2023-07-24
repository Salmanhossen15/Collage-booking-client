import { useEffect, useState } from "react";
import SingleCollageCard from "./SingleCollageCard";


const CollageCard = () => {

    const [collage, setCollage] = useState([]);

    useEffect(() => {
        fetch('https://collage-bookings-server.vercel.app/popularCollage')
            .then((res) => res.json())
            .then((data) => setCollage(data));
    }, []);

    
    return (
        <div className="py-10">
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                collage.map((item, index )=> <SingleCollageCard
                key={index}
                item={item}
                ></SingleCollageCard>)
            }
            </div>
        </div>
    );
};

export default CollageCard;