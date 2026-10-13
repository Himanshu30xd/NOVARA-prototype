import {useState,useEffect} from 'react'
import {Menu,X} from 'lucide-react'
const NAV=['Home','About','Services','Products','Portfolio','Contact']
export default function Header(){
 const [open,setOpen]=useState(false);const close=()=>setOpen(false)
 useEffect(()=>{const k=e=>e.key==='Escape'&&close();addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[])
 return <header className="hdr"><div className="wrap bar">
  <a href="#home" className="logo" onClick={close}>NOVARA</a>
  <button className="burger" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  <nav className={open?'nav open':'nav'} aria-label="Main">{NAV.map(n=><a key={n} href={`#${n.toLowerCase()}`} onClick={close}>{n}</a>)}
  <a className="btn" href="#contact" onClick={close}>Request a Quote</a></nav></div></header>
}
