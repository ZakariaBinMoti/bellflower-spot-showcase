import { Link, useRouterState } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Menu, X, Flag, Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { event } from '@/lib/event';

const bookingUrl = 'https://bellflower-noon-lions-car-show.myshopify.com/apps/shoptickets/events/car-show-1';
const nav = [{to:'/',label:'Home'}, {to:'/event-info',label:'Event Info'}, {to:'/about',label:'About Us'}, {to:'/contact',label:'Contact'}] as const;

export function Brand() { return <Link to="/" className="brand" aria-label="Bellflower Car Show home"><Flag className="brand-flag" strokeWidth={2.2}/><span>BELLFLOWER<span className="brand-sub">CAR SHOW <span>EST. 1999</span></span></span></Link> }

export function SiteHeader() {
 const [open,setOpen] = useState(false); const path = useRouterState({select:s=>s.location.pathname});
 return <header className="site-header"><div className="container header-inner"><Brand/><nav className="desktop-nav" aria-label="Main navigation">{nav.map(n=><Link key={n.to} to={n.to} className={path===n.to?'nav-link active':'nav-link'}>{n.label}</Link>)}<a href={bookingUrl} className="nav-link">Book a Spot</a></nav><Button asChild className="header-cta" variant="default"><a href={bookingUrl}>Book a Spot <ArrowUpRight/></a></Button><Button variant="ghost" size="icon" className="mobile-menu" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'}>{open?<X/>:<Menu/>}</Button></div>{open&&<nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(n=><Link to={n.to} key={n.to} onClick={()=>setOpen(false)} className={path===n.to?'nav-link active':'nav-link'}>{n.label}</Link>)}<a href={bookingUrl} className="nav-link mobile-book-link" onClick={()=>setOpen(false)}>Book a Spot <ArrowUpRight size={15}/></a></nav>}</header>
}

export function SiteFooter() { return <footer className="site-footer"><div className="container footer-columns"><div className="footer-column footer-brand-column"><Brand/><p>Classic cars. Good people. A Bellflower tradition.</p></div><div className="footer-column"><h3>Explore</h3><div className="footer-links"><Link to="/event-info">Event Info</Link><Link to="/about">About Us</Link><Link to="/booknow">Exhibitor Preview</Link></div></div><div className="footer-column"><h3>Helpful links</h3><div className="footer-links"><Link to="/contact">Contact the team</Link><a href={bookingUrl}>Book a Spot <ArrowUpRight size={13}/></a><a href="#faq">FAQs</a></div></div><div className="footer-column footer-contact"><h3>Contact</h3><div className="footer-contact-row"><MapPin size={15}/><span>Bellflower Blvd.<br/>Bellflower, CA 90706</span></div><a className="footer-contact-row" href={`tel:${event.phone}`}><Phone size={15}/><span>{event.phone}</span></a><a className="footer-contact-row" href={`mailto:${event.email}`}><Mail size={15}/><span>{event.email}</span></a><div className="footer-socials"><Instagram size={15}/><span>Instagram · Facebook</span></div></div></div><div className="container footer-bottom"><span>© 2026 Bellflower Car Show. All rights reserved.</span><span>Co-hosted by the City of Bellflower &amp; Bellflower Lions Foundation</span></div></footer> }

export function PageHeading({eyebrow,title,description}:{eyebrow:string,title:string,description:string}) {return <div className="page-heading container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>}
