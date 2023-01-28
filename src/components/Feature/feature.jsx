import React from "react";
import { featuress } from "../../constants";
import styles from "./style.css";

const Features = () => (
    <section className="section">
        <div className="maindiv" >
            {featuress.map((features) => (
                <div key={features.id} className="featurediv">
                    <p>{features.name}</p>
                    <img src={features.logo} alt="client_logo" className="featureimg" />
                </div>
                // <div key={features.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
                //<img src={features.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
                // </div>
            ))}
        </div>
    </section >
);

export default Features;
// import React from "react";
// import { featuress } from "../../constants";
// import styles from "./style.css";

// const Features = () => (
//     <section className="section">
//         <div className="maindiv" >
//             {featuress.map((features) => (
//                 <div key={features.id} className="featurediv">
//                     <p>{features.name}</p>
//                     <img src={features.logo} alt="client_logo" className="featureimg" />
//                 </div>
//                 // <div key={features.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
//                 //<img src={features.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
//                 // </div>
//             ))}
//         </div>
//     </section >
// );

// export default Features;