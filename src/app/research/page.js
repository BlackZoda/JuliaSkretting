import React from 'react';
import Link from 'next/link';
import Heading from '@/src/components/Elements/Heading';
import PresentationSection from '@/src/components/Elements/PresentationSection';
import ItemList from '@/src/components/Elements/ItemList';

export const metadata = {
    title: "Research",
    description: "My research projects and publications",
}

export default async function ResearchPage() {
    return (
        <main className="flex flex-col items-start justify-left mx-10 p-5 md:px-24 sxl:px-32">
            <Heading level={2}>Research</Heading>

            <section>
                <Heading level={3}>Research in Progress</Heading>
                <ItemList>
                    <Link 
                        href="https://www.ssb.no/en/nasjonalregnskap-og-konjunkturer/konjunkturer/artikler/macroeconomic-and-industry-effects-of-supply-side-climate-policy" 
                        className="hover:text-accent dark:hover:text-accentDark"
                        target="_blank" rel="noopener noreferrer">
                        Macroeconomic and Industry Effects of Supply-Side Climate Policy</Link>
                    <Link href="https://www.ssb.no/en/energi-og-industri/olje-og-gass/artikler/the-role-of-oil-prices-in-norwegian-petroleum-investments"
                        className="hover:text-accent dark:hover:text-accentDark"
                        target="_blank" rel="noopener noreferrer">
                        The Role of Oil Prices in Norwegian Petroleum Investments</Link>
                    <span>Oil Price and U.S. Stock Market: New Evidence</span>
                    <Link href="https://biopen.bi.no/bi-xmlui/handle/11250/3012049" className="hover:text-accent dark:hover:text-accentDark"
                        target="_blank" rel="noopener noreferrer">
                        Oil Windfalls and Regional Economic Performance in Russia</Link>
                </ItemList>
            </section>
            <section>
                <Heading level={3}>Publications</Heading>
                <PresentationSection title="Academic Publications">
                    <Link href="https://onlinelibrary.wiley.com/doi/full/10.1002/jae.3059"
                        className="hover:text-accent dark:hover:text-accentDark"
                        target="_blank" rel="noopener noreferrer">
                        The Shale Oil Boom and the U.S. Economy: Spillovers and Time-Varying Effects (2024)</Link>
                    <Link href="https://www.sciencedirect.com/science/article/pii/S0164070423000241" className="hover:text-accent dark:hover:text-accentDark"
                        target="_blank" rel="noopener noreferrer">
                        Fiscal policy, Macroeconomic Performance and Industry Structure in a Small Open Economy (2023)</Link>
                    <Link href="https://www.sciencedirect.com/science/article/pii/S030439322030026X" className="hover:text-accent dark:hover:text-accentDark"
                        target="_blank" rel="noopener noreferrer">
                        News-Driven Inflation Expectations and Information Rigidities (2021)</Link>
                </PresentationSection>
                <PresentationSection title="Reports for Commissions/Committees">
                    <span>Utfordringer for lønnsdannelsen og norsk økonomi (2023)</span>
                    <span>COVID-19, tapt verdiskaping og finanspolitikkens rolle (2022)</span>
                    <span>COVID-19, tapt verdiskaping og finanspolitikkens rolle (2021)</span>
                </PresentationSection>
            </section>
        </main>
    );
};
