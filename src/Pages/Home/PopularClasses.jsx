import { Bounce, Fade , Slide } from "react-awesome-reveal";

const PopularClasses = () => {
    return (
        <div className="text-center bg-sky-200 mx-6 rounded-lg">
            <h1 className="text-6xl text-sky-600 my-5">Popular Class</h1>
            <Fade delay={1e3} cascade damping={1e-1}>
                <h3 className="text-xl">This is our popular class section</h3>
            </Fade>
            <Bounce>
               <h2>hahaha</h2>
            </Bounce>
        </div>
    );
};

export default PopularClasses;