import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Explore from "@/app/components/Explore";
import NavBar from "@/app/NavBar";
import GetStarted from "@/app/components/GetStarted";
import WhatsNew from "@/app/components/WhatsNew";
import Insights from "@/app/components/Insights";
import Feedback from "@/app/components/Feedback";


export default function Home() {
    return (
        <div className="bg-primary-black overflow-hidden">
                <NavBar />
                <Hero />
            <div className="relative">
                <About />
                <div className="gradient-03 z-0" />
                <Explore />
            </div>
            <div className="relative">
                <GetStarted />
                <div className="gradient-03 z-0" />
                <WhatsNew />
            </div>
            <div className="relative">
                <Insights />
                <div className="gradient-03 z-0" />
                <Feedback />
            </div>
            {/*<Footer />*/}
        </div>
    )
}
