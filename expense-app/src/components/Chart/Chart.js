import './Chart.css'
import ChartBar from './ChartBar';
function Chart(props) {

    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue);

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => {
                return <ChartBar 
                    key={dataPoint.label}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                    value={dataPoint.value}
                />
            })}
        </div>
    )
}

export default Chart;