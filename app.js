'use strict'

const copy={
 en:{privacy:'100% browser-local · Nothing is uploaded',titleA:'Clean unwanted overlays from',titleB:'images you own',subtitle:'A free, privacy-first image cleanup utility for creators, students, researchers, and small businesses. Select an area, preview the repair, and export locally.',start:'Start cleaning',github:'GitHub-ready project',local:'Local processing',batch:'Batch workflow',formats:'JPG, PNG & WebP',dropTitle:'Drop your images here',dropBody:'or click to select files · up to 25 MB each',choose:'Choose images',rights:'I confirm that I own these images or have permission to edit them. I will not use this tool to misrepresent authorship or infringe rights.',workspace:'Cleanup workspace',draw:'Drag over the unwanted overlay to select it.',mode:'Repair mode',edge:'Edge blend',edgeHelp:'Best for small corner overlays on simple backgrounds.',soft:'Soft fill',softHelp:'Best for flat or softly textured areas.',blur:'Privacy blur',blurHelp:'Obscures sensitive details without reconstructing them.',feather:'Edge softness',cleanCurrent:'Clean current image',cleanAll:'Apply selection to all',reset:'Reset selection',before:'Before',after:'After',compare:'Compare',queue:'Image queue',download:'Download PNG',downloadAll:'Download completed ZIP',remove:'Remove image',ready:'Ready',processing:'Processing',done:'Completed',failed:'Failed',empty:'Upload an image to open the workspace.',how:'How it helps',how1Title:'Private by design',how1Body:'Files stay on your device. No account, server upload, or tracking pixel is needed.',how2Title:'Useful on slow connections',how2Body:'After the app loads, image processing uses your browser and does not consume upload bandwidth.',how3Title:'Honest editing',how3Body:'A clear rights confirmation and visible-use policy help discourage copyright misuse.',responsible:'Responsible-use note',responsibleBody:'CleanMark is for images you created, commissioned, licensed, or otherwise have permission to edit. It removes visible pixels only and does not remove invisible provenance signals or metadata.',powered:'Powered by KAI AI',crafted:'Built to make practical image tools accessible to everyone.',openSource:'Open-source under the MIT License.',selectionSmall:'Please draw a larger selection first.',rightsNeeded:'Confirm your editing rights before processing.',unsupported:'Some files were skipped. Use JPG, PNG, or WebP under 25 MB.',noCompleted:'Process at least one image before downloading a ZIP.',processingError:'The image could not be processed.'},
 bn:{privacy:'১০০% ব্রাউজারেই কাজ করে · কোনো ছবি আপলোড হয় না',titleA:'নিজের ছবির অনাকাঙ্ক্ষিত অংশ',titleB:'সহজে পরিষ্কার করুন',subtitle:'ক্রিয়েটর, শিক্ষার্থী, গবেষক ও ক্ষুদ্র ব্যবসার জন্য বিনামূল্যের গোপনীয়তা-কেন্দ্রিক ইমেজ ক্লিনআপ টুল। জায়গা নির্বাচন করুন, ফলাফল দেখুন এবং নিজের ডিভাইসেই এক্সপোর্ট করুন।',start:'কাজ শুরু করুন',github:'GitHub-ready প্রজেক্ট',local:'লোকাল প্রসেসিং',batch:'একসঙ্গে অনেক ছবি',formats:'JPG, PNG ও WebP',dropTitle:'ছবি এখানে ছেড়ে দিন',dropBody:'অথবা ক্লিক করে নির্বাচন করুন · প্রতি ফাইল সর্বোচ্চ ২৫ MB',choose:'ছবি নির্বাচন করুন',rights:'আমি নিশ্চিত করছি যে ছবিগুলো আমার নিজের অথবা এগুলো সম্পাদনার অনুমতি আমার আছে। লেখকত্ব ভুলভাবে উপস্থাপন বা অধিকার লঙ্ঘনের কাজে টুলটি ব্যবহার করব না।',workspace:'ক্লিনআপ ওয়ার্কস্পেস',draw:'অনাকাঙ্ক্ষিত অংশের ওপর টেনে একটি বক্স আঁকুন।',mode:'রিপেয়ার মোড',edge:'এজ ব্লেন্ড',edgeHelp:'সহজ ব্যাকগ্রাউন্ডের ছোট কোণার ওভারলের জন্য ভালো।',soft:'সফট ফিল',softHelp:'সমতল বা হালকা টেক্সচারের জায়গার জন্য ভালো।',blur:'প্রাইভেসি ব্লার',blurHelp:'পুনর্গঠন না করে সংবেদনশীল অংশ অস্পষ্ট করে।',feather:'প্রান্তের কোমলতা',cleanCurrent:'বর্তমান ছবি পরিষ্কার করুন',cleanAll:'সব ছবিতে একই নির্বাচন প্রয়োগ করুন',reset:'নির্বাচন রিসেট',before:'আগে',after:'পরে',compare:'তুলনা',queue:'ছবির তালিকা',download:'PNG ডাউনলোড',downloadAll:'সম্পন্ন ছবি ZIP ডাউনলোড',remove:'ছবি সরান',ready:'প্রস্তুত',processing:'প্রসেস হচ্ছে',done:'সম্পন্ন',failed:'ব্যর্থ',empty:'ওয়ার্কস্পেস খুলতে একটি ছবি আপলোড করুন।',how:'যেভাবে মানুষের কাজে লাগবে',how1Title:'গোপনীয়তা প্রথম',how1Body:'ফাইল আপনার ডিভাইসেই থাকে। অ্যাকাউন্ট, সার্ভার আপলোড বা ট্র্যাকিং পিক্সেল লাগে না।',how2Title:'ধীর ইন্টারনেটেও উপযোগী',how2Body:'অ্যাপ লোড হওয়ার পর প্রসেসিং ব্রাউজারেই হয়, তাই ছবি আপলোডের ডেটা লাগে না।',how3Title:'দায়িত্বশীল সম্পাদনা',how3Body:'অধিকার নিশ্চিতকরণ ও স্পষ্ট ব্যবহারনীতি কপিরাইট অপব্যবহার নিরুৎসাহিত করে।',responsible:'দায়িত্বশীল ব্যবহারের নোট',responsibleBody:'CleanMark কেবল আপনার তৈরি, অর্ডার করা, লাইসেন্সপ্রাপ্ত বা সম্পাদনার অনুমতি থাকা ছবির জন্য। এটি শুধু দৃশ্যমান পিক্সেল পরিবর্তন করে; অদৃশ্য provenance signal বা metadata সরায় না।',powered:'KAI AI দ্বারা পরিচালিত',crafted:'সবার জন্য ব্যবহারিক ইমেজ টুল সহজলভ্য করার উদ্দেশ্যে তৈরি।',openSource:'MIT License-এর অধীনে ওপেন সোর্স।',selectionSmall:'আগে একটু বড় জায়গা নির্বাচন করুন।',rightsNeeded:'প্রসেসিংয়ের আগে সম্পাদনার অধিকার নিশ্চিত করুন।',unsupported:'কিছু ফাইল বাদ গেছে। ২৫ MB-এর কম JPG, PNG বা WebP ব্যবহার করুন।',noCompleted:'ZIP ডাউনলোডের আগে অন্তত একটি ছবি প্রসেস করুন।',processingError:'ছবিটি প্রসেস করা যায়নি।'}
}

