import React from 'react';
import { Button } from '../../globalStyles'; 
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItem,
    FooterLinkTitle,
    FooterLink,
    SocialIconLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    SocialIcons,
    WebsiteRights
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to
                    recieve the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time
                </FooterSubText>
                <Form>
                    <FormInput 
                        name="emai"
                        type="email"
                        placeholder="Your email"
                    />
                    <Button fontBig>
                        Subscribe
                    </Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Term of Services</FooterLink>
                    </FooterLinksItem>

                    <FooterLinksItem>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Term of Services</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Term of Services</FooterLink>
                    </FooterLinksItem>

                    <FooterLinksItem>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Term of Services</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>
                        ULTRA 2021
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/" targer="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>

                        <SocialIconLink href="https://www.instagram.com/" targer="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>

                        <SocialIconLink href="https://www.youtube.com/" targer="_blank" aria-label="Youtube" rel="noopener noreferret">
                            <FaYoutube/>
                        </SocialIconLink>

                        <SocialIconLink href="https://twitter.com/" targer="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>

                        <SocialIconLink href="https://www.linkedin.com/" targer="_blank" aria-label="LinkedIn">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}
export default Footer
