import { Grid } from "@mui/material";

function BlogCard(title: string, description: string){
    
    return(
        <Grid size={{sm: 12, md: 6, lg: 4, xl: 2}}>
                <h2>{title}</h2>
                <p>{description}</p>
        </Grid>
    )
}

export default BlogCard