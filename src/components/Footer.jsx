import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#003366',
        color: '#ffffff',
        padding: '20px 0',
        marginTop: 'auto',
        borderRadius:"10px"
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
         

          {/* Center - Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography variant="body2" textAlign="center" sx={{ marginTop: { xs: 2, md: 0 } }}>
              &copy; {new Date().getFullYear()} SWMF. All rights reserved.
            </Typography>
          </motion.div>

          {/* Right Side - Social Media Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                sx={{ color: '#ffffff' }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                sx={{ color: '#ffffff' }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                sx={{ color: '#ffffff' }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
