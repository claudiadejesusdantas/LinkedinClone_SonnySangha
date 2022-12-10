import React from "react";
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className='widgets__articleLeft'>
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>

            <div className='widgets__articleRight'>
                {newsArticle('Olá eu sou um título', 'Olá eu sou uma descrição.')}
                {newsArticle('Hello I am Title', 'Hello I am a description.')}
                {newsArticle('Olá eu sou um título', 'Olá eu sou uma descrição.')}
                {newsArticle('Olá eu sou um título', 'Olá eu sou uma descrição.')}
                {newsArticle('Olá eu sou um título', 'Olá eu sou uma descrição.')}
            </div>
        </div>
    )
}

export default Widgets