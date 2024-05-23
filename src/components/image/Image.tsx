import React from 'react';

type ImagePropsType = {
    imageSource: string
    imageWidth?: string
    imageHeight?: string
    imageAlt?: string
}

export const Image = (props: ImagePropsType) => {
    return (
        <img src={props.imageSource} width={props.imageWidth || "72"} height={props.imageHeight || "65"} alt={props.imageAlt}
        />
    );
};

