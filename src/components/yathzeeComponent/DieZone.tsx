import { Grid } from "@mui/material"
import type { ReactNode } from "react"

function DieZone({children}: {children : ReactNode[]}){


    return(
        <Grid container spacing={2}>
            {children}
        </Grid>
    )
}
export default DieZone