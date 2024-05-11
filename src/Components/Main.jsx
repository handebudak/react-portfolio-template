import { Banner } from "./Banner";
import { AboutMe } from "./AboutMe";
import { Experience } from "./Experience";
import { Projects } from "./Projects";

export const Main = () => {
  return (
    <div className="bg-background-img  bg-black bg-cover">
      <div>
        <main className="  px-6 lg:px-0 sm:[620px] lg:w-[720px] mx-auto flex flex-col">
          <Banner />

          <AboutMe />

          <Experience />

          <Projects />
        </main>
      </div>
    </div>
  );
};
