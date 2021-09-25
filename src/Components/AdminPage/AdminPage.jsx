import React, { useState } from 'react';
import { useStyles } from './AdminPage.styles';
import { Container, Paper, Typography, Tabs, Tab, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import Teams from '../Teams/Teams';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AdminPage = () => {
  const styles = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Container className={styles.main}>
    <Paper variant='elevation' elevation={5} className={styles.paperStyle}>
      <div className={styles.topDiv} id='elka'>
        <Typography variant='h4' className={styles.title}>Контролен панел</Typography>
      </div>
      
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={styles.tabs}>
          <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' variant='fullWidth' indicatorColor='primary'>
            <Tab label='отбори' {...a11yProps(0)} />
            <Tab label='пързалки' {...a11yProps(1)} />
            <Tab label='събития' {...a11yProps(2)} />
            <Tab label='мачове' {...a11yProps(3)} />
            <Tab label='новини' {...a11yProps(4)} />
            <Tab label='играчи' {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Teams />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item 4
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item 5
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item 6
        </TabPanel>
      </Box>
    </Paper>
  </Container>
  )
}

export default AdminPage;