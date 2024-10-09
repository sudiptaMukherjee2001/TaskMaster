import React from 'react'
import { CustomButton } from '../style/Button.style'

const CustomBtn = ({ children, variant, onClick, textColor, bgColor, width, fontWeight }) => {
    return (
        <CustomButton variant={variant}
            className='btn'
            onClick={onClick}
            fontcolor={textColor}
            bgcolor={bgColor}
            width={width}
            fontWeight={fontWeight}

        >
            {children}
        </CustomButton>
    )
}

export default CustomBtn;