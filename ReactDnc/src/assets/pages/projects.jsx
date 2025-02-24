import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Banner from "../../components/banner/banner"
import ProjectsList from "../../components/projectsList/projectsList"
import { useContext } from 'react'

//CONTEXT
import { AppContext } from "../../components/contexts/appContext"

function Projects() {
    const appContext = useContext(AppContext);
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.projects}  image="projects.jpg"/>
            <div className="container">
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}

export default Projects