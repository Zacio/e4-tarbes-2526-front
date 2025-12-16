import { Grid } from "@mui/material";
import jsonData from '../assets/posts.json'
import BlogCard from "./BlogCard";

function BlogCardContainer() {

    console.log(jsonData);

    let userArray = []
    for (let i = 0; i < jsonData.length; i++) {
        userArray.push(
            BlogCard(jsonData[i]["title"],jsonData[i]["body"])
        )
        console.log(jsonData[i]["userId"])
    }

    return (<Grid container spacing={2}>
        {userArray}

    </Grid>)
}

export default BlogCardContainer