import React from 'react'
import TimelineItem from './timelineItem/TimelineItem';


const Timeline = ({medicalRecord}) => {
    
    // const timelineData = [
    //     {
    //         text: 'Wrote my first blog post ever on Medium',
    //         date: 'March 03 2017',
    //         category: {
    //             tag: 'medium',
    //             color: '#018f69'
    //         },
    //         link: {
    //             url:
    //                 'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
    //             text: 'Read more'
    //         }
    //     },
    //     {
    //         text: 'Wrote my first blog post ever on Medium',
    //         date: 'February 03 2017',
    //         category: {
    //             tag: 'medium',
    //             color: '#018f69'
    //         },
    //         link: {
    //             url:
    //                 'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
    //             text: 'Read more'
    //         }
    //     },
    //     {
    //         text: 'Wrote my first blog post ever on Medium',
    //         date: 'January 03 2017',
    //         category: {
    //             tag: 'medium',
    //             color: '#018f69'
    //         },
    //         link: {
    //             url:
    //                 'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
    //             text: 'Read more'
    //         }
    //     },
    //     {
    //         text: 'Wrote my first blog post ever on Medium',
    //         date: 'January 01 2017',
    //         category: {
    //             tag: 'medium',
    //             color: '#018f69'
    //         },
    //         link: {
    //             url:
    //                 'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
    //             text: 'Read more'
    //         }
    //     }
    // ];

    return (
        <>
            <div className="timeline-container">
                {medicalRecord && medicalRecord.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </>
    )
}

export default Timeline
