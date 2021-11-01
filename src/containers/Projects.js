/** @format */

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
// components
import PageHeader from "src/components/PageHeader";
// imgs
import {
    omsImg,
    notesImg,
    imagesearchImg,
    chatImg,
    imageshareImg,
    discordbotImg,
} from "src/imgs";

const Main = () => {
    const projects = [
        {
            image: omsImg,
            title: "Online Mentoring System",
            decription:
                "The online mentoring system provides the communication platform between faculties and students",
            link: "",
            available: false,
        },
        {
            image: chatImg,
            title: "Chat App",
            decription:
                "It is Web Application for group chatting including email authentication and login functionality",
            link: "https://neh-jain-21.github.io/Messenger-Clone",
            available: true,
        },
        {
            image: discordbotImg,
            title: "Cyan Discord Bot Website",
            decription:
                "Web Application showing features and functions of our discord bot. Integrate it directly on discord",
            link: "https://neh-jain-21.github.io/cyanbot",
            available: true,
        },
        {
            image: notesImg,
            title: "Notes App",
            decription:
                "Web Application used to store notes where user can store title, content and delete notes functionality",
            link: "https://neh-jain-21.github.io/keep-app/",
            available: true,
        },
        {
            image: imagesearchImg,
            title: "Image Search",
            decription:
                "It is Web Application to search Images. It using Unsplash images API to view and download them",
            link: "https://neh-jain-21.github.io/image-search-app/",
            available: true,
        },
        {
            image: imageshareImg,
            title: "Image Sharing",
            decription:
                "Web Application implementing Sign up and Login and used for sharing photos publicly",
            link: "https://neh-jain-21.github.io/Instagram-Clone",
            available: true,
        },
    ];

    return (
        <>
            <Grid sx={{ mb: 5 }} id="projects">
                <PageHeader color="#3f51b5" title="PROJECTS" />
                <Grid container direction="row">
                    {projects.map((project) => {
                        return (
                            <Grid key={project.title} item sm={6} md={4}>
                                <Card sx={{ m: 4, mb: 0 }}>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        width="100%"
                                        image={project.image}
                                        title={project.title}
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            {project.decription}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {project.available ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Button
                                                    size="small"
                                                    color="primary"
                                                >
                                                    Open
                                                </Button>
                                            </a>
                                        ) : (
                                            <Button
                                                size="small"
                                                color="primary"
                                            >
                                                Coming Soon
                                            </Button>
                                        )}
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </>
    );
};

export default Main;
