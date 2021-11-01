/** @format */

import { Typography, Grid } from "@mui/material";
// imgs
import { mongodbImg, expressImg, reactImg, nodeImg } from "src/imgs";

const Main = () => {
    return (
        <>
            <div className="background"></div>
            <Grid
                container
                direction="column"
                justifyContent="center"
                textAlign="center"
                sx={{ mt: "30px", height: "100vh", p: { xs: 1.5, md: 8 } }}
            >
                <Typography variant="span" my="3rem" fontSize={70}>
                    We Are
                </Typography>
                <Grid
                    container
                    justifyContent="space-between"
                    flexWrap="nowrap"
                >
                    <img src={mongodbImg} alt="M" />
                    <img src={expressImg} alt="E" />
                    <img src={reactImg} alt="R" />
                    <img src={nodeImg} alt="N" />
                </Grid>
                {/* <Typography
                    sx={{ letterSpacing: { xs: 2, md: 30 } }}
                    variant="h1"
                    my="3rem"
                >
                    JavaSript
                </Typography> */}
                <Typography variant="span" my="3rem" fontSize={70}>
                    Developer
                </Typography>
            </Grid>
        </>
    );
};

export default Main;
