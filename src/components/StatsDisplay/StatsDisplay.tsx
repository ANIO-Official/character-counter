import './StatsDisplay.css'
import type { StatsDisplayProps } from "../../type";


export default function StatsDisplay({stats, showReadingTime}:StatsDisplayProps){

    return (
        <>
            <div className='stats-container'>
                <div className='stat-container-character-count'>
                    <p className="stats-title">Characters</p>
                    <p className="stats-number">{stats.characterCount}</p>
                </div>
                <br/>
                <div className='stat-container-word-count'>
                    <p className="stats-title">Words</p>
                    <p className="stats-number">{stats.wordCount}</p>
                </div>
                <br/>
                <div className='stat-container-reading-time' hidden={!showReadingTime}>
                    <p className="stats-title">Reading Time</p>
                    <p className="stats-number">{stats.readingTime}ms</p>
                </div>
            </div>
            <br/>
        </>
    )
}