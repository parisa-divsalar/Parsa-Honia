import React, { useEffect, useState } from 'react'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CustomButton from "@/components/ui/CustomButton";

interface scrollTabModel {
  title: string
  id: string
  onClick: (event: string) => void
}


const ScrollTab = ({id , title ,onClick }:scrollTabModel) => {
  const [isActive, setIsActive] = useState('');
  const HEADER_HEIGHT = 150;


  const selectTab = (id:string) => {
    const element = document.querySelector(`#${id}`)
    const elementPosition = element?.getBoundingClientRect().top;
    const offsetPosition = elementPosition ? elementPosition - HEADER_HEIGHT : 0
    onClick(id)
    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth"
    });

    setIsActive(id)
  }

  return (
    <CustomButton
	size='small'
	color='primary'
	variant='contained'
	endIcon={<ArrowBackRoundedIcon/>}
      onClick={()=>selectTab(id)}
    >
      {title}
    </CustomButton>
  )
}

export default ScrollTab
