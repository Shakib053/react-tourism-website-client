import React, { useRef } from 'react';

const AddService = () => {
    const nameRef = useRef();
    const detailsRef = useRef();
    const countryRef = useRef();
    const currencyRef = useRef();
    const personsRef = useRef();
    const languageRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const daysRef = useRef();
    const handleAddService = e => {
        const name = nameRef.current.value;
        const description = detailsRef.current.value;
        const country = countryRef.current.value;
        const currency = currencyRef.current.value;
        const persons = personsRef.current.value;
        const language = languageRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const days = daysRef.current.value;
        const rating = 5;
        const reviews = 1;
        const newUser = { name, description, country, currency, persons, language, price, img, days, rating, reviews };
        console.log(JSON.stringify(newUser));
        fetch('https://safe-temple-87819.herokuapp.com/destinations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div >
            <h2 className="text-center mt-5">Please Add a Destination</h2>
            <form onSubmit={handleAddService} className="m-5">
                <label htmlFor="">Name of the place you want to add : <input placeholder="name of the place" ref={nameRef} type="text" /></label>

                <br />
                <br />
                <label htmlFor="">Add Some details of the place : <input type="text" placeholder="details of the place" ref={detailsRef} /></label>

                <br />
                <br />

                <label htmlFor="">Country : <input type="text" placeholder="country name" ref={countryRef} /></label>
                <br />
                <br />
                <label htmlFor="">Minimum Persons :<input type="text" placeholder="minimum required persons" ref={personsRef} />  </label>

                <br />
                <br />
                <label htmlFor="">
                    Currency : <input type="text" placeholder="currency" ref={currencyRef} />
                </label>
                <br />
                <br />
                <label htmlFor="">Country Language : <input type="text" placeholder="country's language" ref={languageRef} /></label>
                <br />
                <br />
                <label htmlFor="">Minimum Days : <input type="text" placeholder="minimum days required" ref={daysRef} /></label>
                <br />
                <br />
                <label htmlFor="">Price : <input type="text" placeholder="price" ref={priceRef} /></label>
                <br />
                <br />
                <label htmlFor="">Image URL : <input type="text" placeholder="image's url" ref={imgRef} /></label>
                <br />
                <br />
                <input type="submit" value="Submit" className="btn-primary p-2" />
                <input type="file" accept="image/*" value="Submit" className="btn-primary p-2" />
            </form>
        </div>
    );

}
export default AddService;