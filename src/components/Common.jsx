import {useState,useEffect,useRef} from 'react'
import {X,MessageCircle} from 'lucide-react'
import {WHATSAPP_NUMBER} from '../data'
const FALLBACK='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"><rect width="4" height="3" fill="#13294b"/></svg>')
// Image with lazy loading and a fallback so the layout survives a failed URL.
export function Img({src,alt,className,eager}){
 const [bad,setBad]=useState(false)
 return <img className={className} src={bad?FALLBACK:src} alt={alt} loading={eager?'eager':'lazy'} onError={()=>setBad(true)}/>
}
// Simple fade-in on scroll (disabled by prefers-reduced-motion in CSS).
export function Reveal({children,className=''}){
 const r=useRef(null);const [on,setOn]=useState(false)
 useEffect(()=>{if(!('IntersectionObserver' in window))return setOn(true)
  const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setOn(true);o.disconnect()}},{threshold:.12});o.observe(r.current);return()=>o.disconnect()},[])
 return <div ref={r} className={`rv ${on?'in':''} ${className}`}>{children}</div>
}
export function Modal({item,onClose}){
 useEffect(()=>{if(!item)return
  const k=e=>e.key==='Escape'&&onClose();addEventListener('keydown',k);document.body.style.overflow='hidden'
  return()=>{removeEventListener('keydown',k);document.body.style.overflow=''}},[item,onClose])
 if(!item)return null
 return <div className="ov" onClick={onClose}><div className="modal" role="dialog" aria-modal="true" aria-label={item.title} onClick={e=>e.stopPropagation()}>
  <button className="x" aria-label="Close" onClick={onClose}><X size={18}/></button>
  {item.img&&<Img src={item.img} alt={item.alt}/>}
  <div className="mb">{item.cat&&<span className="tag">{item.cat}</span>}<h3>{item.title}</h3><p>{item.desc}</p>
  {item.details&&<ul>{item.details.map(d=><li key={d}>{d}</li>)}</ul>}
  {item.cat&&<p className="note">Demonstration content: fictional, for this prototype only.</p>}
  {item.cat&&<a className="btn" href="#contact" onClick={onClose}>Request a quote</a>}</div></div></div>
}
export function WhatsApp(){
 const [tip,setTip]=useState(false);const ok=/^\d{8,15}$/.test(WHATSAPP_NUMBER)
 const go=()=>ok?window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello NOVARA, I have an enquiry.')}`,'_blank','noopener'):setTip(true)
 return <div className="wa"><span className={'wa-tip'+(tip?' show':'')}>{ok?"Let's talk":'Prototype: set WHATSAPP_NUMBER in src/data.js'}</span>
  <button aria-label="Chat on WhatsApp" onClick={go} onBlur={()=>setTip(false)}><MessageCircle/></button></div>
}
export function Footer({onPrivacy}){
 return <footer><div className="wrap fg">
  <div><div className="logo" style={{color:'#fff'}}>NOVARA</div><p>Temporary brand for a prototype. Business solutions, products and project design.</p></div>
  <div><h4>Explore</h4>{['About','Services','Products','Portfolio','Contact'].map(n=><a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</div>
  <div><h4>Services</h4><a href="#services">Business Consulting</a><a href="#services">Product Sourcing</a><a href="#services">Creative Design</a><a href="#services">Project Execution</a></div>
  <div><h4>Contact (placeholders)</h4><p>[Placeholder] hello@example.com<br/>[Placeholder] +00 000 000 0000<br/>[Placeholder] Street, City, Country</p><button onClick={onPrivacy}>Privacy Policy</button></div></div>
  <p className="wrap fine">© NOVARA prototype. All products, projects and testimonials are samples.</p></footer>
}
