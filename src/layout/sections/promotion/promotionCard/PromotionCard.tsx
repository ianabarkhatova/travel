import styled from "styled-components";
import {Image} from '../../../../components/image/Image'
import {theme} from "../../../../styles/Theme";

type PromotionCardPropsType = {
    imgSource: string
    imgAlt: string
    price: string
};

export const PromotionCard = (props: PromotionCardPropsType) => {
    return (
        <StyledPromotionCard>
            <Image src={props.imgSource}
                   alt={props.imgAlt}/>
            <StyledPrice>
                <StyledPriceText>{props.price}</StyledPriceText>
            </StyledPrice>
        </StyledPromotionCard>
    );
};

const StyledPromotionCard = styled.div`
    width: 230px;
    height: 236px;
    
    position: relative;
    
    ${Image} {
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }
`
const StyledPrice = styled.div`
    width: 82px;
    height: 35px;
    border-radius: 46px;
    background: linear-gradient(135.62deg, rgb(255, 114, 85) 8.931%, rgb(186, 78, 56) 100%);

    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    top: 15px;
    right: 20px;
    
`

const StyledPriceText = styled.tspan`
    color: ${theme.colors.lightFont};
    font-size: 16px;
    font-weight: 300;
`