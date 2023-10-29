/**
 * Main Component
 * 
 * Purpose:
 * The Main component serves as the primary layout structure for the webpage, orchestrating the sequence in which sub-components are displayed. It acts as the backbone of the content organization, ensuring that each distinct section of the website (services, past projects, about, testimonials, and contact) is presented in a logical and coherent order. This setup contributes to a navigable, user-friendly experience by segmenting the content into digestible blocks.
 *
 * Structure:
 * - The component uses a React fragment (<> ... </>) to group the sub-components without adding extra nodes to the DOM.
 * - The ServicesPage, PastProjects, About, Testimonials, and Contact components are nested within this fragment in a specific order that aligns with conventional website layouts.
 * - This ordering enhances the user's ability to navigate the site with ease, presenting the information in a flow that is typically expected by users (overview of services, showcase of work, company background, customer endorsements, and a way to make contact).
 *
 * Accessibility Considerations:
 * - Each sub-component should manage its accessibility concerns, ensuring that when they are composed together, the overall page remains accessible.
 * - The Main component should be coded to ensure that the sub-components follow a logical tab order for keyboard navigation.
 * - Landmark roles and ARIA labels may be applied to sub-components to delineate sections of content for assistive technologies if not already present.
 *
 * Usage:
 * This Main component is intended to be used as the content container for a single-page application (SPA) or the main content area of a larger website. It centralizes the core content sections and manages their rendering order.
 *
 * Notes:
 * - The Main component itself is purely structural and does not render any visible UI elements directly. Its responsibility is limited to the organization and rendering of sub-components.
 */
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