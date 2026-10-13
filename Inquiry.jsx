import {useState} from 'react'
const EMAIL=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
const blank={name:'',email:'',company:'',interest:'',details:''}
const F=({label,error,children})=><label>{label}{children}{error&&<span className="err" role="alert">{error}</span>}</label>
export default function Inquiry(){
 const [v,setV]=useState(blank);const [err,setErr]=useState({});const [done,setDone]=useState(false)
 const set=k=>e=>setV({...v,[k]:e.target.value})
 const submit=e=>{e.preventDefault();const x={}
  if(!v.name.trim())x.name='Enter your full name.'
  if(!v.email.trim())x.email='Enter your business email.';else if(!EMAIL.test(v.email.trim()))x.email='Enter a valid email address.'
  if(!v.interest)x.interest='Choose what you are interested in.'
  if(v.details.trim().length<10)x.details='Add a few details (at least 10 characters).'
  setErr(x);setDone(!Object.keys(x).length)
  // TODO(backend): on success, POST `v` to a form service (Formspree, Netlify Forms) or your own API. Nothing is sent today.
 }
 return <section id="contact"><div className="wrap"><h2>Let's Discuss Your Next Project</h2>
  <p className="note">Prototype form: nothing is sent. Real delivery needs a backend or form-service integration.</p>
  {done?<div className="ok" role="status"><h3>Prototype confirmation</h3><p>Your entries passed validation, but no message was sent to anyone.</p><button className="btn" onClick={()=>{setV(blank);setDone(false)}}>Start a new inquiry</button></div>:
  <form className="form" noValidate onSubmit={submit}>
   <F label="Full Name" error={err.name}><input value={v.name} onChange={set('name')} autoComplete="name"/></F>
   <F label="Business Email" error={err.email}><input type="email" value={v.email} onChange={set('email')} autoComplete="email"/></F>
   <F label="Company Name (optional)"><input value={v.company} onChange={set('company')} autoComplete="organization"/></F>
   <F label="Interested In" error={err.interest}><select value={v.interest} onChange={set('interest')}><option value="">Select one</option>{['Services','Products','Project Design','Other'].map(o=><option key={o}>{o}</option>)}</select></F>
   <F label="Project Details" error={err.details}><textarea rows="5" value={v.details} onChange={set('details')}/></F>
   <button className="btn" type="submit">Submit Inquiry</button></form>}</div></section>
}
