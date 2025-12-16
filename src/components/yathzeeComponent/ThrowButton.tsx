import { Button, Grid } from "@mui/material";

function ThrowButton() {


    return (
        <Grid size={12}>
            <Button onClick={() => { console.log("test") }}>
                ThrowDice
            </Button>
        </Grid>
    )
}
export default ThrowButton