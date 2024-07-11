"use client"
import React, { Suspense } from 'react';
import { Container } from './styles';
import Image from 'next/image'
import Button from '../Button/index.js';
import variables from '../../variables';
import Header from '../Header';

// Money
import { Canvas } from '@react-three/fiber';
import RainingMoneyBackground from '../Three/RainingMoney'

// Profile
// import Profile from '../../images/profile.jpg';

// Logos
// import AppsIcon from '@material-ui/icons/Apps';
import PieChartIcon from '@mui/icons-material/PieChart';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

// Other Logos for links
const kickLogo = require('../../images/kick.svg');
const mediumLogo = require('../../images/medium.svg');
const twitterLogo = require('../../images/twitter.svg');
const telegramLogo = require('../../images/telegram.svg');

// const discordLogo = require('../../images/discord.svg');
// import ArticleIcon from '@mui/icons-material/Article';
// const instagramLogo = require('../../images/instagram.svg');
// const linkedinLogo = require('../../images/linkedin-in.svg');
// const tiktokLogo = require('../../images/tiktok.svg');
// const whatsappLogo = require('../../images/whatsapp.svg');


export default function LinkTree() {

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <Header picture="profile.jpg" title='Jonathan Gan' subtitle='Software Engineer & Investor.' />
        <Button link='https://kick.com/jonngan' icon={<Image src={kickLogo} alt="Kick" />} name='' backgroundColor={variables.opt1Color} />
        <Button link='https://t.me/jonngan' icon={<Image src={telegramLogo} alt="Telegram"/>} name='Telegram' backgroundColor={variables.opt1Color} />
        <Button link='https://jonngan.medium.com' icon={<Image src={mediumLogo} alt="Medium"/>} name='' backgroundColor={variables.opt2Color} />
        <Button link='https://www.youtube.com/@jonngan?sub_confirmation=1' icon={<PlayCircleFilledWhiteIcon />} name='Youtube' backgroundColor={variables.blogColor} />
        <Button link='https://docs.google.com/document/d/1euLUOVIyY6zYMQ2dA6sXCq0qt7qhCNT5zu-c7GzX0s0/edit?usp=sharing' icon={<AssignmentIndIcon />} name=' Resume' backgroundColor={variables.whatsappColor} />
        <Button link='https://github.com/jongan69' icon={<GitHubIcon />} name='Github' backgroundColor={variables.githubColor} />
        <Button link='https://twitter.com/jongan69' icon={<Image src={twitterLogo} alt="Twitter" height={20}/>} name='' backgroundColor={variables.twitterColor} />
        <Button link='https://promote.ourbit.com/a/Jonngan' icon={<PieChartIcon />} name='Ourbit' backgroundColor={variables.whatsappColor} />
      </Container>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Canvas>
          <RainingMoneyBackground />
        </Canvas>
      </div>
    </Suspense>
  )
}