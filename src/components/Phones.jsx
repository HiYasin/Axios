// import { useState, useEffect } from "react";
// const Phones = () => {
//     const [phones, setPhones] = useState([]);
//     useEffect(() => {
//         fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//            .then(response => response.json())
//            .then(data => setPhones(data.data));
//     }, []);
//     console.log(phones);
//     return (
//         <div>
//             <h3>Phones: {phones.length}</h3>
//         </div>
//     );
// };

// export default Phones;
import axios from "axios";
import { useState, useEffect } from "react";
const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
           .then(response => setPhones(response.data.data))
    }, []);
    console.log(phones);
    return (
        <div>
            <h3>Phones: {phones.length}</h3>
            {
                    phones.map((phone) => (
                        <div key={phone.id}>{phone.phone_name}</div>
                    ))
            }
        </div>
    );
};

export default Phones;