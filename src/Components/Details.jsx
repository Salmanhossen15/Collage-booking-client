import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {

    const [collage, setCollage] = useState({});

    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/collages/${id}`)
            .then((res) => res.json())
            .then((data) => setCollage(data));
    }, [id]);
    return (
        <div>
            {collage.collage_name}
        </div>
    );
};

export default Details;