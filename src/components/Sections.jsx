import {Link} from 'react-router-dom'
import {Reveal,Img} from './Common'
import {HERO_IMG,ABOUT_IMG,SERVICES,VALUES,STEPS,BENEFITS,TESTIMONIALS} from '../data'
export const Hero=()=><section id="home" className="hero">
 <Img className="hero-bg" eager src={HERO_IMG} alt="Glass commercial building facade against the sky"/>
 <div className="wrap hero-in"><h1>We Turn Business Ideas Into Exceptional Experiences</h1>
  <p>Discover thoughtful solutions, quality products, and creative projects designed to help businesses grow.</p>
  <div className="row"><Link className="btn w" to="/services">Explore Our Services</Link><Link className="btn o" to="/portfolio">View Our Work</Link></div>
  <p className="trust">Built around quality, creativity and reliability.</p></div></section>
export const About=()=><section id="about"><div className="wrap split">
 <Img src={ABOUT_IMG} alt="Colleagues collaborating around a table"/>
 <Reveal><p className="eyebrow">About us</p><h2>A Partner for Your Next Big Idea</h2>
  <p className="lead">We bring together business expertise, carefully selected products, and creative project solutions to help businesses move forward with confidence.</p>
  {VALUES.map(({icon:I,title,desc})=><div className="val" key={title}><I className="ico" size={22}/><div><h3>{title}</h3><p>{desc}</p></div></div>)}</Reveal></div></section>
export const Services=()=><section id="services" className="alt"><div className="wrap">
 <p className="eyebrow">What we do</p><h2>Services</h2><p className="note">Illustrative prototype services, not claims about a real company.</p>
 <div className="grid3">{SERVICES.map(({icon:I,title,desc})=><Reveal key={title} className="card svc"><I className="ico" size={28}/><h3>{title}</h3><p>{desc}</p><Link className="link" to="/contact">Learn More</Link></Reveal>)}</div></div></section>
export const Process=()=><section className="dark"><div className="wrap"><h2>How We Work</h2>
 <ol className="steps">{STEPS.map(s=><li key={s}><h3>{s}</h3></li>)}</ol></div></section>
export const Why=()=><section id="why"><div className="wrap"><h2>Why Choose Us</h2>
 <div className="grid3">{BENEFITS.map(({icon:I,title,desc})=><Reveal key={title}><I className="ico" size={26}/><h3>{title}</h3><p className="lead">{desc}</p></Reveal>)}</div></div></section>
export const Testimonials=()=><section className="alt"><div className="wrap"><h2>What Clients Could Say</h2>
 <p className="note">Sample placeholders only. These are not real customer reviews.</p>
 <div className="grid3">{TESTIMONIALS.map(t=><blockquote className="card quote" key={t.text}><p>{t.text}</p><cite>{t.who}</cite></blockquote>)}</div></div></section>
export const Cta=()=><section className="dark"><div className="wrap"><h2>Ready to talk?</h2><p>Tell us about your requirements and we will help shape the next step.</p><Link className="btn w" to="/contact">Request a Quote</Link></div></section>
