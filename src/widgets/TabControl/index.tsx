import React, { useState } from 'react'
import { Tab, Tabs, Box, Typography } from '@mui/material'
import { PnfCreator } from 'src/features/PnfCreator'
import { ComplexCreator } from 'src/features/ComplexCreator'

interface TabPanelProps {
  children?: React.ReactNode
  index: string
  value: string
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export const TabControl = () => {
  const [activeTab, setActiveTab] = useState('pnf')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue)
  }

  return (
    <div>
      <Tabs value={activeTab} onChange={handleChange}>
        <Tab label="Pnf" value="pnf" />
        <Tab label="Complex" value="complex" />
      </Tabs>
      <TabPanel value={activeTab} index="pnf">
        <PnfCreator />
      </TabPanel>
      <TabPanel value={activeTab} index="complex">
        <ComplexCreator />
      </TabPanel>
    </div>
  )
}
