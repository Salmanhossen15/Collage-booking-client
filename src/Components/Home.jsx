import CollageCard from "./CollageCard";
import Gallery from "./Gallery";
import Research from "./Research";
import Review from "./Review";
import SearchCollages from "./SearchCollages";


const Home = () => {
    return (
        <div className="my-10">
            
            <SearchCollages></SearchCollages>
            <CollageCard></CollageCard>
            <Gallery></Gallery>
            <Research></Research>
            <Review></Review>
        </div>
    );
};

export default Home;