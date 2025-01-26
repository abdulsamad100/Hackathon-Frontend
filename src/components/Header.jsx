import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#003366', borderRadius:"10px" }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Saylani Welfare Microfinance app
          </Typography>
        </motion.div>

        <Box sx={{display:"flex"}}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              component={Link}
              to="/home"
              sx={{ color: '#ffffff', fontWeight: 'bold', marginRight: 2 }}
            >
              Home
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              component={Link}
              to="/"
              sx={{ color: '#ffffff', fontWeight: 'bold', marginRight: 2 }}
            >
              Login
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              component={Link}
              to="/admin-dashboard"
              sx={{ color: '#ffffff', fontWeight: 'bold', marginRight: 2 }}
            >
              Admin DashBoard
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              component={Link}
              to="/dashboard"
              sx={{ color: '#ffffff', fontWeight: 'bold' }}
            >
              User Dashboard
            </Button>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
