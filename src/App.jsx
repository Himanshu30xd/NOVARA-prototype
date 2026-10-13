import {useState,useEffect} from 'react'
import {HashRouter,Routes,Route,Navigate,useLocation} from 'react-router-dom'
import Header from './components/Header'
import {Hero,About,Services,Process,Why,Testimonials,Cta} from './components/Sections'
import Showcase from './components/Showcase'
import Inquiry from './components/Inquiry'
import {Modal,WhatsApp,Footer} from './components/Common'
import {PRODUCTS,PRODUCT_CATS,PROJECTS,PROJECT_CATS,PRIVACY} from './data'
// Every new page starts at the top.
function Top(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'instant'})},[pathname]);return null}
// HashRouter keeps page URLs working on GitHub Pages (e.g. /#/about) without server rewrites.
export default function App(){
 const [item,setItem]=useState(null)
 return <HashRouter><Top/><Header/>
  <main><Routes>
   <Route path="/" element={<><Hero/><Why/><Cta/></>}/>
   <Route path="/about" element={<><About/><Testimonials/></>}/>
   <Route path="/services" element={<><Services/><Process/></>}/>
   <Route path="/products" element={<Showcase key="products" id="products" eyebrow="Product catalog" title="Products" notice="Demonstration products only: no real prices, certifications, stock or suppliers." items={PRODUCTS} cats={PRODUCT_CATS} searchable cta="View Details" onOpen={setItem}/>}/>
   <Route path="/portfolio" element={<Showcase key="portfolio" id="portfolio" tint eyebrow="Portfolio" title="Selected Concepts" notice="Fictional demonstration projects, not real client work." items={PROJECTS} cats={PROJECT_CATS} cta="View Project" onOpen={setItem}/>}/>
   <Route path="/contact" element={<Inquiry/>}/>
   <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes></main>
  <Footer onPrivacy={()=>setItem(PRIVACY)}/><WhatsApp/><Modal item={item} onClose={()=>setItem(null)}/></HashRouter>
}
