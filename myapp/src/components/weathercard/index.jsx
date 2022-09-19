import './index.css'

const Weathercard = ({  date, temp, min, max }) => {
    return (
        <div>
            <div className="card">
                <p>{date}</p>
                <h1>{temp}</h1>
                <p>{min} - {max}</p>

            </div>
        </div>
    )
}

export default Weathercard;