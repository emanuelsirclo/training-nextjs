import { styled } from '@mui/material/styles';
import { 
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Box,
    Paper,
    Grid
} from '@mui/material';

import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export async function getServerSideProps (){

    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await res.json();


    return {
        props: { categories : data.categories }
    }
}

const Category = ({categories}) => {
    return ( 
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
            categories && 
            categories.map(category => (
            <Grid item xs={4} key={category.idCategory}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={category.strCategoryThumb}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {category.strCategory}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="text-elipsis">
                        {category.strCategoryDescription}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link href={`/category/${category.strCategory}`}>
                            <a className="btn btn-primary btn-block">Detail</a>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
            ))
            }
      </Grid>
    </Box>
     );
}
 
export default Category;