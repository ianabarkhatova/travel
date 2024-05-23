import React from 'react';
import styled from "styled-components";
import {Package} from "../../../components/package/Package";

const promotionData = [
    {
        description: "Promotion",
        title: "We Provide You Best Europe Sightseeing Tours",
        text: "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo      eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!",
    }
]

export const Promotion = () => {
    return (
        <StyledPromotion>
            {promotionData.map((p,index) => {
                return <Package
                        description={p.description} key={index}
                        title={p.title}
                        text={p.text}
                />
            })}

        </StyledPromotion>
    );
};

const StyledPromotion = styled.div`
    min-height: 751px;
    background-color: rgba(255,206,92,0.79);
`

