"use client"
import React from "react";
import GuessList from "../components/guesslist";
import Buttons from "../components/alphabuttons";

export default function PlayGame() {
    return (
        <main>
            <div>
                <Buttons/>
            </div>

            <div>
                <GuessList/>
            </div>
        </main>
    )
}