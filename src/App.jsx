import {useState} from 'react'
import Header from './components/Header'
import {Hero,About,Services,Process,Why,Testimonials} from './components/Sections'
import Showcase from './components/Showcase'
import Inquiry from './components/Inquiry'
import {Modal,WhatsApp,Footer} from './components/Common'
import {PRODUCTS,PRODUCT_CATS,PROJECTS,PROJECT_CATS,PRIVACY} from './data'
export default function App(){
 const [item,setItem]=useState(null)
 return <>
  <Header/>
  <main><Hero/><About/><Services/>
   <Showcase id="products" eyebrow="Product catalog" title="Products" notice="Demonstration products only: no real prices, certifications, stock or suppliers." items={PRODUCTS} cats={PRODUCT_CATS} searchable cta="View Details" onOpen={setItem}/>
   <Showcase id="portfolio" tint eyebrow="Portfolio" title="Selected Concepts" notice="Fictional demonstration projects, not real client work." items={PROJECTS} cats={PROJECT_CATS} cta="View Project" onOpen={setItem}/>
   <Process/><Why/><Testimonials/><Inquiry/></main>
  <Footer onPrivacy={()=>setItem(PRIVACY)}/><WhatsApp/><Modal item={item} onClose={()=>setItem(null)}/></>
}
