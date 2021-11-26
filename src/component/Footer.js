import React from 'react'
import { BottomNavigationAction,BottomNavigation } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';



function Footer() {
    return (
        <BottomNavigation>
            <BottomNavigationAction label = "Facebook" icon={<FacebookIcon style={{fill:"#9C3E57"}}/>} />
            <BottomNavigationAction label = "Twitter" icon={<TwitterIcon style={{fill:"#F07957"}}/>} />
            <BottomNavigationAction label = "Instagram" icon={<InstagramIcon style={{fill:"#F6B68B"}}/>} />
            <BottomNavigationAction label = "YouTube" icon={<YouTubeIcon style={{fill:"#F6B68B"}}/>} />
        </BottomNavigation>
        
    )
}

export default Footer
