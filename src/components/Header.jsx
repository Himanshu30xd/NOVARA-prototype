import {useState,useEffect} from 'react'
import {NavLink,Link} from 'react-router-dom'
import {Menu,X} from 'lucide-react'
// [label, route]. Each route is its own page (see App.jsx).
const NAV=[['Home','/'],['About','/about'],['Services','/services'],['Products','/products'],['Portfolio','/portfolio'],['Contact','/contact']]
export default function Header(){
 const [open,setOpen]=useState(false);const close=()=>setOpen(false)
 useEffect(()=>{const k=e=>e.key==='Escape'&&close();addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[])
 return <header className="hdr"><div className="wrap bar">
  <Link to="/" className="logo" onClick={close}>NOVARA</Link>
  <button className="burger" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  <nav className={open?'nav open':'nav'} aria-label="Main">{NAV.map(([n,p])=><NavLink key={n} to={p} end={p==='/'} onClick={close}>{n}</NavLink>)}
  <Link className="btn" to="/contact" onClick={close}>Request a Quote</Link></nav></div></header>
}
