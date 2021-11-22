import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { 
    ImageList,
    ImageListItem,
    ImageListItemBar,
    ListSubheader,
    IconButton,
} from '@mui/material';

import InfoIcon from '@mui/icons-material/Help';

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
        <ImageList sx={{ width: '100%', height: '100%' }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">Detail Category</ListSubheader>
            </ImageListItem>
            {detailCategory && detailCategory.map((item) => (
                <ImageListItem key={item.idMeal}>
                <img
                    src={`${item.strMealThumb}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.strMealThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={item.strMeal}
                    actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255)' }}
                    >
                        <Link href={`/category/${idCategory}/${item.idMeal}`}>
                            <InfoIcon />
                        </Link>
                    </IconButton>
                    }
                />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default DetailCategory