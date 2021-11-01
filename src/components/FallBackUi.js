/** @format */

const { Skeleton, Grid } = require("@mui/material");

const FallBackUi = () => {
    return (
        <>
            <Grid
                height="100vh"
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width="70vw"
                    height={50}
                />
                <Skeleton
                    sx={{ my: 10 }}
                    animation="wave"
                    variant="rectangular"
                    width="90vw"
                    height={118}
                />
                <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width="70vw"
                    height={50}
                />
            </Grid>
        </>
    );
};

export default FallBackUi;
