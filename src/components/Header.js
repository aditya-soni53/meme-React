import React from "react"
import img from "../../src/troll-face.png"


export default function Header() {
    return (
        <header className="header">
            <img 
                src={img} 
                alt="Meme smiling face"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project"> Project</h4>
        </header>
    )
}