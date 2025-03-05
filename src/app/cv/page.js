import React from 'react';
import PresentationSection from '@/src/components/Elements/PresentationSection';
import ItemList from '@/src/components/Elements/ItemList';
import PresentationTable from '@/src/components/Elements/PresentationTable';
import Heading from '@/src/components/Elements/Heading';
export const metadata = {
    title: "CV",
    description: "My curriculum vitae",
}

export default function CVPage() {
    return (
        <main className="flex flex-col items-start justify-left mx-10 p-5 md:px-24 sxl:px-32">
            <Heading level={2}>
                Curriculum Vitae
            </Heading>
            <section>
                <h4 className="mt-2 font-semibold text-base sm:text-lg lg:text-xl
                        text-dark dark:text-light mb-1">
                    Forsker, Gruppe for makroøkonomi / Researcher at Unit for Macroeconomics
                </h4>
                <p className="mt-2 text-dark dark:text-light">Statistisk sentralbyrå / Statistics Norway</p>
                <p className="mt-1 text-dark dark:text-light"><bold className="font-semibold">Mob:</bold> (+47) 46 41 07 72</p>
                <p className="mt-1 text-dark dark:text-light"><bold className="font-semibold">E-mail:</bold> <a href="mailto:julia.skretting@ssb.no" className="hover:text-accent dark:hover:text-accentDark">julia.skretting@ssb.no</a></p>
                <p className="mt-1 text-dark dark:text-light"><bold className="font-semibold">LinkedIn:</bold> <a href="https://www.linkedin.com/in/julia-skretting-b01112194/" className="hover:text-accent dark:hover:text-accentDark">julia.skretting</a></p>
            </section>

            <Heading level={3}>
                Employment
            </Heading>
            <PresentationTable 
                columns={["Period", "Role", "Employer"]}
                data={[
                    { period: "Aug 2020 &ndash;", role: "Researcher", employer: "Unit for Macroeconomics, Statistics Norway" },
                    { period: "Oct 2021 &ndash;", role: "Adjunct Researcher", employer: "Department of Economics, BI Norwegian Business School" },
                    { period: "Feb 2020 &ndash; Sep 2021", role: "Project Coordinator", employer: "BI Norwegian Business School" },
                    { period: "Jan 2019 &ndash; Jun 2019", role: "Secretary", employer: "The Research Council of Norway" },
                    { period: "Aug 2014 &ndash; Jun 2020", role: "PhD in Economics", employer: "Center of Applied Macro and Commodity Prices (CAMP), BI Norwegian Business School" },
                ]}
            />

            <Heading level={3}>
                Education
            </Heading>
            <PresentationTable 
                columns={["Period", "Degree", "Institution"]}
                data={[
                    { period: "Aug 2014 &ndash; Jun 2020", education: "PhD in Economics, Center of Applied Macro and Commodity Prices (CAMP)", institution: "BI Norwegian Business School" },
                    { period: "Aug 2012 &ndash; Jun 2014", education: "MSc Economics and Business Administration", institution: "NHH Norwegian School of Economics" },
                    { period: "Aug 2009 &ndash; Jun 2012", education: "BSc in Business and IT", institution: "University of Nordland" },
                    { period: "Aug 2010 &ndash; Jun 2011", education: "Interior Designer", institution: "Interior School" },
                ]}
            />

            <Heading level={3}>
                Presentations
            </Heading> 
            <Heading level={4}>
                Policy
            </Heading>
            <Heading level={4}>
                Policy
            </Heading>
            <PresentationSection title="Policy">
                <p>Presenter at Economic Survey Press Conference, Statistics Norway</p>
                <p>Invited speaker, 'Fagdag' at Nærings- og fiskeridepartementet (NFD). October 2023</p>
                <p>Talk at Business Breakfasts at Netherlands Embassy. 2023</p>
                <p>Frequent presentations of Economic Survey at Arbeids- og Inkluderingsdepartementet, Norges Bank, Finansdepartementet.</p>
                <p>Kåkånomics, October 2024</p>
            </PresentationSection>
            <Heading level={4}>
                Academic Conferences
            </Heading>
            <PresentationSection title="Academic Conferences">
                <p>International Association for Applied Econometrics (IAAE) Annual Conference, Oslo, June, 2023</p>
                <p>Annual Symposium of the Society for Nonlinear Dynamics and Econometrics, Dallas, March, 2019</p>
                <p>The International Conference on Computing in Economics and Finance, Milano, June, 2018</p>
                <p>International Conference on The Economics of Oil, Rio de Janeiro, February-March, 2018</p>
                <p>The Meeting of the Norwegian Association of Economists, Bergen, January, 2018</p>
            </PresentationSection>
            <Heading level={4}>
                Media
            </Heading>
            <PresentationSection title="Media">
                <p>Op-eds (Kronikker/innlegg): Dagens Næringsliv, Aftenposten</p>
                <p>TV Interviews: NRK1 Nyheter, TV2 Nyhetskanalen Nyhetene</p>
                <p>Other interviews, coverage of research, etc: E24, Aftenposten, Finansavisen</p>
            </PresentationSection>

            <Heading level={3}>
                Teaching Experience
            </Heading>
            <p className="text-dark dark:text-light">Research assistant for Master of Science Courses: Business Cycles, Applied Data Analytics, Numerical Methods, Multivariate Data Analysis.</p>

            <Heading level={3}>
                Personal Interests
            </Heading>
            <p className="text-dark dark:text-light">Climbing, Interior Design, Yoga, Painting.</p>
        </main>
    );
};