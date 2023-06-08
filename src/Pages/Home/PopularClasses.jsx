import { Fade, Slide } from "react-awesome-reveal";

const PopularClasses = () => {
    return (
        <div>
            <Slide>
                <h1>React Awesome Reveal</h1>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
                Easy-to-use animation library for React apps
            </Fade>
        </div>
    );
};

export default PopularClasses;