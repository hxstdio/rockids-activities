/* eslint-disable */
import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
import winnerAudio from '../../assets/winner.mp3';
import './index.css';

const LuckRoll = forwardRef((props, ref) => {
    const { list } = props;
    const [off, setOff] = useState(1);
    const [liDom, setLiDom] = useState();
    const rollRef = useRef();
    const audioRef = useRef();

    useImperativeHandle(ref, () => ({
        start: (luckNumber, callback) => {
            if (!off) return;
            setOff(0);
            audioRef.current.play();

            rollRef.current.classList.add('luckRollActive')
            let _y = (luckNumber + props.list.length * 5) * 100;
            rollRef.current.style['-webkit-transition'] = ` all ${props.time || 3500}ms ease`;
            rollRef.current.style['-webkit-transform'] = `translate3d(0px, -${_y}%,0px)`;

            rollRef.current.addEventListener('webkitTransitionEnd', (e) => {
                rollRef.current.classList.remove('luckRollActive')
                e.target.style['-webkit-transition'] = '0ms ease';
                e.target.style['-webkit-transform'] = `translate3d(0px, -${luckNumber * 100}%,0px)`;
                setOff(1);
                callback(luckNumber);
            }, false);
        },

        flag: off
    }));

    useEffect(() => {
        let _li = new Array(6).fill('').map(() => {
            return (
                list.map((res2, index2) => {
                    return <li className="item" key={index2}>{res2}</li>
                })
            )
        });
        setLiDom(_li);
    }, [list.length]);

    return (
        <div className="luckRollBox" style={{ "width": props.width || '100%', "height": props.height || '100px' }}>
            <div className="luckRollitem">
                <ul className='list-container' ref={rollRef}>{liDom}</ul>
            </div>
            <audio ref={audioRef} src={winnerAudio} preload="auto" />
        </div>
    )

})

export default React.memo(LuckRoll);