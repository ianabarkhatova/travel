import React from 'react';
import styled from "styled-components";
import {Dropdown} from "../dropdown/Dropdown";

const dropdownData = [
    {
        dropdownDataId: "services",
        optionValue: "Services",
        optionValue1: "Honeymoon Packages",
        optionValue2: "Tours Packages",
        optionValue3: "Musical Events",
        optionValue4: "Build Package",
    }
]

export const NavBar = () => {
    return (
        <StyledNavBar>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>

                {dropdownData.map((d, index) => {
                        return <Dropdown dropdownDataId={d.dropdownDataId} key={index}
                                         optionValue={d.optionValue}
                                         optionValue1={d.optionValue1}
                                         optionValue2={d.optionValue2}
                                         optionValue3={d.optionValue3}
                                         optionValue4={d.optionValue4}
                        />
                    }
                )}

                <li>
                    <a href="">Upcoming Packages</a>
                </li>
            </ul>
        </StyledNavBar>
    );
};

const StyledNavBar = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`

