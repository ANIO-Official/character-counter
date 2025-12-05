import type { StatsDisplayProps } from "../../type";


export default function StatsDisplay({stats, showReadingTime}:StatsDisplayProps){

    return (
        <>
            <div>
                <div>
                    <p className="stats-title">Characters</p>
                    <p className="stats-number">{stats.characterCount}</p>
                </div>
                <br/>
                <div>
                    <p className="stats-title">Words</p>
                    <p className="stats-number">{stats.wordCount}</p>
                    <p className="stats-limit">Min: 25 | Max: 100</p>
                </div>
                <br/>
                <div>
                    <p className="stats-title">Reading Time</p>
                    <p className="stats-number">{stats.readingTime}</p>
                </div>
            </div>
            <br/>
        </>
    )
}