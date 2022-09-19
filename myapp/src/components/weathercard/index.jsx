import './index.css'
import moment from 'moment';

const Weathercard = ({  date, temp, min, max }) => {
    return (
        <div className='main'>
            <div className="card">
                {/* <p>{moment(date).format('MMMM Do YYYY, h:mm a')}</p> */}
                <p>{moment(date).format('ll')}</p>
                <p>{moment(date).format(' h:mm a')}</p>
                <h1>{`${parseInt(temp)}°C`}</h1>
                <p>{`${min}°C`} - {`${max}°C`}</p>

            </div>
        </div>
    )
}

export default Weathercard;