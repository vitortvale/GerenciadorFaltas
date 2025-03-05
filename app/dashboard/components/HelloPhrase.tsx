import React from "react";

export default function HelloPhrase(props: string) {
    return(
        <div>
            <h1>Olá, {props}</h1>
        </div>
    )
}