import { Grid } from "@mui/material"
import type { ReactNode } from "react"

function DieZone({children}: {children : ReactNode}){


    return(
        <Grid container spacing={2}>
            <Grid size={12}>
                <p>DiceZone</p>
            </Grid>
            {children}
        </Grid>
    )
}
export default DieZone