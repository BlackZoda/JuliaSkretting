"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useEffect, useState } from 'react'

// const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount=false, showCount=true }) => {

    const [views, setViews] = useState(0);

    useEffect(() => {

        const incrementView = async () => {

            try {
                const { error } = await supabase
                    .rpc('increment', {
                        slug_text: slug,
                    });

                if (error) {
                    console.error(
                        "Error incrementing view count inside try block:",
                        error
                    );
                }

            } catch (error) {
                console.error(
                    "An error occured while incrementing the view count:",
                    error
                );
            }
        };

        if (!noCount) {
            incrementView();
        }

    }, [slug, noCount]);

    useEffect(() => {

        const getViews = async () => {
            try {
            const { data, error } = await supabase
                .from('views')
                .select('count')
                .match({slug: slug})
                .single()

            if (error) {
                console.error("Error getting views inside try block:", error);
            }

            setViews(data ? data.count : 1);

            } catch (error) {
                console.error("An error occured while getting views:", error);
            }
        };
        
        getViews();

    }, [slug]);

    if (showCount) {
        return (
            <div>{views} views</div>
        )
    } else {
        return null;
    }
}

export default ViewCounter;
