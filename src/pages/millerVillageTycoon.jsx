import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import LayoutProject from '../components/LayoutProject';
import ProjectHeader from '../components/ProjectHeader';
import ProjectBasicInfo from '../components/ProjectBasicInfo';
import ProjectSteps from '../components/ProjectSteps';
import ProjectSection from '../components/ProjectSection';
import { Typography, Stack, Avatar, Accordion, AccordionSummary, AccordionDetails, Box, List, ListItemText, Divider } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider } from "@mui/material";
import theme from '../../themes/mui-theme'

// markup
const MillerVillageTycoonPage = () => {
  return (
    <>
        <ThemeProvider theme={theme}>
            <LayoutProject
                header={
                    <ProjectHeader
                        projectTitle='Miller Village Tycoon' 
                        entities='Cintesis & Universidade do Porto' 
                        year='2022/2023'
                    ></ProjectHeader>
                }
                projectSteps={
                    <Box display='flex'
                        justifyContent="center"
                        alignItems="center"
                        flexDirection='column'
                        bgcolor={theme.palette.primary.light}
                        pb={5}>
                        <ProjectBasicInfo 
                            info="Miller Village Tycoon centers around gamifying the asthma monitoring process known as Forced Expiratory Maneuver (FEM), tailored for adolescents aged 14 to 17. The project aims to enhance adherence to disease monitoring through a game concept inspired by village builders or city builders, akin to games such as Sim City. Nevertheless, the main and only objective is to seamlessly incorporate the maneuver into the game's storyline.">
                        </ProjectBasicInfo>
                        <ProjectSteps topic="1. Research & Interviews">
                            <Typography variant="regularText">Texto</Typography>
                        </ProjectSteps>
                    </Box>
                }
                firstProjectStep={
                    <ProjectSection topic="1. Research & Interviews" >
                        <Box mb={10}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/RvKJQWcq8fQ?si=fQcRLi6qrt510hk6&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Box>
                        <Typography variant="stepTitleHeader" mb={2}>User Persona</Typography>
                        <Typography variant="regularText" mb={4}>User personas are fundamental in crafting a user-centered design and ensuring a seamless user experience (UX). These fictional characters represent different types of users who might interact with a product or service. By understanding their needs, motivations, and behaviors, designers can tailor their creations to better suit their audience.
                            Creating user personas involves extensive research and analysis of the target demographic. Designers gather data through surveys, interviews, and observations to identify common traits and pain points among users. This information is then synthesized into distinct personas, each with its own backstory, goals, and preferences.</Typography>
                        <Accordion mt={4} mb={10} sx={{bgcolor: "#1a2241", color: "#fff" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color="action"/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Stack direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={5}>
                                        <Stack spacing={2} direction="row" alignItems="center">
                                            <Avatar></Avatar>
                                            <Box>
                                                <Typography sx={{textWrap: 'nowrap'}} variant="regularText" fontWeight={700}>Amilquer, 14</Typography>
                                                <Typography fontStyle="italic">Student</Typography>
                                            </Box>
                                        </Stack>
                                    <Typography variant="regularText" pr={3}>Not a new idea.</Typography>
                                </Stack>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Stack direction='column' spacing={1} >
                                    <Typography variant="regularText" pb={4}>Amilquer Bernardo, a <b>14-year-old</b> student, loves playing and creating video games on his own, especially since he can't go outside for sports. He tries to involve friends in his gaming world, but sometimes they make fun of his sports skills, affecting his confidence. Amilquer's doctor recommends he does the Forced Expiratory Maneuver (FEM) every day between 10 am and 10:30 am. But during school, he's shy about asking to use the bathroom at that time. He doesn't want to tell his friends because FEM takes a while, and he usually comes back 10 or 15 minutes later. On challenging days, he might skip it.</Typography>
                                    <Divider></Divider>
                                    <Stack direction="row" pt={3} pb={5} spacing={10} justifyContent="space-evenly">
                                        <Box component="div">
                                            <Typography variant="miniTitle">
                                                Behaviors
                                            </Typography>

                                            <List>
                                                <ListItemText
                                                    primary={<Typography variant="regularText">- Avoids exercising due to asthma;</Typography>}
                                                />
                                                <ListItemText
                                                    primary={<Typography variant="regularText">- Has difficulty connecting with male friends over team sports;</Typography>}
                                                />
                                                <ListItemText
                                                    primary={<Typography variant="regularText">- Finds joy in playing games on his mobile phone and computer;</Typography>}
                                                />
                                                <ListItemText
                                                    primary={<Typography variant="regularText">- Feels sad and less capable when having to go to the hospital or facing challenges in school.</Typography>}
                                                />
                                            </List>
                                        </Box>
                                        <Box component="div">
                                            <Typography variant="miniTitle">
                                                Goals
                                            </Typography>

                                            <List>
                                                <ListItemText
                                                    primary={<Typography variant="regularText">- Seek acceptance from friends and colleagues;</Typography>}
                                                />
                                                <ListItemText
                                                    primary={<Typography variant="regularText">- Find enjoyment and motivation in self-monitoring;</Typography>}
                                                />
                                                <ListItemText
                                                    primary={<Typography variant="regularText">- Overcome the habit of hiding.</Typography>}
                                                />
                                            </List>
                                        </Box>
                                        <Box component="div">
                                            <Typography variant="miniTitle">
                                                Pain Points
                                            </Typography>
                                            <List>
                                                <ListItemText
                                                    primary={<Typography variant="regularText">- Finds treatments dull;</Typography>}
                                                />
                                                <ListItemText
                                                    primary={<Typography variant="regularText">- Friends and colleagues don't understand his issues.</Typography>}
                                                />
                                            </List>
                                        </Box>
                                    </Stack>
                                    <Divider></Divider>
                                    <Typography pt={3} variant="miniTitle">Scenario</Typography>
                                    <Typography pt={1} pb={4} variant="regularText">With the new feature in Lung Function, Amilquer can now enjoy playing a simulation game! It's 10:30, and Amilquer is in the school's living room discussing a group project with his friends when his mobile phone rings. A notification appears on the display: 'Time to do the FEM'! 
                                    </Typography>
                                    <Typography pb={4} variant="regularText">
                                    Amilquer smiles and grabs his friends' attention: 'Do you want to see the village that I'm building?' — raising one eyebrow — 'Yes, show me what you got!'
                                    'First of all, every day, I have to do this type of maneuver to give wind to my windmills... because it’s the only source of energy that can produce electricity for my farms and buildings.' Their friends gather closer. 'So, your village runs entirely on renewable energies?' — asks the most nerdy one — 'Yes, Mr. Jorge, you can be damn sure' — everyone laughs.
                                    </Typography>
                                    <Typography pb={4} variant="regularText">
                                        Amilquer performs three perfectly forced expirations. — 'Calm down, Amilquer! The mills need wind, not tornados' — breathless, Amilquer responds: 'That’s one of the challenges! I have to do this every day, so my citizens have electricity to do their work on the farms and in other industries. Now, after this, I can see my beautiful village and start building new things on it!'. One of his friends looks at the 'city builder' and asks: 'How?'. 'How? Just like Sim City! As the mayor of the village, I receive their taxes/resources to raise and update all the structures. And then, I can even negotiate things with other fellow mayors, other players like me!'.
                                        All of his friends say in chorus: 'Wow, it’s amazing!'"
                                    </Typography>
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                    </ProjectSection>
                }
                secondProjectStep={
                    <ProjectSection topic="2. Concept">
                        <Typography variant="regularText">"Exploring themes ranging from race cars to vessels reminiscent of the Age of Discovery, various ideas were considered. Ultimately, the concept of a 'city builder' resonated most with me, offering an endless, engaging process. The progression of structures and technologies, coupled with strategic village planning, promises players a visually immersive journey rich in challenges and social interactions. This is particularly true when integrating the trading feature, allowing players to engage with others facing similar health challenges."</Typography>
                    </ProjectSection> 
                }
                thirdProjectStep={
                    <ProjectSection topic="3. Wireframing">
                        <Typography variant="regularText">
                            Developing task flows and user flows allows us to comprehend the user's journey in completing the FEM. This results in a comprehensive mapping of all functionalities and information embedded in the app.
                        </Typography>
                        <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEm9ZNkCqoUxySenf1v2VtM%2FTask-Flow-and-User-Flow%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D1xt2Blq4oJUjDshT-1" allowfullscreen></iframe>
                        <Typography variant="regularText">
                            "Bringing the concept to fruition was a deliberate and necessary endeavor. As you can observe in the version history, meticulous notes were taken, and various sketches were crafted. Through 9 iterations, numerous heuristic issues were identified and rectified, granting us a degree of assurance as we embark on creating the low-fi prototype."
                        </Typography>
                        <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fb4IsTcuZOQlTcWbYRuMF6V%2FUntitled%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DDcLA6DmSLOynRiYK-1" allowfullscreen></iframe>
                
                    </ProjectSection>
                }
                fourthProjectStep={
                    <ProjectSection topic="4. Prototype">
                    <Typography variant="regularText">
                        Hi-fi
                    </Typography>
                    <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fs0OQx8uxyLyBD134jB3W4f%2FHi-Fi-FEM%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D1xt2Blq4oJUjDshT-1" allowfullscreen></iframe>
                    <Typography variant="regularText">
                        Design System
                    </Typography>
                    <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fb4IsTcuZOQlTcWbYRuMF6V%2FUntitled%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DDcLA6DmSLOynRiYK-1" allowfullscreen></iframe>
                    </ProjectSection>       
                }
            />
        </ThemeProvider>
    </>
  )
}

export default MillerVillageTycoonPage
