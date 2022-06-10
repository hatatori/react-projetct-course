import React from 'react';

const List = ({people}) =>{
    return (
        <>
            {people.map(person=>{
                const {id, name, age, image} = person
                return (
                    <aticle key={id} className='person'>
                        <img src={image} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} anos</p>
                        </div>
                    </aticle>
                )
            })}
        </>
    )
}

export default List