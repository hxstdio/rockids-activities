import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
import rockIcon from '../../assets/rock.png';
import './index.css';

const LuckRoll = forwardRef((props, ref) => {
    const [off, setOff] = useState(1); //防止重复点击开关
    const [liDom, setLiDom] = useState();
    const rollRef = useRef();

    useImperativeHandle(ref, () => ({
        start: (arr, fn) => { //开始抽奖
            if (!off) return;
            setOff(0);

            rollRef.current.classList.add('luckRollActive')
            let _y = (arr[0] + props.list.length * 5) * 100;
            rollRef.current.style['-webkit-transition'] = ` all ${props.time || 4000}ms ease`;
            rollRef.current.style['-webkit-transform'] = `translate3d(0px, -${_y}%,0px)`;

            rollRef.current.addEventListener('webkitTransitionEnd', (e) => {
                rollRef.current.classList.remove('luckRollActive')
                e.target.style['-webkit-transition'] = '0ms ease';
                e.target.style['-webkit-transform'] = `translate3d(0px, -${arr[0] * 100}%,0px)`;
                setOff(1);
            }, false);
        },

        flag: off
    }));

    useEffect(() => {
        let _li = new Array(6).fill('').map((res, index) => {
            return (
                props.list.map((res2, index2) => {
                    return <li className="item" key={index2}>{res2}</li>
                })
            )
        });
        setLiDom(_li);
    }, []);

    return (
        <div className="luckRollBox" style={{ "width": props.width || '600px', "height": props.height || '100px' }}>
            <div className="luckRollitem">
                <ul className='list-container' ref={rollRef}>{liDom}</ul>
            </div>
            <img src={rockIcon} className="rock-btn" onClick={props.startHandler} />
        </div>
    )

})

export default LuckRoll;

// export default React.memo(LuckRoll, () => {
//     return true
// });