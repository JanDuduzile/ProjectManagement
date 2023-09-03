import React  from "react";
import { MOCK_PROJECTS } from "./MockProect";

function ProjectsPage(){
    return (
    <>
        <h1>Projects</h1>
        <pre>{JSON.stringify(MOCK_PROJECTS, null,' ')}</pre>
    </>
    );
}

export default ProjectsPage;