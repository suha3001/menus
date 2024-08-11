import Image from 'next/image'
import React from 'react'
import "../../app/globals.css";
import { Box, Tab, Tabs } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { WineBar } from '@mui/icons-material';
import LunchDiningIcon from '@mui/icons-material/LunchDining';


const Sabira = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  console.log(value)
  return (
    <div className='bg-white'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', padding: 0 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="scrollable auto tabs example"
          scrollButtons="auto"
          variant='scrollable'
          className='p-0'
          
        >
          <Tab icon={<MenuIcon />} iconPosition="start" label="ทั้งหมด" className={`${value === 0 && 'font-bold bg-sky-100'} `}/>
          <Tab icon={<WineBar />} iconPosition="start" label="เครื่องดื่ม" className={`${value === 1 && 'font-bold'} `} />
          <Tab icon={<LunchDiningIcon />} iconPosition="start" label="ทานเล่น" className={`${value === 2 && 'font-bold'} `} />
        </Tabs>
      </Box>
      {value === 0 ? (
        <div className='p-2 h-auto'>
          <img src='/images/sabira.png' alt='Sabira' className="flex object-contain h-full rounded-md" />
        </div>
      ) : value === 1 ? (
        <div className='p-2 h-auto'>
          <img src='/images/Sabira-drink.png' alt='Sabira' className="flex object-contain h-full rounded-md" />
        </div>
      ) : (
        <div className='p-2 h-auto'>
          <img src='/images/Sabira-fastfood.png' alt='Sabira' className="flex object-contain h-full rounded-md" />
        </div>
      )}
    </div>
  )
}
export default Sabira