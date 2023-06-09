import * as React from "react";
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components'
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAt, faPhone, faMobileScreenButton, faSquarePhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { PrettyLink } from "./common/PrettyLink";
import { contactInfoIconStyle } from "./ResumeHeader";

const ContactLinksContainer = styled.div`
  display: inline-block;
  position: relative;
  columns: 2;
  column-gap: 2em;

  @media print {
    top: 5px;
    column-gap: 0px;
  }
`

const ContactLinkItemContainer = styled.div`
  display: flex;
  gap: 4px;
`

export function ContactLinks({ data }) {
    if (!data?.basics) {
        return (
            <Skeleton width={'85%'} height={'40px'} inline={true} />
        );
    }
    library.add(fab, faGlobe);
    const basics = data.basics;
    const contactLinkItems = basics.profiles.map((link: Record<string, any>, i: number) => {
        const iconClass = 'fab';
        const iconName = link.network.toLowerCase();
        var iconConfig: any = [iconClass, iconName];
        if (!icon({ prefix: iconClass, iconName: iconName })) {
            iconConfig = 'globe';
        }
        return (
            <ContactLinkItem url={link.url} text={link.username} iconConfig={iconConfig} key={i} title={link.network} />
        );
    })

    if (basics?.email) {
        contactLinkItems.push(<ContactLinkItem url={`mailto:${basics.email}`} text={basics.email} iconConfig={faAt} key="email" title="Email" />)
    }

    if (basics?.phone) {
        contactLinkItems.push(<ContactLinkItem url={`tel:${basics.phone}`} text={basics.phone} iconConfig={faSquarePhone} key="phone" title="Phone" /> )
    }
    return (
        <ContactLinksContainer className='contact-links-container collection'>
            {contactLinkItems}
        </ContactLinksContainer>
    );
}

function ContactLinkItem({ url, text, iconConfig, key, title }: { url: string, text: string, iconConfig: any, key: string | number, title: string }) {
    return (
        <ContactLinkItemContainer key={key}>
            <FontAwesomeIcon icon={iconConfig} style={contactInfoIconStyle} />
            <PrettyLink url={url} text={text} />
        </ContactLinkItemContainer>
    )
}
