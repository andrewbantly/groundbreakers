import { ServicesPage } from "./services"
import { PastProjects } from "./projects"
import { Contact } from "./contact"
import { Testimonials } from "./testimonials"
import { About } from "./about"

export function Main() {
    return(
        <>
        <ServicesPage/>
        <PastProjects/>
        <About/>
        <Testimonials/>
        <Contact/>
        </>
    )
}