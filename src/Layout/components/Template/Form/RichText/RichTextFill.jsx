import React, { useRef, useState } from 'react';

import { TYPE_RICH_TEXT_FUNC } from '../../../../../config/constant';
import boldIcon from '../../../../../asset/images/bold.png'
import centerIcon from '../../../../../asset/images/center.png'
import classNames from 'classnames/bind';
import hightlighterIcon from '../../../../../asset/images/hightlighter.png'
import italicIcon from '../../../../../asset/images/italics.png'
import leftIcon from '../../../../../asset/images/left.png'
import rightIcon from '../../../../../asset/images/right.png'
import styles from './RichTextFill.module.scss'
import underlineIcon from '../../../../../asset/images/underline.png'

const cx = classNames.bind(styles)

const RichTextFill = ({ value, label }) => {
    const [data, setData] = useState(value ? value : '');
    const [hover, setHover] = useState(false);
    const ref = useRef();
    const onChange = (e) => {
        console.log(e);
    }

    const itemFunction = [
        { type: TYPE_RICH_TEXT_FUNC.BOLD, property: 'bold', result: 'null', urlImage: boldIcon }
        , { type: TYPE_RICH_TEXT_FUNC.ITALIC, property: 'italic', result: 'null', urlImage: italicIcon }
        , { type: TYPE_RICH_TEXT_FUNC.UNDERLINE, property: 'underline', result: 'null', urlImage: underlineIcon }
        , { type: TYPE_RICH_TEXT_FUNC.ALIGN_CENTER, property: 'justifyCenter', result: 'null', urlImage: centerIcon, extraValue: 'center' }
        , { type: TYPE_RICH_TEXT_FUNC.ALIGN_LEFT, property: 'justifyLeft', result: 'null', urlImage: leftIcon, extraValue: 'left' }
        , { type: TYPE_RICH_TEXT_FUNC.ALIGN_RIGHT, property: 'justifyRight', result: 'null', urlImage: rightIcon, extraValue: 'right' }
        , { type: TYPE_RICH_TEXT_FUNC.HIGHLIGHT, property: 'backColor', result: 'yellow', urlImage: hightlighterIcon }
    ]

    const [active, setActive] = useState(TYPE_RICH_TEXT_FUNC.ALIGN_LEFT);
    const [focus, setFocus] = useState(false);
    const handleClick = (item, index) => {
        const selectedText = window.getSelection().toString().trim();
        if (selectedText !== "") {
            console.log(item.property, item.result);
            document.execCommand(item.property, false, item.result);


            const foundElement = [TYPE_RICH_TEXT_FUNC.ALIGN_CENTER,
            TYPE_RICH_TEXT_FUNC.ALIGN_LEFT,
            TYPE_RICH_TEXT_FUNC.ALIGN_RIGHT
            ].find(element => element === item.type);
            if (foundElement) {
                setActive(item.type)
            }
        } else {
            if (item.extraValue) {
                const otherDiv = document.getElementById('RichText');
                otherDiv.style.textAlign = item.extraValue;

                const foundElement = [TYPE_RICH_TEXT_FUNC.ALIGN_CENTER,
                TYPE_RICH_TEXT_FUNC.ALIGN_LEFT,
                TYPE_RICH_TEXT_FUNC.ALIGN_RIGHT
                ].find(element => element === item.type);
                if (foundElement) {
                    setActive(item.type)
                }
            }
        }
    }

    return (
        <div className={cx('container')}
            onFocus={() => setFocus(true)}
            onBlur={() => {
                if (!hover) {
                    setFocus(false)
                } else {
                    ref.current.focus()
                }
            }}
        >
            {focus && <div className={cx('wrapper-function')}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {
                    itemFunction.map((item, index) => {
                        return <div
                            key={item.type}
                            onClick={() => handleClick(item, index)}
                            className={cx('wrapper-button') + " " + (active == item.type ? cx("wrapper-button_active") : "")}
                        >
                            <img src={item.urlImage} className={cx('icon')} />
                        </div>

                    })
                }
            </div>}
            <div>
                <div>{label}</div>
                <div id='RichText' className={cx('rich-text')}
                    contentEditable={true}
                    onInput={onChange}
                    ref={ref}
                >
                    {data}
                </div>
            </div>
            <div className={cx('icon')}>123</div>
        </div>
    );
};

export default RichTextFill;