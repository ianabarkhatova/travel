import {Image} from '../../../../components/image/Image'
import {S} from './PromotionCard_Styles'

type PromotionCardPropsType = {
    imgSource: string
    imgAlt: string
    price: string
};

export const PromotionCard = (props: PromotionCardPropsType) => {
    return (
        <S.PromotionCard>
            <Image src={props.imgSource}
                   alt={props.imgAlt}/>
            <S.Price>
                <S.PriceText>{props.price}</S.PriceText>
            </S.Price>
        </S.PromotionCard>
    );
};

