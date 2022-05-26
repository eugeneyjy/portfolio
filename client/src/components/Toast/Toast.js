import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useEffect } from 'react';

const FadeIn = keyframes`
    from {top: -100px; opacity: 0;}
    to {top: -60px; opacity: 1;}
`;

const FadeOut = keyframes`
    from {top: -60px; opacity: 1;}
    to {top: -100px; opacity: 0;}
`;

const ToastDiv = styled.div`
    visibility: hidden;
    min-width: 250px; /* Set a default minimum width */
    margin-left: -125px; /* Divide value of min-width by 2 */
    background-color: #333; /* Black background color */
    color: #fff; /* White text color */
    text-align: center; /* Centered text */
    border-radius: 2px; /* Rounded borders */
    padding: 16px; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    left: 50%; /* Center the snackbar */
    top: -60px; /* 30px from the bottom */
    &.show {
        visibility: visible; /* Show the snackbar */
        /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
        However, delay the fade out process for 2.5 seconds */
        animation: ${FadeIn} 0.5s, ${FadeOut} 0.5s 2.5s;
    }
`;

function Toast({ msg, duration, visible, setToastVisible }) {
    useEffect(() => {
        console.log("== visible", visible);
        if(visible) {
            setTimeout(() => {setToastVisible(false)}, duration);
        }
    }, [visible, duration, setToastVisible]);

    return (
        <ToastDiv className={visible ? 'show' : ''}>{msg}</ToastDiv>
    )
}

export default Toast;