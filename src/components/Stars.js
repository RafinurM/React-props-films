import React from "react";



function Star(props) {
    let star = <li className="star">
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
            <path d="M0 0h18v18H0z" fill="none" />
        </svg>
    </li>;
    let starArr = [];
    for (let i = 0; i < props.stars; i++) {
        starArr.push(star)
    }
    return starArr
}


function Stars(props) {

    return (
        <ul className="card-body-stars u-clearfix">
            <Star stars={props.count > 5 || props.count < 1 || typeof props.count != 'number' ? 0 : props.count} />
        </ul>
    )
}

Stars.defaultProps = {
    count: 0,
}


export default Stars