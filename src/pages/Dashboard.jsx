import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Badge, IconButton, Menu, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { PersonOutline, Business, School, AccountBalance, MenuBook, GroupAdd, 
         AttachMoney, RocketLaunch, Business as BusinessIcon, LocationCity, 
         Feed, BarChart, TrendingUp, People, CheckCircle } from '@mui/icons-material';

const DashboardContainer = styled(motion.div)`
  display: flex;
  height: 100vh;
  background-color: #f0f8ff;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const Sidebar = styled(motion.div)`
  margin-top: 30px;
  width: 280px;
  background: linear-gradient(135deg, #2193b0, #6dd5ed);
  color: white;
  padding: 25px;
  box-shadow: 2px 0 20px rgba(0,0,0,0.1);
`;

const SidebarItem = styled(motion.li)`
  margin-bottom: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: #f0f8ff;
    transform: translateX(5px);
  }

  svg {
    margin-right: 10px;
  }
`;

const MainContent = styled(motion.div)`
  margin-top: 50px;
  flex: 1;
  padding: 25px;
  overflow-y: auto;
`;

const Header = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 28px;
  margin-bottom: 20px;
  color: #2193b0;
  border-bottom: 2px solid #2193b0;
  padding-bottom: 10px;
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(33, 147, 176, 0.2);
  }
`;

const CardHeader = styled.div`
  font-weight: bold;
  margin-bottom: 15px;
  color: #2193b0;
  font-size: 20px;
`;

const CardContent = styled.div`
  font-size: 16px;
  color: #333;
`;

const ConnectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 35px;
`;

const FeedSection = styled(motion.section)`
  margin-bottom: 35px;
`;

const FeedItem = styled(motion(Card))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Button = styled(motion.button)`
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 10px;
  background-color: ${props => props.primary ? '#2193b0' : '#6dd5ed'};
  color: white;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.primary ? '#1c7a94' : '#5cbfe6'};
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const LogOutButton = styled(Button)`
  background-color: #f55353;
  &:hover {
    background-color: #ff3333;
  }
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #6dd5ed;
  margin-right: 15px;
`;

const SearchInput = styled(motion.input)`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin-right: 10px;
`;

const NavLink = styled(motion.a)`
  color: #2193b0;
  text-decoration: none;
  margin-right: 20px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #6dd5ed;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StartupDetailsCard = styled(motion.div)`
  background: linear-gradient(135deg, #e6f7ff 0%, #b3e0ff 100%);
  color: #333;
  margin-top: 20px;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%);
    transform: rotate(30deg);
  }
`;

const StartupDetailItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  svg {
    margin-right: 10px;
    font-size: 24px;
    color: #2193b0;
  }
`;

const StartupDetailValue = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #2193b0;
`;

const StartupDetailLabel = styled.span`
  font-size: 14px;
  opacity: 0.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const SectionContainer = styled(motion.section)`
  background-color: ${props => props.bgColor || '#f0f8ff'};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const IconTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  svg {
    margin-right: 10px;
    font-size: 28px;
    color: #2193b0;
  }
`;

