import { Grid } from "@mui/material";

function DieThrow({diceFace}: {diceFace : number}) {


    return (
        <Grid size={2}>
            <p>{diceFace}</p>
        </Grid>
    )
}
export default DieThrow