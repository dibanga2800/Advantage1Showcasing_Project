import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Button } from '../Button';


import {
    FooterContainer, FooterSubscription, FooterSubHeading,
    FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper,
    FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo,
    WebsiteRights, SocialIconLink, SocialIcons, SocialIcon

} from './Footer.element';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at anytime.
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email'
                        placeholder='Your Email' />
                    <Button primary='true'
                        css={`max-width: 160px;`}>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Who we work for</FooterLink>
                        <FooterLink to='/'>Why choose</FooterLink>
                        <FooterLink to='/'>Advantage One</FooterLink>
                        <FooterLink to='/'>Our Staff Training</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>News</FooterLinkTitle>
                        <FooterLink to='/sign-up'>News</FooterLink>
                        <FooterLink to='/'>Newsletters</FooterLink>
                        <FooterLink to='/'>Intelligence</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Terms Of Service</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Partners</FooterLink>
                        <FooterLink to='/'>Alliances</FooterLink>
                        <FooterLink to='/'>Why Us</FooterLink>

                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Our Customers</FooterLink>
                        <FooterLink to='/'>Why Us</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                    </FooterLinksItems>

                </FooterLinksWrapper>

            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon>
                            ADVANTAGE-ONE
                        </SocialIcon>
                    </SocialLogo>
                    <WebsiteRights> © ADVANTAGE ONE SECURITY LTD 2021
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href={'https://www.facebook.com/Adv1Sec'} target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href={'https://twitter.com/AdvantageOneSe1'} target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

        </FooterContainer >

    );
};

export default Footer
