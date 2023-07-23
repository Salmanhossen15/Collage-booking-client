import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {

    const [collage, setCollage] = useState({});

    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        fetch(`https://collage-bookings-server.vercel.app/collages/${id}`)
            .then((res) => res.json())
            .then((data) => setCollage(data));
    }, [id]);
    return (
        <div className="card card-side bg-base-100  my-24">
            <figure><img className="w-3/4 rounded-3xl" src={collage.collage_image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className=" text-center text-4xl font-bold">{collage.collage_name} </h2>
                <p>Admission process : <br /> {collage.admission_process}</p>
                <p>Research works : <br /> Year 2019 Published a significant research paper in the field of medicine,
        Year 2016 Developed a novel algorithm for data encryption,
        Year 2014 Conducted research on sustainable agriculture practices</p>
        <p>Sports categories: <br />
        Team Sports: Cricket ,Football, Hockey,<br />
        Individual Sports: Badminton, Table Tennis, Swimming</p>
            </div>
        </div>
    );
};

export default Details;