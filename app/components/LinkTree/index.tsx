"use client"
import React, { Suspense } from 'react';
import { Container, Section, SectionHeader } from './styles';
import Image from 'next/image'
import Button from '../Button';
import { variables } from '../../variables';
import Header from '../Header';
import Background from '../Three/Background';
// Logos
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import GitHubIcon from '@mui/icons-material/GitHub';

// Other Logos for links
import trading from '../../images/trade.svg';
import kickLogo from '../../images/kick.svg';
import mediumLogo from '../../images/medium.svg';
import twitterLogo from '../../images/twitter.svg';
import telegramLogo from '../../images/telegram.svg';
// const gambleLogo = require('../../images/gamble.svg');
// const lottoLogo = require('../../images/lotto1.svg');
import lottoLogo2 from '../../images/lotto2.svg';
import lockLogo from '../../images/logo.svg';
import bundleLogo from '../../images/bundle.svg';
// const swapLogo = require('../../images/swap.svg');
import swapLogo from '../../images/ia.svg'
import piLogo from '../../images/redpi.svg';
import convertLogo from '../../images/bitcoin.svg';
import timefunLogo from '../../images/timefun.jpg';
import soltrendioLogo from '../../images/soltrendio.png';
import retardioLogo from '../../images/retardio.png';
// const moonLogo = require('../../images/moon.svg');
// const groundfloor = require('../../images/house.svg');

export default function LinkTree() {
  const h = 20;

  function Loading() {
    return <div>🌀 Loading...</div>;
  }

  return (
    <>
      <Container>
        {/* Header Section */}
        <Header picture="profile.jpg" title='Get/Money' subtitle={`\n💻 SWE  \n 💰 Investing \n 🔒 Crypto`} />

        {/* Social Media Links */}
        <Button link='https://jonngan.medium.com' icon={<Image src={mediumLogo} height={h} alt="Medium" />} name='' backgroundcolor={variables.gray600} />
        <Button link='https://www.youtube.com/@jonngan?sub_confirmation=1' icon={<PlayCircleFilledWhiteIcon />} name='' backgroundcolor={variables.youtubeColor} />
        <Button link='https://github.com/jongan69' icon={<GitHubIcon />} name='' backgroundcolor={variables.githubColor} />
        <Button link='https://t.me/jonngan' icon={<Image src={telegramLogo} height={h} alt="Telegram" />} name='' backgroundcolor={variables.opt1Color} />
        <Button link='https://time.fun?ref=lockin' icon={<Image src={timefunLogo} height={h} alt="Time.fun" />} name='' backgroundcolor={variables.timefunColor} />
        <Button link='https://kick.com/jonngan' icon={<Image src={kickLogo} height={h} alt="Kick" />} name='' backgroundcolor={variables.opt1Color} />

        {/* Referral Links Section */}
        <Section>
          <SectionHeader>Projects</SectionHeader>
          <Button link={'https://InvestAssist.app/learn'} icon={<Image src={swapLogo} height={h} alt="AI Investment Assistance" />} name='AI Market Analysis' backgroundcolor={variables.linkedinColor} />
          <Button link='https://apps.apple.com/us/app/soltrendio-trends/id6742119975' icon={<Image src={soltrendioLogo} height={h} alt="SolTrendio WatchOS App" />} name='SolTrendio WatchOS App' backgroundcolor={variables.linkedinColor} />
          <Button link={'https://Soltrendio.com/'} icon={<Image src={trading} height={h} alt="Solana AI Wallet Analysis" />} name='Solana AI Wallet Analysis' backgroundcolor={variables.linkedinColor} />
          <Button link={'https://www.lock.wtf/'} icon={<Image src={bundleLogo} height={h} alt="Jito Bundled Jupiter Swaps" />} name='Jito Bundled Jupiter Swaps' backgroundcolor={variables.linkedinColor} />

          {/* Hidden Projects */}
          {/* <Button link={'https://lotto.cooking/'} icon={<Image src={lottoLogo2} height={h} alt="Solana OnChain VRF Lottery" />} name='Solana OnChain VRF Lottery' backgroundcolor={variables.linkedinColor} /> */}
          {/* <Button link='https://www.retardio.exposed/' icon={<Image src={retardioLogo} height={h} alt="Retardio Exposed" />} name='Retardio Exposed' backgroundcolor={variables.linkedinColor} /> */}
          {/* <Button link={'https://t.me/USDC2BTC_bot'} icon={<Image src={convertLogo} height={h} alt="USDC to BTC Telegram Bot" />} name='USDC to BTC Telegram Bot' backgroundcolor={variables.linkedinColor} /> */}
          {/* <Button link={'https://t.me/Lockinvideouploader_bot'} icon={<Image src={lockLogo} height={h} alt="Tiktok Scheduling Bot" />} name='Tiktok Scheduling Bot' backgroundcolor={variables.linkedinColor} /> */}
          {/* <Button link={'https://t.me/StockMarketUpdatesbot'} icon={<Image src={piLogo} height={h} alt="AI Trading Telegram Bot" />} name='AI Trading Telegram Bot' backgroundcolor={variables.linkedinColor} /> */}
        </Section>
      </Container>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Suspense fallback={<Loading />}>
          <Background />
        </Suspense>
      </div>
    </>
  )
}
