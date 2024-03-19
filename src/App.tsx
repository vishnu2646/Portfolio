import './App.css'
import { About, Contact, Footer, Header, Home, Qualification, Scrolltop, Service, Skill, Testimonials } from './components';

function App() {

    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <About />
                <Skill />
                {/* <Service /> */}
                <Qualification />
                {/* <Testimonials /> */}
                <Contact />
            </main>
            <Footer />
            <Scrolltop />
        </>
    )
}

export default App
