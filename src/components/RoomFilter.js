import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';
// get all unique values 
const getUnique = (item, value) => {
    return [...new Set(item.map(item => item[value]))]
}
export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capcacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;

    let types = getUnique(rooms, 'type');
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });
    types = ['all', ...types];
    console.log(types);

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className='filter-container'>
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* End of select type */}
                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={type} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* End of guest */}
                {/* Room Price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* End of Room Price */}
                {/* Size */}
                <div className="form-group">
                    <label htmlFor="size-input">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end of size */}
                {/* extras */}
                <div className="form-grou">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                </div>
                <div className="form-grou">
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}
