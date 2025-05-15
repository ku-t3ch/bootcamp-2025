import React from 'react';

import Leaderboard from '@/components/Leaderboard';

export default function Page() {
    console.log("Clear here");
    return (
        <>
            <section className="min-h-screen bg-secondary-texture bg-center">
                    <Leaderboard />
            </section>
        </>
    )
}