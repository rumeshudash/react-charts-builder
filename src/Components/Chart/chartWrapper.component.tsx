import React from 'react';
import { CHART_DATA } from '../../Dtos/chart';

interface CHART_WRAPPER_PROPS {
    data: CHART_DATA;
    className?: string;
    children: React.ReactElement;
}

/**
 * ChartWrapper Component to wrap any chart component.
 * 
 * @param props CHART_WRAPPER_PROPS
 * @returns ReactElement
 */
const ChartWrapper:React.FC<CHART_WRAPPER_PROPS> = props => {
    const { data, className, children } = props;

    return (
        <div className={`chart-wrapper ${className??''}`}>
            <div className={`chart-content card ${data.className??''}`}>
                <div className='page-bar'>
                    <div className='title'>
                        <h1 className=''>{data.name}</h1>
                        <p className=''>{data.description}</p>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default ChartWrapper
