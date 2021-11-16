import { useRouter } from 'next/router';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import React, { useState } from 'react';
import { useEffect } from 'react';

export async function getServerSideProps (context){
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${context.params.idCategory}`);
    const data = await res.json();


    return {
        props: { 
            detailCategory : data.meals,
            idCategory: context.params.idCategory
        }
    }
}


function DetailCategory({detailCategory,idCategory}) {
    return (
        <div className="row my-2">
            {
                detailCategory && 
                detailCategory.map(item => (
                    <div className="col-lg-4 mb-4" key={item.idMeal}>
                        <Card>
                            <Card.Img variant="top" src={item.strMealThumb} />
                            <Card.Body>
                                <Card.Text className="text-elipsis">
                                    {item.strMeal}
                                </Card.Text>
                                <Link href={`/category/${idCategory}/${item.idMeal}`}>
                                    <a className="btn btn-primary btn-block">Detail</a>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
        </div>
    )
}

export default DetailCategory