const state={language:'en',theme:'dark',items:[],activeId:null,selection:{x:.72,y:.72,width:.22,height:.2},mode:'edge',feather:12,compare:55,dragging:false,dragStart:null}
const MAX_SIZE=25*1024*1024
const supportedTypes=new Set(['image/jpeg','image/png','image/webp'])
const $=selector=>document.querySelector(selector)
const $$=selector=>[...document.querySelectorAll(selector)]
const t=()=>copy[state.language]

function translate(){
 document.documentElement.lang=state.language
 $$('[data-i18n]').forEach(node=>{const key=node.dataset.i18n;if(t()[key])node.textContent=t()[key]})
 $('#languageButton span').textContent=state.language==='en'?'বাংলা':'English'
 $('#selectionLabel').textContent=state.mode==='blur'?t().blur:t().compare
 renderPreview();renderQueue()
}
function showToast(message){const toast=$('#toast');toast.textContent=`🛡 ${message}`;toast.classList.remove('hidden');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.add('hidden'),3600)}
function activeItem(){return state.items.find(item=>item.id===state.activeId)||state.items[0]||null}
function statusText(status){return status==='ready'?t().ready:status==='processing'?t().processing:status==='done'?t().done:t().failed}
function statusClass(status){return `status status-${status}`}
function uid(){return crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(16).slice(2)}`}
function loadImage(url){return new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=()=>reject(new Error('Could not read image'));image.src=url})}
async function addFiles(files){
 const valid=files.filter(file=>supportedTypes.has(file.type)&&file.size<=MAX_SIZE)
 if(valid.length!==files.length)showToast(t().unsupported)
 for(const file of valid){
  try{const sourceUrl=URL.createObjectURL(file);const image=await loadImage(sourceUrl);const item={id:uid(),file,name:file.name,sourceUrl,resultUrl:null,resultBlob:null,width:image.naturalWidth,height:image.naturalHeight,status:'ready',error:null};state.items.push(item);if(!state.activeId)state.activeId=item.id}
  catch{showToast(t().unsupported)}
 }
 renderAll()
}
function renderAll(){
 const has=state.items.length>0
 $('#emptyWorkspace').classList.toggle('hidden',has)
 $('#workspaceGrid').classList.toggle('hidden',!has)
 $('#queueSection').classList.toggle('hidden',!has)
 renderPreview();renderQueue()
}
function renderPreview(){
 const item=activeItem();if(!item)return
 const index=state.items.findIndex(entry=>entry.id===item.id)
 $('#activeName').textContent=item.name;$('#activeDimensions').textContent=`${item.width} × ${item.height}`;$('#activeCounter').textContent=`${index+1} / ${state.items.length}`
 $('#sourceImage').src=item.sourceUrl
 const hasResult=Boolean(item.resultUrl);$('#resultLayer').classList.toggle('hidden',!hasResult);$('#compareLine').classList.toggle('hidden',!hasResult);$('#compareSlider').disabled=!hasResult;$('#downloadCurrent').disabled=!item.resultBlob
 if(hasResult)$('#resultImage').src=item.resultUrl
 $('#resultLayer').style.clipPath=`inset(0 ${100-state.compare}% 0 0)`;$('#compareLine').style.left=`${state.compare}%`;$('#compareSlider').value=state.compare
 const box=$('#selectionBox');box.style.left=`${state.selection.x*100}%`;box.style.top=`${state.selection.y*100}%`;box.style.width=`${state.selection.width*100}%`;box.style.height=`${state.selection.height*100}%`;box.classList.toggle('drawing',state.dragging)
 $('#selectionLabel').textContent=state.mode==='blur'?t().blur:t().compare
 const status=$('#activeStatus');status.className=statusClass(item.status);status.textContent=statusText(item.status)
 $('#cleanCurrent').disabled=item.status==='processing';$('#cleanAll').disabled=state.items.some(entry=>entry.status==='processing')
}
function renderQueue(){
 const grid=$('#queueGrid');grid.innerHTML=''
 state.items.forEach(item=>{const card=document.createElement('article');card.className=`queue-card ${item.id===activeItem()?.id?'active':''}`;card.innerHTML=`<img alt=""><div class="queue-info"><strong></strong><span></span></div><button class="queue-remove" type="button" title="${t().remove}" aria-label="${t().remove}">×</button>`;card.querySelector('img').src=item.resultUrl||item.sourceUrl;card.querySelector('strong').textContent=item.name;const status=card.querySelector('.queue-info span');status.className=statusClass(item.status);status.textContent=statusText(item.status);card.addEventListener('click',()=>{state.activeId=item.id;state.compare=55;renderAll()});card.querySelector('button').addEventListener('click',event=>{event.stopPropagation();removeItem(item.id)});grid.appendChild(card)})
}
function removeItem(id){const item=state.items.find(entry=>entry.id===id);if(item){URL.revokeObjectURL(item.sourceUrl);if(item.resultUrl)URL.revokeObjectURL(item.resultUrl)}state.items=state.items.filter(entry=>entry.id!==id);if(state.activeId===id)state.activeId=state.items[0]?.id||null;renderAll()}
function navigate(direction){if(!state.items.length)return;const index=state.items.findIndex(item=>item.id===activeItem().id);state.activeId=state.items[(index+direction+state.items.length)%state.items.length].id;state.compare=55;renderAll()}

const clamp=(value,min,max)=>Math.min(max,Math.max(min,value))
function samplePixel(data,width,height,x,y){const sx=clamp(Math.round(x),0,width-1),sy=clamp(Math.round(y),0,height-1),index=(sy*width+sx)*4;return[data[index],data[index+1],data[index+2],data[index+3]]}
function averageBorder(data,width,height,x0,y0,x1,y1){const sum=[0,0,0,0];let count=0;const push=(x,y)=>{const pixel=samplePixel(data,width,height,x,y);for(let c=0;c<4;c++)sum[c]+=pixel[c];count++};for(let x=x0;x<x1;x++){if(y0>0)push(x,y0-1);if(y1<height)push(x,y1)}for(let y=y0;y<y1;y++){if(x0>0)push(x0-1,y);if(x1<width)push(x1,y)}return count?sum.map(value=>value/count):[127,127,127,255]}
function edgeBlend(original,output,width,height,x0,y0,x1,y1,feather){
 for(let y=y0;y<y1;y++)for(let x=x0;x<x1;x++){const candidates=[];if(x0>0)candidates.push({pixel:samplePixel(original,width,height,x0-1,y),weight:1/(x-x0+1)});if(x1<width)candidates.push({pixel:samplePixel(original,width,height,x1,y),weight:1/(x1-x)});if(y0>0)candidates.push({pixel:samplePixel(original,width,height,x,y0-1),weight:1/(y-y0+1)});if(y1<height)candidates.push({pixel:samplePixel(original,width,height,x,y1),weight:1/(y1-y)});const sum=[0,0,0,0];let total=0;candidates.forEach(candidate=>{for(let c=0;c<4;c++)sum[c]+=candidate.pixel[c]*candidate.weight;total+=candidate.weight});if(!total){const p=samplePixel(original,width,height,Math.max(0,x0-1),Math.max(0,y0-1));for(let c=0;c<4;c++)sum[c]=p[c];total=1}const edgeDistance=Math.min(x-x0,x1-1-x,y-y0,y1-1-y),mix=feather<=0?1:clamp((edgeDistance+1)/feather,.18,1),index=(y*width+x)*4;for(let c=0;c<4;c++){const repaired=sum[c]/total;output[index+c]=Math.round(original[index+c]*(1-mix)+repaired*mix)}}
}
function softFill(original,output,width,height,x0,y0,x1,y1,feather){const average=averageBorder(original,width,height,x0,y0,x1,y1);for(let y=y0;y<y1;y++)for(let x=x0;x<x1;x++){const index=(y*width+x)*4,edgeDistance=Math.min(x-x0,x1-1-x,y-y0,y1-1-y),mix=feather<=0?1:clamp((edgeDistance+1)/feather,.22,1),grain=(((x*17+y*31)%11)-5)*.35;for(let c=0;c<3;c++){const repaired=clamp(average[c]+grain,0,255);output[index+c]=Math.round(original[index+c]*(1-mix)+repaired*mix)}output[index+3]=original[index+3]}}
function blurRegion(original,output,width,height,x0,y0,x1,y1,radius){const r=clamp(Math.round(radius),2,20),step=Math.max(1,Math.floor(r/2));for(let y=y0;y<y1;y++)for(let x=x0;x<x1;x++){const sum=[0,0,0,0];let count=0;for(let sy=y-r;sy<=y+r;sy+=step)for(let sx=x-r;sx<=x+r;sx+=step){const pixel=samplePixel(original,width,height,sx,sy);for(let c=0;c<4;c++)sum[c]+=pixel[c];count++}const index=(y*width+x)*4;for(let c=0;c<4;c++)output[index+c]=Math.round(sum[c]/count)}}
async function processImage(sourceUrl){const image=await loadImage(sourceUrl),canvas=document.createElement('canvas');canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;const context=canvas.getContext('2d',{willReadFrequently:true});if(!context)throw new Error('Canvas unavailable');context.drawImage(image,0,0);const width=canvas.width,height=canvas.height,x0=clamp(Math.floor(state.selection.x*width),0,width-1),y0=clamp(Math.floor(state.selection.y*height),0,height-1),x1=clamp(Math.ceil((state.selection.x+state.selection.width)*width),x0+1,width),y1=clamp(Math.ceil((state.selection.y+state.selection.height)*height),y0+1,height),imageData=context.getImageData(0,0,width,height),original=new Uint8ClampedArray(imageData.data),output=imageData.data;if(state.mode==='edge')edgeBlend(original,output,width,height,x0,y0,x1,y1,state.feather);if(state.mode==='soft')softFill(original,output,width,height,x0,y0,x1,y1,state.feather);if(state.mode==='blur')blurRegion(original,output,width,height,x0,y0,x1,y1,state.feather+3);context.putImageData(imageData,0,0);const blob=await new Promise((resolve,reject)=>canvas.toBlob(value=>value?resolve(value):reject(new Error('Export failed')),'image/png',1));return{blob,url:URL.createObjectURL(blob)}}
function validateProcessing(){if(!$('#rightsCheckbox').checked){showToast(t().rightsNeeded);return false}if(state.selection.width<.015||state.selection.height<.015){showToast(t().selectionSmall);return false}return true}
async function runForItem(item){item.status='processing';item.error=null;renderAll();await new Promise(resolve=>requestAnimationFrame(resolve));try{const result=await processImage(item.sourceUrl);if(item.resultUrl)URL.revokeObjectURL(item.resultUrl);item.resultBlob=result.blob;item.resultUrl=result.url;item.status='done';state.compare=55}catch(error){item.status='error';item.error=error instanceof Error?error.message:t().processingError}renderAll()}
async function cleanCurrent(){const item=activeItem();if(!item||!validateProcessing())return;await runForItem(item)}
async function cleanAll(){if(!state.items.length||!validateProcessing())return;for(const item of state.items)await runForItem(item)}
function cleanFilename(filename){const dot=filename.lastIndexOf('.'),base=dot>-1?filename.slice(0,dot):filename;return`${base}-cleanmark.png`}
function downloadBlob(blob,filename){const url=URL.createObjectURL(blob),anchor=document.createElement('a');anchor.href=url;anchor.download=filename;document.body.appendChild(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}

const crcTable=(()=>{const table=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=(c&1)?0xedb88320^(c>>>1):c>>>1;table[n]=c>>>0}return table})()
function crc32(bytes){let crc=0xffffffff;for(const byte of bytes)crc=crcTable[(crc^byte)&255]^(crc>>>8);return(crc^0xffffffff)>>>0}
function dosDateTime(date=new Date()){let year=Math.max(1980,date.getFullYear());const time=(date.getHours()<<11)|(date.getMinutes()<<5)|(date.getSeconds()>>1),day=((year-1980)<<9)|((date.getMonth()+1)<<5)|date.getDate();return{time,day}}
function u16(value){const a=new Uint8Array(2);new DataView(a.buffer).setUint16(0,value,true);return a}
function u32(value){const a=new Uint8Array(4);new DataView(a.buffer).setUint32(0,value>>>0,true);return a}
function concat(parts){const size=parts.reduce((sum,part)=>sum+part.length,0),out=new Uint8Array(size);let offset=0;for(const part of parts){out.set(part,offset);offset+=part.length}return out}
async function createZip(files){const encoder=new TextEncoder(),locals=[],centrals=[];let offset=0;const{time,day}=dosDateTime();for(const file of files){const name=encoder.encode(file.name),data=new Uint8Array(await file.blob.arrayBuffer()),crc=crc32(data),local=concat([u32(0x04034b50),u16(20),u16(0x0800),u16(0),u16(time),u16(day),u32(crc),u32(data.length),u32(data.length),u16(name.length),u16(0),name,data]);locals.push(local);const central=concat([u32(0x02014b50),u16(20),u16(20),u16(0x0800),u16(0),u16(time),u16(day),u32(crc),u32(data.length),u32(data.length),u16(name.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset),name]);centrals.push(central);offset+=local.length}const centralData=concat(centrals),localData=concat(locals),end=concat([u32(0x06054b50),u16(0),u16(0),u16(files.length),u16(files.length),u32(centralData.length),u32(localData.length),u16(0)]);return new Blob([localData,centralData,end],{type:'application/zip'})}
async function downloadZip(){const completed=state.items.filter(item=>item.resultBlob);if(!completed.length){showToast(t().noCompleted);return}const blob=await createZip(completed.map(item=>({name:cleanFilename(item.name),blob:item.resultBlob})));downloadBlob(blob,'cleanmark-results.zip')}

function pointerPosition(event){const bounds=$('#imageStage').getBoundingClientRect();return{x:clamp((event.clientX-bounds.left)/bounds.width,0,1),y:clamp((event.clientY-bounds.top)/bounds.height,0,1)}}
function startSelection(event){if(!activeItem())return;const p=pointerPosition(event);event.currentTarget.setPointerCapture(event.pointerId);state.dragStart=p;state.dragging=true;state.selection={x:p.x,y:p.y,width:0,height:0};renderPreview()}
function updateSelection(event){if(!state.dragging||!state.dragStart)return;const p=pointerPosition(event);state.selection={x:Math.min(state.dragStart.x,p.x),y:Math.min(state.dragStart.y,p.y),width:Math.abs(p.x-state.dragStart.x),height:Math.abs(p.y-state.dragStart.y)};renderPreview()}
function endSelection(){state.dragging=false;state.dragStart=null;renderPreview()}

$('#languageButton').addEventListener('click',()=>{state.language=state.language==='en'?'bn':'en';translate()})
$('#themeButton').addEventListener('click',()=>{state.theme=state.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=state.theme;$('#themeButton').textContent=state.theme==='dark'?'☀':'☾'})
$('#dropzone').addEventListener('click',()=>$('#fileInput').click())
$('#dropzone').addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();$('#fileInput').click()}})
$('#fileInput').addEventListener('change',event=>{addFiles([...event.target.files]);event.target.value=''})
;['dragenter','dragover'].forEach(type=>$('#dropzone').addEventListener(type,event=>{event.preventDefault();$('#dropzone').classList.add('is-dropping')}))
;['dragleave','drop'].forEach(type=>$('#dropzone').addEventListener(type,event=>{event.preventDefault();$('#dropzone').classList.remove('is-dropping')}))
$('#dropzone').addEventListener('drop',event=>addFiles([...event.dataTransfer.files]))
$$('.mode-card').forEach(button=>button.addEventListener('click',()=>{$$('.mode-card').forEach(node=>node.classList.remove('active'));button.classList.add('active');state.mode=button.dataset.mode;renderPreview()}))
$('#feather').addEventListener('input',event=>{state.feather=Number(event.target.value);$('#featherValue').textContent=`${state.feather}px`})
$('#cleanCurrent').addEventListener('click',cleanCurrent);$('#cleanAll').addEventListener('click',cleanAll);$('#resetSelection').addEventListener('click',()=>{state.selection={x:.72,y:.72,width:.22,height:.2};renderPreview()});$('#previousImage').addEventListener('click',()=>navigate(-1));$('#nextImage').addEventListener('click',()=>navigate(1));$('#compareSlider').addEventListener('input',event=>{state.compare=Number(event.target.value);renderPreview()});$('#downloadCurrent').addEventListener('click',()=>{const item=activeItem();if(item?.resultBlob)downloadBlob(item.resultBlob,cleanFilename(item.name))});$('#downloadZip').addEventListener('click',downloadZip)
$('#imageStage').addEventListener('pointerdown',startSelection);$('#imageStage').addEventListener('pointermove',updateSelection);$('#imageStage').addEventListener('pointerup',endSelection);$('#imageStage').addEventListener('pointercancel',endSelection)
window.addEventListener('beforeunload',()=>state.items.forEach(item=>{URL.revokeObjectURL(item.sourceUrl);if(item.resultUrl)URL.revokeObjectURL(item.resultUrl)}))
$('#copyright').textContent=`© ${new Date().getFullYear()} KAI AI`
translate();renderAll()
