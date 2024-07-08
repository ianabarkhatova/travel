import React from 'react';
import partner1 from "../../../assets/images/partners/partner-1.png"
import partner2 from "../../../assets/images/partners/partner-2.png"
import partner3 from "../../../assets/images/partners/partner-3.png"
import partner4 from "../../../assets/images/partners/partner-4.png"
import partner5 from "../../../assets/images/partners/partner-5.png"
import {Image} from "../../../components/image/Image";
import {Container} from "../../../components/common/Container";
import {S} from './Partners_Styles'


const PartnersData = [
    {
        src: partner1,
        imgAlt: "fly emirates logo",
        imgWidth: "143px",
        imgHeight: "50px",
    },

    {
        src: partner2,
        imgAlt: "trivago logo",
        imgWidth: "165px",
        imgHeight: "50px",
    },

    {
        src: partner3,
        imgAlt: "airbnb logo",
        imgWidth: "160px",
        imgHeight: "50px",

    },

    {
        src: partner4,
        imgAlt: "turkish airlines logo",
        imgWidth: "172px",
        imgHeight: "50px",
    },
    {
        src: partner5,
        imgAlt: "swiss logo",
        imgWidth: "221px",
        imgHeight: "50px",
    }
]


export const Partners = () => {
    return (
        <S.Partners>
            <Container>
                <S.MainContent>
                    {PartnersData.map((p, index) => {
                        return (
                            <Image src={p.src}
                                   imgAlt={p.imgAlt}
                                   imgWidth={p.imgWidth}
                                   imgHeight={p.imgHeight}
                                   key={index}
                            />
                        )
                    })}
                </S.MainContent>
            </Container>
        </S.Partners>
    );
};





