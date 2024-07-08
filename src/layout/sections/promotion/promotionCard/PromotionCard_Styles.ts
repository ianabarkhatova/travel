import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Image} from '../../../../components/image/Image'

const PromotionCard = styled.div`
    width: 230px;
    height: 236px;
    
    position: relative;
    
    ${Image} {
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }
`
const Price = styled.div`
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

const PriceText = styled.tspan`
    color: ${theme.colors.lightFont};
    font-size: 16px;
    font-weight: 300;
`

export const S = {
    PromotionCard,
    Price,
    PriceText
}