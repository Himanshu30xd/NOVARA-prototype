import {useState} from 'react'
import {Search,ArrowRight} from 'lucide-react'
import {Img,Reveal} from './Common'
// Shared filterable grid used by the Products (with search) and Portfolio sections.
export default function Showcase({id,tint,eyebrow,title,notice,items,cats,searchable,cta,onOpen}){
 const [cat,setCat]=useState('All');const [q,setQ]=useState('')
 const list=items.filter(i=>(cat==='All'||i.cat===cat)&&`${i.title} ${i.desc} ${i.cat}`.toLowerCase().includes(q.trim().toLowerCase()))
 return <section id={id} className={tint?'alt':''}><div className="wrap">
  <p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p className="note">{notice}</p>
  <div className="tools"><div className="chips">{['All',...cats].map(c=><button key={c} className={c===cat?'chip on':'chip'} aria-pressed={c===cat} onClick={()=>setCat(c)}>{c}</button>)}</div>
   {searchable&&<label className="search"><Search size={16}/><input type="search" aria-label="Search demo products" placeholder="Search demo products" value={q} onChange={e=>setQ(e.target.value)}/></label>}</div>
  <div className="grid3">{list.map(i=><Reveal key={i.id} className="card"><Img src={i.img} alt={i.alt}/>
   <div className="cb"><span className="tag">{i.cat}</span><h3>{i.title}</h3><p>{i.desc}</p>
   <button className="link" onClick={()=>onOpen(i)}>{cta} <ArrowRight size={15}/></button></div></Reveal>)}</div>
  {!list.length&&<p className="empty">No matches. Clear the search or choose another category.</p>}</div></section>
}
