import { useRouter } from 'next/router';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import React, { useState } from 'react';
import { useEffect } from 'react';

export async function getServerSideProps (context){

        console.log(context)

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${context.params.idMenu}`);
    const data = await res.json();


    return {
        props: { detailMeal : data.meals }
    }
}


function DetailCategory({detailMeal}) {
    return (
        <div>
            {
                detailMeal && 
                detailMeal.map(item => (
                    <div className="row my-2"  key={item.idMeal}>
                        <div className="col-lg-6">
                            <img className="img-fluid" src={item.strMealThumb}></img>
                        </div>
                        <div className="col-lg-6">
                            <h1>{item.strArea}</h1>
                            <h3>Instructions : </h3>
                            <p>{item.strInstructions}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DetailCategory