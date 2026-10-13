import {Briefcase,Package,PenTool,ClipboardList,Users,ShieldCheck,Target,MessagesSquare,Layers,SlidersHorizontal} from 'lucide-react'
// ---- CONFIG (placeholder) ----
// WhatsApp digits incl. country code, e.g. '15551234567'. Empty = button only shows a setup note; nobody is contacted.
export const WHATSAPP_NUMBER=''
// Photos: Unsplash direct URLs. Change any ID here or point to /public/images/*. <Img> falls back to a navy block if a URL fails.
const u=(id,w=900)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`
export const HERO_IMG=u('1486406146926-c627a92ad1ab',1800)
export const ABOUT_IMG=u('1522071820081-009f0129c71c',1000)
export const SERVICES=[
 {icon:Briefcase,title:'Business Consulting',desc:'Practical support for business requirements.'},
 {icon:Package,title:'Product Sourcing',desc:'Discover suitable products and supply options.'},
 {icon:PenTool,title:'Creative Design',desc:'Turn ideas into clear, professional concepts.'},
 {icon:ClipboardList,title:'Project Execution',desc:'Coordinate requirements, planning, and delivery.'}]
export const VALUES=[
 {icon:ShieldCheck,title:'Quality First',desc:'Careful choices at every stage.'},
 {icon:Users,title:'Customer Focused',desc:'Your goals shape the plan.'},
 {icon:Target,title:'Reliable Execution',desc:'Clear steps from brief to delivery.'}]
export const STEPS=['Understand Your Requirements','Explore Ideas and Options','Prepare a Tailored Proposal','Plan and Execute','Review and Deliver']
export const BENEFITS=[
 {icon:MessagesSquare,title:'Clear Communication',desc:'Plain updates, no guesswork.'},
 {icon:ShieldCheck,title:'Quality-Focused Approach',desc:'Quality checks built into the plan.'},
 {icon:SlidersHorizontal,title:'Flexible Solutions',desc:'Options that adapt to your scope.'},
 {icon:Layers,title:'Customer-Centred Planning',desc:'Plans built around your priorities.'}]
// SAMPLE PLACEHOLDERS: not real reviews.
export const TESTIMONIALS=[
 {text:'Sample placeholder: a short note about clear communication would appear here.',who:'Sample name, Sample company'},
 {text:'Sample placeholder: feedback about the planning process would appear here.',who:'Sample name, Sample company'}]
export const PRODUCT_CATS=['Agricultural Products','Spices & Ingredients','Packaging Solutions','Commercial Equipment','Office & Business Supplies','Custom Solutions']
// DEMONSTRATION PRODUCTS: no real prices, certifications, stock or suppliers.
export const PRODUCTS=[
 {id:'p1',cat:PRODUCT_CATS[0],title:'Demo Grain & Produce Range',desc:'Sample listing for farm-sourced goods.',img:u('1464226184884-fa280b87c399'),alt:'Green crop field at harvest time',details:['Sample category: staple produce','Specifications: to be supplied','Availability: not stated']},
 {id:'p2',cat:PRODUCT_CATS[1],title:'Demo Whole Spice Selection',desc:'Sample listing for spices and ingredients.',img:u('1596040033229-a9821ebd058d'),alt:'Bowls of colourful whole spices',details:['Sample category: whole spices','Grades: to be supplied','Availability: not stated']},
 {id:'p3',cat:PRODUCT_CATS[2],title:'Demo Packaging Range',desc:'Sample cartons and protective packaging.',img:u('1586528116311-ad8dd3c8310d'),alt:'Stacked cardboard boxes in a warehouse',details:['Sample formats: cartons, mailers','Sizes: to be supplied','Custom print: ask us']},
 {id:'p4',cat:PRODUCT_CATS[3],title:'Demo Commercial Kitchen Equipment',desc:'Sample listing for food-service equipment.',img:u('1556910103-1c02745aae4d'),alt:'Stainless steel commercial kitchen',details:['Sample category: food service','Models: to be supplied','Support: not stated']},
 {id:'p5',cat:PRODUCT_CATS[4],title:'Demo Office Supplies Bundle',desc:'Sample stationery and workplace essentials.',img:u('1497032628192-86f99bcd76bc'),alt:'Tidy desk with stationery and notebook',details:['Sample items: stationery, desk gear','Quantities: to be agreed','Ordering: not available in prototype']},
 {id:'p6',cat:PRODUCT_CATS[5],title:'Demo Custom Fabricated Unit',desc:'Sample made-to-brief item from a drawing.',img:u('1503387762-592deb58ef4e'),alt:'Architect reviewing drawings on a desk',details:['Built from your brief','Materials: to be discussed','Timeline: to be agreed']}]
export const PROJECT_CATS=['Exhibition Design','Commercial Spaces','Product Displays']
// FICTIONAL DEMONSTRATION PROJECTS: not real work or clients.
export const PROJECTS=[
 {id:'j1',cat:PROJECT_CATS[0],title:'Aurora Pavilion (concept)',desc:'Open-plan expo stand concept with a central stage.',img:u('1540575467063-178a50c2df87'),alt:'Crowded conference hall with attendees',details:['Type: exhibition stand concept','Focus: visitor flow']},
 {id:'j2',cat:PROJECT_CATS[0],title:'Meridian Expo Stand (concept)',desc:'Modular booth with demo zones and meeting nooks.',img:u('1505373877841-8d25f7d46678'),alt:'Speaker presenting at a large event',details:['Type: modular booth concept','Focus: reuse across shows']},
 {id:'j3',cat:PROJECT_CATS[1],title:'Harbor Lane Office (concept)',desc:'Bright workplace interior with flexible zones.',img:u('1497366216548-37526070297c'),alt:'Modern open office interior with large windows',details:['Type: office interior concept','Focus: daylight and acoustics']},
 {id:'j4',cat:PROJECT_CATS[1],title:'Atrium Retail Concept',desc:'Retail floor layout guiding shoppers through zones.',img:u('1441986300917-64674bd600d8'),alt:'Retail store aisles with shelves',details:['Type: retail layout concept','Focus: wayfinding']},
 {id:'j5',cat:PROJECT_CATS[2],title:'Studio Shelf Display (concept)',desc:'Wall display system for small product ranges.',img:u('1472851294608-062f824d29cc'),alt:'Boutique shop display with products on rails',details:['Type: product display concept','Focus: flexible shelving']},
 {id:'j6',cat:PROJECT_CATS[2],title:'Showcase Plinth Series',desc:'Plinths and lighting to present hero products.',img:u('1524758631624-e2822e304c36'),alt:'Minimal interior with display furniture',details:['Type: display furniture concept','Focus: lighting and material']}]
export const PRIVACY={title:'Privacy Policy (placeholder)',desc:'This prototype stores and sends no data. Replace this text with your real privacy policy before launch.'}
