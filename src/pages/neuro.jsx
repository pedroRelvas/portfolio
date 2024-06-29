import React from 'react';
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import LayoutProject from '../components/LayoutProject';
import ProjectHeader from '../components/ProjectHeader';
import ProjectBasicInfo from '../components/ProjectBasicInfo';
import ProjectSteps from '../components/ProjectSteps';
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from '../../themes/mui-theme';


const NeuroPage = () => {
    return (
    <>
        <ThemeProvider theme={theme}>
                <LayoutProject
                    header={
                        <ProjectHeader
                            projectTitle='Neuropsychological: Digital and remote application of Cognitive Deficit Screening Tests' 
                            entities='Fraunhofer & Universidade do Porto' 
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
                                info="Neuro.">
                            </ProjectBasicInfo>
                            <ProjectSteps topic="1. Research & Interviews">
                            </ProjectSteps>
                        </Box>
                    }
                />
        </ThemeProvider>
    </>
    )
}

export default NeuroPage
