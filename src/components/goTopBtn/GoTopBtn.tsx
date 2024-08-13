import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";
import {useEffect, useState} from "react";


type Props = {};

export const GoTopBtn = (props: Props) => {
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])


    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={'arrow-up'} height={'24px'} width={'24px'} viewBox={'0 0 24 24'}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(223, 105, 81, 0.5);
    backdrop-filter: blur(20px);
    padding: 10px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`