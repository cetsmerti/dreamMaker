import React, { useEffect, useState } from 'react'
import star from './star.svg'
import RateProps from './Rate.props'
import styles from './Rate.module.css'
import selectStar from './activeStar.svg'
export const Rate = ({ setRate, rate, ...props }: RateProps): JSX.Element => {
    const [starMass, setStarMass] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    useEffect(() => {
        construktorStar(rate)
    }, [rate]);

    const construktorStar = (rate: number): void => {
        const updatStar = starMass.map((item: JSX.Element, id: number) => {
            const imgSelector = rate < id ? star : selectStar
            return (
                <span
                    onClick={() => changeRate(id)}
                    onMouseLeave={() => changeDisplay(rate)}
                    onMouseEnter={() => changeDisplay(id)}
                    key={id}>
                    <img src={imgSelector} />
                </span>
            )
        })
        setStarMass(updatStar)
    };

    const changeRate = (i: number) => {
        setRate(i++)
    }
    const changeDisplay = (i: number) => {
        construktorStar(i++)
        setRate(--i)
    }

    return (
        <div className={styles.rate} {...props}>
            {starMass.map((item, i) => (<span key={i}>{item}</span>))}
        </div>
    );
}