const DashboardChart = () => {
  const data = [
    { name: 'Jan', value: 1000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 4000},
    { name: 'Aug', value: 2490 },
    { name: 'Sep', value: 2490 },
    { name: 'Oct', value: 2490 },
    { name: 'Nov', value: 3000 },
    { name: 'Dec', value: 3500 },
  ];

  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <CardHeader>Revenue Trends</CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#2193b0" />
            <YAxis stroke="#2193b0" />
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(33, 147, 176, 0.1)" />
            <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #2193b0' }} />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#2193b0" strokeWidth={3} dot={{ fill: '#2193b0', r: 6 }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

// Main Dashboard component
const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <DashboardContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Sidebar
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <motion.h2 
          style={{ marginBottom: '25px', fontSize: '24px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          AYUSH Portal
        </motion.h2>
        <nav>
          <motion.ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { icon: <PersonOutline />, text: "My Dashboard" },
              { icon: <Business />, text: "My Connections" },
              { icon: <GroupAdd />, text: "My Groups" },
              { icon: <MenuBook />, text: "Messages" },
              { icon: <School />, text: "Task" },
              { icon: <AccountBalance />, text: "Investment Reports" }
            ].map((item, index) => (
              <SidebarItem
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.icon} {item.text}
              </SidebarItem>
            ))}
          </motion.ul>
        </nav>
        <StartupDetailsCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            style={{ marginBottom: '20px', fontSize: '22px', fontWeight: 'bold', color: '#2193b0' }}
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Startup Details
          </motion.h3>
          <StartupDetailItem
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TrendingUp />
            <div>
              <StartupDetailValue>119.06%</StartupDetailValue>
              <StartupDetailLabel>Raised</StartupDetailLabel>
            </div>
          </StartupDetailItem>
          <StartupDetailItem
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <People />
            <div>
              <StartupDetailValue>+3 more</StartupDetailValue>
              <StartupDetailLabel>Funded By</StartupDetailLabel>
            </div>
          </StartupDetailItem>
          <StartupDetailItem
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <CheckCircle />
            <div>
              <StartupDetailValue>Successfully Funded ✓</StartupDetailValue>
              <StartupDetailLabel>Status</StartupDetailLabel>
            </div>
          </StartupDetailItem>
        </StartupDetailsCard>
        <motion.div 
          style={{ marginTop: '20px', display: 'flex', flexDirection: 'row' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Avatar />
          <span style={{ marginTop: '10px' }}>SD pvt.ltd</span>
        </motion.div>
        <LogOutButton 
          style={{ marginTop: '25px' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Log Out
        </LogOutButton>
      </Sidebar>

      <MainContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <nav>
            {['Home', 'About Us', 'Contact Us', 'Our Success'].map((item, index) => (
              <NavLink 
                key={item}
                href="#"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item}
              </NavLink>
            ))}
          </nav>
          <IconContainer>
            <SearchInput 
              type="search" 
              placeholder="Search"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <IconButton 
              color="primary" 
              aria-label="notifications"
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Badge badgeContent={4} color="error">
                <NotificationsIcon style={{ color: '#2193b0' }} />
              </Badge>
            </IconButton>
            <IconButton
              color="primary"
              aria-label="settings"
              onClick={handleClick}
              aria-controls={open ? 'settings-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SettingsIcon style={{ color: '#2193b0' }} />
            </IconButton>
            <Menu
              id="settings-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'settings-button',
              }}
            >
              <MenuItem onClick={handleClose}>Dashboard</MenuItem>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <IconButton 
              color="primary" 
              aria-label="user profile"
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AccountCircleIcon style={{ color: '#2193b0' }} />
            </IconButton>
          </IconContainer>
        </Header>
        
        <SectionContainer
          bgColor="#e6f7ff"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <IconTitle>
            <AttachMoney />
            <SectionTitle
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Connect With
            </SectionTitle>
          </IconTitle>
          <ConnectGrid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {[
              { name: 'Investor', icon: <AttachMoney /> },
              { name: 'Accelerator', icon: <RocketLaunch /> },
              { name: 'Incubator', icon: <BusinessIcon /> },
              { name: 'Govt. Agencies', icon: <LocationCity /> }
            ].map((item, index) => (
              <Card
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <CardHeader>
                  {item.icon}
                  {item.name}
                </CardHeader>
                <CardContent>
                  <p>{Math.floor(Math.random() * 1000) + 500} Total {item.name}</p>
                  <p>{Math.floor(Math.random() * 20) + 1} Match for you</p>
                  <small>You can send only {Math.floor(Math.random() * 5) + 1} free requests</small>
                </CardContent>
              </Card>
            ))}
          </ConnectGrid>
        </SectionContainer>

        <SectionContainer
          bgColor="#e6ffe6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <IconTitle>
            <School />
            <SectionTitle
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Find a
            </SectionTitle>
          </IconTitle>
          <ConnectGrid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            <Card
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <CardHeader>
                <School />
                Mentor
              </CardHeader>
              <CardContent>
                <p>278 Total Mentor</p>
                <p>5 Match for you</p>
                <small>You will have to pay a personal mentor rather you will always have the AI mentor</small>
              </CardContent>
            </Card>
            <Card
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <CardHeader>
                <GroupAdd />
                Recruit for your Startup
              </CardHeader>
              <CardContent>
                <p>56289 Total Users</p>
                <small>You can recruit person for your Startup</small>
              </CardContent>
            </Card>
          </ConnectGrid>
        </SectionContainer>

        <SectionContainer
          bgColor="#fff0e6"
          as={motion.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <IconTitle>
            <Feed />
            <SectionTitle
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Feed
            </SectionTitle>
          </IconTitle>
          <p style={{ marginBottom: '20px', color: '#555' }}>Here You will see all the Investors/Incubators/Accelerators/Mentors those are the best match for you according to us</p>
          <AnimatePresence>
            {['Rakesh Khan', 'Canara Group'].map((name, index) => (
              <FeedItem
                key={name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar />
                  <div>
                    <h4 style={{ color: '#2193b0', marginBottom: '8px', fontSize: '18px' }}>{name}</h4>
                    <p style={{ color: '#555', marginBottom: '4px' }}>
                      {index === 0 ? 'Chairman of Khan Group' : 'Canara Group Lmtd'}
                    </p>
                    <p style={{ color: '#555', marginBottom: '4px' }}>
                      Joined On: {index === 0 ? 'September 26, 2023' : 'June 15, 2023'}
                    </p>
                    <p style={{ color: '#555', marginBottom: '4px' }}>
                      {index === 0 ? '30k+ investment' : '60k+ investment'}
                    </p>
                    {index === 0 && <p style={{ color: '#555', marginBottom: '0' }}>Net Worth: 1,899 Crs</p>}
                  </div>
                </div>
                <div>
                  <p style={{ color: '#2193b0', marginBottom: '8px', fontWeight: 'bold' }}>
                    {index === 0 ? 'Individual Investor' : 'Institutional Investor'}
                  </p>
                  <ButtonGroup>
                    <Button 
                      primary
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Approach
                    </Button>
                    <Button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Bookmark
                    </Button>
                    <Button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Remove from feed
                    </Button>
                  </ButtonGroup>
                </div>
              </FeedItem>
            ))}
          </AnimatePresence>
        </SectionContainer>

        <SectionContainer
          bgColor="#ffe6e6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <IconTitle>
            <BarChart />
            <SectionTitle
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Investment Reports
            </SectionTitle>
          </IconTitle>
          <DashboardChart />
        </SectionContainer>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;