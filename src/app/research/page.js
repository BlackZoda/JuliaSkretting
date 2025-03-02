import React from 'react';
import Heading from '@/src/components/Elements/Heading';
import PresentationSection from '@/src/components/Elements/PresentationSection';
import ItemList from '@/src/components/Elements/ItemList';
export const metadata = {
    title: "Research",
    description: "My research projects and publications",
}

export default function ResearchPage() {
    return (
        <main className="flex flex-col items-start justify-left mx-10 p-5 md:px-24 sxl:px-32">
            <Heading level={2}>Research</Heading>

            <section>
                <Heading level={3}>Research in Progress</Heading>
                <ItemList items={[
                    "Macroeconomic and Industry Effects of Supply-Side Climate Policy",
                    "The Role of Oil Prices in Norwegian Petroleum Investments",
                    "Oil Price and U.S. Stock Market: New Evidence",
                    "Oil Windfalls and Regional Economic Performance in Russia"
                ]} />
            </section>

            <section>
                <Heading level={3}>Publications</Heading>
                <PresentationSection 
                    title="Reports for Commissions/Committees" 
                    items={[
                        "Utfordringer for lønnsdannelsen og norsk økonomi (2023)",
                        "COVID-19, tapt verdiskaping og finanspolitikkens rolle (2022)",
                        "COVID-19, tapt verdiskaping og finanspolitikkens rolle (2021)"
                    ]} 
                />
                <PresentationSection 
                    title="Academic Publications" 
                    items={[
                        "The Shale Oil Boom and the U.S. Economy: Spillovers and Time-Varying Effects (2024)",
                        "Fiscal policy, Macroeconomic Performance and Industry Structure in a Small Open Economy (2023)",
                        "News-Driven Inflation Expectations and Information Rigidities (2021)"
                    ]} 
                />
            </section>
        </main>
    );
};
