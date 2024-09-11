"use client"
import React, { Suspense } from 'react';
import { Container, Section, SectionHeader } from './styles';
import Image from 'next/image'
import Button from '../Button/index.js';
import variables from '../../variables';
import Header from '../Header';

// Money
import { Canvas } from '@react-three/fiber';
import RainingMoneyBackground from '../Three/RainingMoney'

// Logos
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import GitHubIcon from '@mui/icons-material/GitHub';

// Other Logos for links
const trading = require('../../images/trade.svg');
const kickLogo = require('../../images/kick.svg');
const mediumLogo = require('../../images/medium.svg');
const twitterLogo = require('../../images/twitter.svg');
const telegramLogo = require('../../images/telegram.svg');
const gambleLogo = require('../../images/gamble.svg');

const lockLogo = require('../../images/logo.svg');
const moonLogo = require('../../images/moon.svg');
const groundfloor = require('../../images/house.svg');

export default function LinkTree() {

  const h = 20;
  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <Header picture="profile.jpg" title='Jongan' subtitle={`\n💻 SWE  \n 💰 Investor \n 🔒 Crypto`} />
        <Button link='https://jonngan.medium.com' icon={<Image src={mediumLogo} height={h} alt="Medium"/>} name='' backgroundcolor={variables.opt2Color} />
        <Button link='https://www.youtube.com/@jonngan?sub_confirmation=1' icon={<PlayCircleFilledWhiteIcon />} name='' backgroundcolor={variables.youtubeColor} />
        <Button link='https://github.com/jongan69' icon={<GitHubIcon />} name='' backgroundcolor={variables.githubColor} />
        <Button link='https://twitter.com/jongan69' icon={<Image src={twitterLogo} alt="Twitter" height={h}/>} name='' backgroundcolor={variables.twitterColor} />
        <Button link='https://t.me/jonngan' icon={<Image src={telegramLogo} height={h} alt="Telegram"/>} name='' backgroundcolor={variables.opt1Color} />
        <Button link='https://kick.com/jonngan' icon={<Image src={kickLogo} height={h} alt="Kick" />} name='' backgroundcolor={variables.opt1Color} />
        
        {/* Referral Links Section */}
        <Section>
          <SectionHeader>Referral Links</SectionHeader>
          <Button link='https://www.lock.wtf/' icon={<Image src={lockLogo} height={h} alt="Lock.wtf"/>} name='Lock.wtf' backgroundcolor={variables.linkedinColor}/>
          <Button link='https://app.groundfloor.us/r/o6d7b4' icon={<Image src={groundfloor} alt="Groundfloor" height={h}/>} name='Groundfloor' backgroundcolor={variables.purple}/>
          <Button link='https://moonshot.money?ref=vtsmoh24uf' icon={<Image src={moonLogo} height={h} alt="MoonShot"/>} name='Moonshot' backgroundcolor={variables.pink} />
          <Button link='https://ox.fun/register?shareAccountId=5MU57aDG' icon={<Image src={trading} alt="OX.FUN" height={h}/>} name='OX.FUN' backgroundcolor={variables.discordColor} />
          <Button link='https://partner.toshi.bet/jongan' icon={<Image src={gambleLogo} alt="Toshi Bets" height={h}/>} name='Toshi Bets' backgroundcolor={variables.opt2Color} />
        </Section>
      </Container>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Canvas>
          <RainingMoneyBackground />
        </Canvas>
      </div>
    </Suspense>
  )
}