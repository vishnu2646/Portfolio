import './App.css'
import { About, Contact, Footer, Header, Home, Qualification, Scrolltop, Skill } from './components';

function App() {

    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <About />
                <Skill />
                <Qualification />
                <Contact />
            </main>
            <Footer />
            <Scrolltop />
        </>
    )
}

export default App
