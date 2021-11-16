import { 
    Card,
    Button
 } from 'react-bootstrap';

import Link from 'next/link';


export async function getServerSideProps (){

    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await res.json();


    return {
        props: { categories : data.categories }
    }
}

const Category = ({categories}) => {
    return ( 
        <div className="row my-2">
            {
                categories && 
                categories.map(category => (
                        <div className="col-lg-4 mb-4" key={category.idCategory}>
                        <Card>
                            <Card.Img variant="top" src={category.strCategoryThumb} />
                            <Card.Body>
                                <Card.Title>{category.strCategory}</Card.Title>
                                <Card.Text className="text-elipsis">
                                    {category.strCategoryDescription}
                                </Card.Text>
                                <Link href={`/category/${category.strCategory}`}>
                                    <a className="btn btn-primary btn-block">Detail</a>
                                </Link>
                            </Card.Body>
                        </Card>
                        </div>
                ))
            }
        </div>
     );
}
 
export default Category;