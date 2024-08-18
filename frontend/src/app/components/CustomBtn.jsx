import React from 'react'
import { CustomButton } from '../style/Button.style'

const CustomBtn = ({ children, variant, onClick, textColor, bgColor }) => {
    return (
        <CustomButton variant={variant}
            className='btn'
            onClick={onClick}
            Fontcolor={textColor}
            bgColor={bgColor}

        >
            {children}
        </CustomButton>
    )
}

export default CustomBtn;