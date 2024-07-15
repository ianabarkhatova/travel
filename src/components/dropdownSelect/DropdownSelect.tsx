import Select from 'react-select';
import {dropdownSelectStyles} from './DropdownSelect_Styles';



export const DropdownSelect = (props: { options: Array<string>, placeholder: string }) => {
    const options = props.options.map((item) => ({
        value: item,
        label: item,
    }));

    return (
        <Select
            styles={dropdownSelectStyles}
            options={options}
            placeholder={props.placeholder}
        />
    );
};




