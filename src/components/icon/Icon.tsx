import React from 'react';
import iconsSprite from '../../assets/icons/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.width || "72"}
             height={props.height || "72"}
             viewBox={props.viewBox || "0 0 72 72"}
             fill={props.fill || "#FFFFFF"}
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

