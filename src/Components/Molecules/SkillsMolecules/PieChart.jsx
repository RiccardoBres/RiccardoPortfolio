import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import CustomParagraph from '../../Atoms/CustomParagraph';

const PieChart = ({ data, labels, description, colors }) => {
    const chartRef = useRef(null);
    let myChart;

    useEffect(() => {
        if (!myChart) {
            const ctx = chartRef.current.getContext('2d');
            myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            data: data,
                            backgroundColor: colors,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white' 
                            }
                        }
                    }
                }, 
            });
        }
        return () => {
            if (myChart) {
                myChart.destroy();
                myChart = null;
            }
        };
    }, [data, labels, colors]); 

    return (
        <div style={{ position: 'relative', maxWidth: '300px' }}> 
            <canvas ref={chartRef} style={{ maxWidth: '100%' }} /> 
        </div>
    );
};

export default PieChart;
