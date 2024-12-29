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
// const gambleLogo = require('../../images/gamble.svg');
const lottoLogo = require('../../images/lotto1.svg');
const lottoLogo2 = require('../../images/lotto2.svg');
const lockLogo = require('../../images/logo.svg');
const bundleLogo = require('../../images/bundle.svg');
const swapLogo = require('../../images/swap.svg');
const piLogo = require('../../images/redpi.svg');
const convertLogo = require('../../images/bitcoin.svg');
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
        <Button link='https://jonngan.medium.com' icon={<Image src={mediumLogo} height={h} alt="Medium"/>} name='' backgroundcolor={variables.gray600} />
        <Button link='https://www.youtube.com/@jonngan?sub_confirmation=1' icon={<PlayCircleFilledWhiteIcon />} name='' backgroundcolor={variables.youtubeColor} />
        <Button link='https://github.com/jongan69' icon={<GitHubIcon />} name='' backgroundcolor={variables.githubColor} />
        <Button link='https://twitter.com/jongan69' icon={<Image src={twitterLogo} alt="Twitter" height={h}/>} name='' backgroundcolor={variables.twitterColor} />
        <Button link='https://t.me/jonngan' icon={<Image src={telegramLogo} height={h} alt="Telegram"/>} name='' backgroundcolor={variables.opt1Color} />
        <Button link='https://kick.com/jonngan' icon={<Image src={kickLogo} height={h} alt="Kick" />} name='' backgroundcolor={variables.opt1Color} />
        
        {/* Referral Links Section */}
        <Section>
          <SectionHeader>My Projects</SectionHeader>
          <Button link={'https://Soltrendio.com/'} icon={<Image src={trading} height={h} alt="Solana AI Wallet Analysis"/>} name='Solana AI Wallet Analysis' backgroundcolor={variables.linkedinColor}/>
          <Button link={'https://lotto.cooking/'} icon={<Image src={lottoLogo2} height={h} alt="Solana OnChain VRF Lottery"/>} name='Solana OnChain VRF Lottery' backgroundcolor={variables.linkedinColor}/>
          <Button link={'https://www.lock.wtf/'} icon={<Image src={bundleLogo} height={h} alt="Jito Bundled Jupiter Swaps"/>} name='Jito Bundled Jupiter Swaps' backgroundcolor={variables.linkedinColor}/>
          <Button link={'https://t.me/USDC2BTC_bot'} icon={<Image src={convertLogo} height={h} alt="USDC to BTC Telegram Bot"/>} name='USDC to BTC Telegram Bot' backgroundcolor={variables.linkedinColor}/>
          <Button link={'https://t.me/TiktokAutoUploader'} icon={<Image src={lockLogo} height={h} alt="Tiktok Scheduling Bot"/>} name='Tiktok Scheduling Bot' backgroundcolor={variables.linkedinColor}/>
          <Button link={'https://t.me/StockMarketUpdatesbot'} icon={<Image src={piLogo} height={h} alt="AI Trading Telegram Bot"/>} name='AI Trading Telegram Bot' backgroundcolor={variables.linkedinColor}/>
          {/* <Button link='https://app.groundfloor.us/r/o6d7b4' icon={<Image src={groundfloor} alt="Groundfloor" height={h}/>} name='Groundfloor' backgroundcolor={variables.purple}/> */}
          {/* <Button link='https://moonshot.money?ref=vtsmoh24uf' icon={<Image src={moonLogo} height={h} alt="MoonShot"/>} name='Moonshot' backgroundcolor={variables.pink} /> */}
          {/* <Button link='https://ox.fun/register?shareAccountId=5MU57aDG' icon={<Image src={trading} alt="OX.FUN" height={h}/>} name='OX.FUN' backgroundcolor={variables.discordColor} /> */}
          {/* <Button link='https://retardio.casino/?ref=jongan69' icon={<Image src={gambleLogo} alt="Retardio Casino" height={h}/>} name='Retardio Casino' backgroundcolor={variables.opt2Color} /> */}
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