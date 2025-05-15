"use client";
import React, { useState ,  useEffect } from 'react'

import Link from 'next/link';
import Image from 'next/image';

import { FaGreaterThan } from "react-icons/fa6";
// import { MdExpandMore } from "react-icons/md";
// import { MdExpandLess } from "react-icons/md";

type Team = {
    teamID: string;
    teamName: string | null;
    summary: number | null;
    percentage: string;
}

export default function Leaderboard() { 
    const [ team, setTeam ] = useState<Team[]>([]);
    const [ selectedTeam, setSelectedTeam] = useState(Array(6).fill(false));

    // useEffect(()=>{
    //     //Fetch Data Here.
    // })

    return (
        <>
            <section className="min-h-screen bg-black pt-[15vh] pb-[10vh]">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mb-6">
                        <nav className="flex flex-row text-sm text-gray-200 items-center gap-x-[0.5vw]" >
                            <Link href="/" className="hover:underline ">Tech camp</Link>
                            <FaGreaterThan className='text-xs'/>
                            <span className='text-xs text-gray-300'>Scoreboard</span>
                        </nav>
                    </div>
                    {/* Leaderboard Table */}
                    <h1 className="text-3xl font-bold my-[3vh]">Leaderboard</h1>

                    <div className="bg-secondaryBlue p-4 rounded-xl shadow-xl">
                        <ul className='flex flex-col px-[0.5vw] rounded-xl gap-y-[1vh]'>
                            <li 
                                key='header'
                                className='flex flex-row justify-between pr-[33px] items-center my-[1vh]'>
                                <span className='text-left w-full pl-[2vw] text-xl font-semibold text-white'>
                                    <h1>
                                        Positions
                                    </h1>
                                </span>
                                <span className='text-right w-full text-base font-semibold text-gray-100'>
                                    <h1>
                                        Score
                                    </h1>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    ) 
}