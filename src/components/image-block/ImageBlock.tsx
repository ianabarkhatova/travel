import styled from "styled-components";
import {Image} from '../image/Image'
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

type ImageBlockProps = {
    imageSource?: string
};

export const ImageBlock = (props: ImageBlockProps) => {
    return (
        <ImageBlockContainer>
            <ImageText>Honeymoon Packages</ImageText>
            <ImageWrapper>
                <Image src={props.imageSource}/>
            </ImageWrapper>

        </ImageBlockContainer>
    );
};

const ImageBlockContainer = styled.div`
    max-width: 700px;
    display: flex;
`

const ImageText = styled.span`
    opacity: 0.1;
    writing-mode: vertical-lr; /* Text flows vertically from left to right */
    transform: rotate(180deg); /* Rotate the text 180 degrees */
    text-align: start;

    ${font({
        weight: 700,
        Fmax: 70,
        Fmin: 32,
        color: theme.colors.darkSmallerFont
    })}
`

const ImageWrapper = styled.div`
    max-height: 690px;
    max-width: 476px;
    position: relative;

    ${Image} {
        height: 100%;
        width: 100%;
        min-width: 240px;
        border-radius: 376px 376px 0 0;
        z-index: 9999;
    }

    &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: calc(100% + 20px);
        background: linear-gradient(45deg, #A7327AFF 100%, #3B90FBFF 100%);
        border: 2px solid transparent;
        border-radius: 376px 376px 0 0;
        border-bottom: transparent;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        position: absolute;
        right: -14px;
        bottom: 0;
        z-index: -1;
    }
`

