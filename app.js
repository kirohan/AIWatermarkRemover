'use strict'

const copy = {
  en: {
    privacy: '100% browser-local · Nothing is uploaded',
    titleA: 'Remove unwanted marks from',
    titleB: 'your images and videos',
    subtitle: 'A free, privacy-first cleanup utility for creators, students, researchers, and small businesses. Select an area, preview the result, and export on your own device.',
    imageTool: 'Image remover',
    videoTool: 'Video remover',
    local: 'Local processing',
    batch: 'Batch images',
    mediaFormats: 'Image & video support',
    imageHeading: 'Image watermark cleanup',
    imageIntro: 'Upload one or many images, select the visible mark, and choose a repair method.',
    dropTitle: 'Drop your images here',
    dropBody: 'or click to select files · up to 25 MB each',
    choose: 'Choose images',
    rights: 'I confirm that I own these images or have permission to edit them. I will not use this tool to misrepresent authorship or infringe rights.',
    workspace: 'Image cleanup workspace',
    draw: 'Drag over the unwanted mark to select it.',
    mode: 'Repair mode',
    edge: 'Edge blend',
    edgeHelp: 'Best for small corner marks on simple backgrounds.',
    soft: 'Soft fill',
    softHelp: 'Best for flat or softly textured areas.',
    blur: 'Privacy blur',
    blurHelp: 'Obscures sensitive details without reconstructing them.',
    feather: 'Edge softness',
    cleanCurrent: 'Clean current image',
    cleanAll: 'Apply selection to all',
    reset: 'Reset selection',
    before: 'Before',
    after: 'After',
    compare: 'Selected area',
    queue: 'Image queue',
    download: 'Download PNG',
    downloadAll: 'Download completed ZIP',
    remove: 'Remove image',
    ready: 'Ready',
    processing: 'Processing',
    done: 'Completed',
    failed: 'Failed',
    stopped: 'Stopped',
    empty: 'Upload an image to open the workspace.',
    videoHeading: 'Video watermark remover',
    videoIntro: 'The advanced engine detects supported Gemini/Veo marks, decodes the video frame by frame with WebCodecs, applies local cleanup, and rebuilds an MP4 without uploading your file.',
    videoDropTitle: 'Drop a video here',
    videoDropBody: 'MP4, WebM, or MOV · up to 500 MB · one video at a time',
    chooseVideo: 'Choose video',
    videoRights: 'I confirm that I own this video or have permission to edit it. I will not remove ownership, platform, or provenance marks from content I am not authorized to modify.',
    videoMode: 'Frame restoration mode',
    videoRestore: 'Gemini/Veo restore',
    videoRestoreHelp: 'Detects bright translucent logo pixels inside the selected area and reconstructs them from nearby frame texture.',
    frameInpaint: 'Frame inpaint',
    frameInpaintHelp: 'Rebuilds the whole selected area from the closest matching pixels on every decoded frame.',
    videoBlur: 'Fallback blur',
    videoBlurHelp: 'Obscures the selected area when restoration cannot reconstruct a complex background.',
    pixelate: 'Pixelate',
    pixelateHelp: 'Strongly hides the selected area with a mosaic effect.',
    cleanPatch: 'Clean patch',
    cleanPatchHelp: 'Copies nearby pixels over a fixed corner mark. Best on simple backgrounds.',
    strength: 'Restoration sensitivity',
    autoCorner: 'Auto-select Gemini/Veo corner',
    processVideo: 'Restore frame by frame',
    stopProcessing: 'Stop processing',
    replaceVideo: 'Choose another video',
    videoNote: 'Each decoded frame is processed individually with requestVideoFrameCallback, then captured into a new browser-local video. Chrome or Edge is recommended. Audio is preserved when the browser exposes the source audio track. Large videos may be scaled to a 1920px maximum edge.',
    videoResult: 'Processed video',
    downloadVideo: 'Download video',
    loadingVideo: 'Loading video',
    videoUnsupported: 'This video cannot be decoded by your browser. Try an MP4 (H.264) or WebM file under 500 MB.',
    videoApiUnsupported: 'This browser cannot run the frame capture pipeline. Use a recent desktop Chrome or Edge browser.',
    videoNoFile: 'Choose a video first.',
    videoSelectionSmall: 'Draw a larger area over the mark first.',
    videoProcessingError: 'The video could not be processed in this browser.',
    videoComplete: 'Frame-by-frame restoration completed',
    videoStopped: 'Processing stopped',
    how: 'How it helps',
    how1Title: 'Private by design',
    how1Body: 'Files stay on your device. No account, server upload, or tracking pixel is needed.',
    how2Title: 'Useful on slow connections',
    how2Body: 'After the page loads, media processing uses your browser and does not consume upload bandwidth.',
    how3Title: 'Honest editing',
    how3Body: 'Clear rights confirmations and visible-use guidance help discourage copyright misuse.',
    responsible: 'Responsible-use note',
    responsibleBody: 'KAI AI Removes is for media you created, commissioned, licensed, or otherwise have permission to edit. It changes visible pixels only and does not remove invisible provenance signals or metadata.',
    powered: 'Created by KAI AI',
    crafted: 'Built to make practical privacy-first media tools accessible to everyone.',
    selectionSmall: 'Please draw a larger selection first.',
    rightsNeeded: 'Confirm your editing rights before processing.',
    unsupported: 'Some files were skipped. Use JPG, PNG, or WebP under 25 MB.',
    noCompleted: 'Process at least one image before downloading a ZIP.',
    processingError: 'The image could not be processed.'
  },
  bn: {
    privacy: '১০০% ব্রাউজারেই কাজ করে · কোনো ফাইল আপলোড হয় না',
    titleA: 'নিজের ছবি ও ভিডিওর',
    titleB: 'অনাকাঙ্ক্ষিত চিহ্ন সরান',
    subtitle: 'ক্রিয়েটর, শিক্ষার্থী, গবেষক ও ক্ষুদ্র ব্যবসার জন্য বিনামূল্যের গোপনীয়তা-কেন্দ্রিক ক্লিনআপ টুল। জায়গা নির্বাচন করুন, ফলাফল দেখুন এবং নিজের ডিভাইসেই এক্সপোর্ট করুন।',
    imageTool: 'ইমেজ রিমুভার',
    videoTool: 'ভিডিও রিমুভার',
    local: 'লোকাল প্রসেসিং',
    batch: 'একসঙ্গে অনেক ছবি',
    mediaFormats: 'ছবি ও ভিডিও সাপোর্ট',
    imageHeading: 'ইমেজ ওয়াটারমার্ক ক্লিনআপ',
    imageIntro: 'এক বা একাধিক ছবি দিন, দৃশ্যমান চিহ্ন নির্বাচন করুন এবং রিপেয়ার পদ্ধতি বেছে নিন।',
    dropTitle: 'ছবি এখানে ছেড়ে দিন',
    dropBody: 'অথবা ক্লিক করে নির্বাচন করুন · প্রতি ফাইল সর্বোচ্চ ২৫ MB',
    choose: 'ছবি নির্বাচন করুন',
    rights: 'আমি নিশ্চিত করছি যে ছবিগুলো আমার নিজের অথবা এগুলো সম্পাদনার অনুমতি আমার আছে। লেখকত্ব ভুলভাবে উপস্থাপন বা অধিকার লঙ্ঘনের কাজে টুলটি ব্যবহার করব না।',
    workspace: 'ইমেজ ক্লিনআপ ওয়ার্কস্পেস',
    draw: 'অনাকাঙ্ক্ষিত চিহ্নের ওপর টেনে একটি বক্স আঁকুন।',
    mode: 'রিপেয়ার মোড',
    edge: 'এজ ব্লেন্ড',
    edgeHelp: 'সহজ ব্যাকগ্রাউন্ডের ছোট কোণার চিহ্নের জন্য ভালো।',
    soft: 'সফট ফিল',
    softHelp: 'সমতল বা হালকা টেক্সচারের জায়গার জন্য ভালো।',
    blur: 'প্রাইভেসি ব্লার',
    blurHelp: 'পুনর্গঠন না করে সংবেদনশীল অংশ অস্পষ্ট করে।',
    feather: 'প্রান্তের কোমলতা',
    cleanCurrent: 'বর্তমান ছবি পরিষ্কার করুন',
    cleanAll: 'সব ছবিতে একই নির্বাচন প্রয়োগ করুন',
    reset: 'নির্বাচন রিসেট',
    before: 'আগে',
    after: 'পরে',
    compare: 'নির্বাচিত জায়গা',
    queue: 'ছবির তালিকা',
    download: 'PNG ডাউনলোড',
    downloadAll: 'সম্পন্ন ছবি ZIP ডাউনলোড',
    remove: 'ছবি সরান',
    ready: 'প্রস্তুত',
    processing: 'প্রসেস হচ্ছে',
    done: 'সম্পন্ন',
    failed: 'ব্যর্থ',
    stopped: 'বন্ধ হয়েছে',
    empty: 'ওয়ার্কস্পেস খুলতে একটি ছবি আপলোড করুন।',
    videoHeading: 'ভিডিও ওয়াটারমার্ক রিমুভার',
    videoIntro: 'উন্নত ইঞ্জিন সমর্থিত Gemini/Veo চিহ্ন শনাক্ত করে WebCodecs দিয়ে প্রতিটি ফ্রেম আলাদাভাবে প্রসেস করে এবং ফাইল আপলোড না করেই নতুন MP4 তৈরি করে।',
    videoDropTitle: 'ভিডিও এখানে ছেড়ে দিন',
    videoDropBody: 'MP4, WebM বা MOV · সর্বোচ্চ ৫০০ MB · একবারে একটি ভিডিও',
    chooseVideo: 'ভিডিও নির্বাচন করুন',
    videoRights: 'আমি নিশ্চিত করছি যে ভিডিওটি আমার নিজের অথবা এটি সম্পাদনার অনুমতি আমার আছে। অনুমতি নেই এমন কনটেন্ট থেকে মালিকানা, প্ল্যাটফর্ম বা provenance চিহ্ন সরাব না।',
    videoMode: 'ফ্রেম রিস্টোরেশন মোড',
    videoRestore: 'Gemini/Veo রিস্টোর',
    videoRestoreHelp: 'নির্বাচিত অংশের উজ্জ্বল স্বচ্ছ লোগো পিক্সেল শনাক্ত করে আশপাশের ফ্রেম টেক্সচার থেকে পুনর্গঠন করে।',
    frameInpaint: 'ফ্রেম ইনপেইন্ট',
    frameInpaintHelp: 'প্রতিটি ডিকোড করা ফ্রেমে কাছাকাছি পিক্সেল ব্যবহার করে নির্বাচিত পুরো অংশ পুনর্নির্মাণ করে।',
    videoBlur: 'ফলব্যাক ব্লার',
    videoBlurHelp: 'জটিল ব্যাকগ্রাউন্ড পুনর্গঠন সম্ভব না হলে নির্বাচিত অংশ অস্পষ্ট করে।',
    pixelate: 'পিক্সেলেট',
    pixelateHelp: 'মোজাইক ইফেক্ট দিয়ে নির্বাচিত জায়গা শক্তভাবে আড়াল করে।',
    cleanPatch: 'ক্লিন প্যাচ',
    cleanPatchHelp: 'কাছের পিক্সেল কপি করে স্থির কোণার চিহ্ন ঢাকে। সহজ ব্যাকগ্রাউন্ডে ভালো।',
    strength: 'রিস্টোরেশন সেনসিটিভিটি',
    autoCorner: 'Gemini/Veo কোণা অটো-সিলেক্ট',
    processVideo: 'ফ্রেম ধরে রিস্টোর করুন',
    stopProcessing: 'প্রসেসিং বন্ধ করুন',
    replaceVideo: 'অন্য ভিডিও নির্বাচন করুন',
    videoNote: 'requestVideoFrameCallback ব্যবহার করে প্রতিটি ডিকোড করা ফ্রেম আলাদাভাবে প্রসেস করে নতুন লোকাল ভিডিও বানানো হয়। Chrome বা Edge ব্যবহার করা ভালো। ব্রাউজার source audio track দিলে অডিও সংরক্ষিত থাকবে। বড় ভিডিও সর্বোচ্চ ১৯২০px edge-এ scale হতে পারে।',
    videoResult: 'প্রসেস করা ভিডিও',
    downloadVideo: 'ভিডিও ডাউনলোড',
    loadingVideo: 'ভিডিও লোড হচ্ছে',
    videoUnsupported: 'আপনার ব্রাউজার ভিডিওটি চালাতে পারছে না। ৫০০ MB-এর কম MP4 (H.264) বা WebM ব্যবহার করুন।',
    videoApiUnsupported: 'এই ব্রাউজার frame capture pipeline চালাতে পারছে না। সাম্প্রতিক desktop Chrome বা Edge ব্যবহার করুন।',
    videoNoFile: 'আগে একটি ভিডিও নির্বাচন করুন।',
    videoSelectionSmall: 'চিহ্নের ওপর একটু বড় জায়গা নির্বাচন করুন।',
    videoProcessingError: 'এই ব্রাউজারে ভিডিওটি প্রসেস করা যায়নি।',
    videoComplete: 'ফ্রেম ধরে রিস্টোর সম্পন্ন হয়েছে',
    videoStopped: 'প্রসেসিং বন্ধ হয়েছে',
    how: 'যেভাবে মানুষের কাজে লাগবে',
    how1Title: 'গোপনীয়তা প্রথম',
    how1Body: 'ফাইল আপনার ডিভাইসেই থাকে। অ্যাকাউন্ট, সার্ভার আপলোড বা ট্র্যাকিং পিক্সেল লাগে না।',
    how2Title: 'ধীর ইন্টারনেটেও উপযোগী',
    how2Body: 'পেজ লোড হওয়ার পর প্রসেসিং ব্রাউজারেই হয়, তাই মিডিয়া আপলোডের ডেটা লাগে না।',
    how3Title: 'দায়িত্বশীল সম্পাদনা',
    how3Body: 'অধিকার নিশ্চিতকরণ ও স্পষ্ট ব্যবহারনীতি কপিরাইট অপব্যবহার নিরুৎসাহিত করে।',
    responsible: 'দায়িত্বশীল ব্যবহারের নোট',
    responsibleBody: 'KAI AI Removes কেবল আপনার তৈরি, অর্ডার করা, লাইসেন্সপ্রাপ্ত বা সম্পাদনার অনুমতি থাকা মিডিয়ার জন্য। এটি শুধু দৃশ্যমান পিক্সেল পরিবর্তন করে; অদৃশ্য provenance signal বা metadata সরায় না।',
    powered: 'KAI AI দ্বারা তৈরি',
    crafted: 'সবার জন্য ব্যবহারিক ও privacy-first media tool সহজলভ্য করার উদ্দেশ্যে তৈরি।',
    selectionSmall: 'আগে একটু বড় জায়গা নির্বাচন করুন।',
    rightsNeeded: 'প্রসেসিংয়ের আগে সম্পাদনার অধিকার নিশ্চিত করুন।',
    unsupported: 'কিছু ফাইল বাদ গেছে। ২৫ MB-এর কম JPG, PNG বা WebP ব্যবহার করুন।',
    noCompleted: 'ZIP ডাউনলোডের আগে অন্তত একটি ছবি প্রসেস করুন।',
    processingError: 'ছবিটি প্রসেস করা যায়নি।'
  }
}

const state = {
  language: 'en',
  theme: 'dark',
  items: [],
  activeId: null,
  selection: { x: 0.72, y: 0.72, width: 0.22, height: 0.2 },
  mode: 'edge',
  feather: 12,
  compare: 55,
  dragging: false,
  dragStart: null,
  video: {
    file: null,
    sourceUrl: null,
    resultUrl: null,
    resultBlob: null,
    width: 0,
    height: 0,
    duration: 0,
    selection: { x: 0.84, y: 0.82, width: 0.13, height: 0.15 },
    mode: 'restore',
    strength: 16,
    dragging: false,
    dragStart: null,
    processing: false,
    abort: false,
    progress: 0,
    processedFrames: 0,
    recorder: null,
    outputExtension: 'webm'
  }
}

const MAX_IMAGE_SIZE = 25 * 1024 * 1024
const MAX_VIDEO_SIZE = 500 * 1024 * 1024
const supportedImageTypes = new Set(['image/jpeg', 'image/png', 'image/webp'])
const supportedVideoTypes = new Set(['video/mp4', 'video/webm', 'video/quicktime'])
const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => [...document.querySelectorAll(selector)]
const t = () => copy[state.language]
const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

function translate() {
  document.documentElement.lang = state.language
  $$('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n
    if (t()[key]) node.textContent = t()[key]
  })
  $('#languageButton span').textContent = state.language === 'en' ? 'বাংলা' : 'English'
  $('#selectionLabel').textContent = state.mode === 'blur' ? t().blur : t().compare
  $('#videoSelectionLabel').textContent = videoModeLabel()
  renderPreview()
  renderQueue()
  renderVideoState()
}

function showToast(message) {
  const toast = $('#toast')
  toast.textContent = `🛡 ${message}`
  toast.classList.remove('hidden')
  clearTimeout(showToast.timer)
  showToast.timer = setTimeout(() => toast.classList.add('hidden'), 3600)
}

function uid() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error('Could not read image'))
    image.src = url
  })
}

function activeItem() {
  return state.items.find((item) => item.id === state.activeId) || state.items[0] || null
}

function statusText(status) {
  if (status === 'ready') return t().ready
  if (status === 'processing') return t().processing
  if (status === 'done') return t().done
  if (status === 'stopped') return t().stopped
  return t().failed
}

function statusClass(status) {
  return `status status-${status}`
}

async function addFiles(files) {
  const valid = files.filter((file) => supportedImageTypes.has(file.type) && file.size <= MAX_IMAGE_SIZE)
  if (valid.length !== files.length) showToast(t().unsupported)

  for (const file of valid) {
    try {
      const sourceUrl = URL.createObjectURL(file)
      const image = await loadImage(sourceUrl)
      const item = {
        id: uid(),
        file,
        name: file.name,
        sourceUrl,
        resultUrl: null,
        resultBlob: null,
        width: image.naturalWidth,
        height: image.naturalHeight,
        status: 'ready',
        error: null
      }
      state.items.push(item)
      if (!state.activeId) state.activeId = item.id
    } catch {
      showToast(t().unsupported)
    }
  }
  renderAll()
}

function renderAll() {
  const hasItems = state.items.length > 0
  $('#emptyWorkspace').classList.toggle('hidden', hasItems)
  $('#workspaceGrid').classList.toggle('hidden', !hasItems)
  $('#queueSection').classList.toggle('hidden', !hasItems)
  renderPreview()
  renderQueue()
}

function renderPreview() {
  const item = activeItem()
  if (!item) return

  const index = state.items.findIndex((entry) => entry.id === item.id)
  $('#activeName').textContent = item.name
  $('#activeDimensions').textContent = `${item.width} × ${item.height}`
  $('#activeCounter').textContent = `${index + 1} / ${state.items.length}`
  $('#sourceImage').src = item.sourceUrl

  const hasResult = Boolean(item.resultUrl)
  $('#resultLayer').classList.toggle('hidden', !hasResult)
  $('#compareLine').classList.toggle('hidden', !hasResult)
  $('#compareSlider').disabled = !hasResult
  $('#downloadCurrent').disabled = !item.resultBlob
  if (hasResult) $('#resultImage').src = item.resultUrl

  $('#resultLayer').style.clipPath = `inset(0 ${100 - state.compare}% 0 0)`
  $('#compareLine').style.left = `${state.compare}%`
  $('#compareSlider').value = state.compare

  const box = $('#selectionBox')
  box.style.left = `${state.selection.x * 100}%`
  box.style.top = `${state.selection.y * 100}%`
  box.style.width = `${state.selection.width * 100}%`
  box.style.height = `${state.selection.height * 100}%`
  box.classList.toggle('drawing', state.dragging)
  $('#selectionLabel').textContent = state.mode === 'blur' ? t().blur : t().compare

  const status = $('#activeStatus')
  status.className = statusClass(item.status)
  status.textContent = statusText(item.status)
  $('#cleanCurrent').disabled = item.status === 'processing'
  $('#cleanAll').disabled = state.items.some((entry) => entry.status === 'processing')
}

function renderQueue() {
  const grid = $('#queueGrid')
  grid.innerHTML = ''

  state.items.forEach((item) => {
    const card = document.createElement('article')
    card.className = `queue-card ${item.id === activeItem()?.id ? 'active' : ''}`
    card.innerHTML = `<img alt=""><div class="queue-info"><strong></strong><span></span></div><button class="queue-remove" type="button" title="${t().remove}" aria-label="${t().remove}">×</button>`
    card.querySelector('img').src = item.resultUrl || item.sourceUrl
    card.querySelector('strong').textContent = item.name
    const status = card.querySelector('.queue-info span')
    status.className = statusClass(item.status)
    status.textContent = statusText(item.status)
    card.addEventListener('click', () => {
      state.activeId = item.id
      state.compare = 55
      renderAll()
    })
    card.querySelector('button').addEventListener('click', (event) => {
      event.stopPropagation()
      removeItem(item.id)
    })
    grid.appendChild(card)
  })
}

function removeItem(id) {
  const item = state.items.find((entry) => entry.id === id)
  if (item) {
    URL.revokeObjectURL(item.sourceUrl)
    if (item.resultUrl) URL.revokeObjectURL(item.resultUrl)
  }
  state.items = state.items.filter((entry) => entry.id !== id)
  if (state.activeId === id) state.activeId = state.items[0]?.id || null
  renderAll()
}

function navigate(direction) {
  if (!state.items.length) return
  const index = state.items.findIndex((item) => item.id === activeItem().id)
  state.activeId = state.items[(index + direction + state.items.length) % state.items.length].id
  state.compare = 55
  renderAll()
}

function samplePixel(data, width, height, x, y) {
  const sx = clamp(Math.round(x), 0, width - 1)
  const sy = clamp(Math.round(y), 0, height - 1)
  const index = (sy * width + sx) * 4
  return [data[index], data[index + 1], data[index + 2], data[index + 3]]
}

function averageBorder(data, width, height, x0, y0, x1, y1) {
  const sum = [0, 0, 0, 0]
  let count = 0
  const push = (x, y) => {
    const pixel = samplePixel(data, width, height, x, y)
    for (let c = 0; c < 4; c += 1) sum[c] += pixel[c]
    count += 1
  }

  for (let x = x0; x < x1; x += 1) {
    if (y0 > 0) push(x, y0 - 1)
    if (y1 < height) push(x, y1)
  }
  for (let y = y0; y < y1; y += 1) {
    if (x0 > 0) push(x0 - 1, y)
    if (x1 < width) push(x1, y)
  }
  return count ? sum.map((value) => value / count) : [127, 127, 127, 255]
}

function edgeBlend(original, output, width, height, x0, y0, x1, y1, feather) {
  for (let y = y0; y < y1; y += 1) {
    for (let x = x0; x < x1; x += 1) {
      const candidates = []
      if (x0 > 0) candidates.push({ pixel: samplePixel(original, width, height, x0 - 1, y), weight: 1 / (x - x0 + 1) })
      if (x1 < width) candidates.push({ pixel: samplePixel(original, width, height, x1, y), weight: 1 / (x1 - x) })
      if (y0 > 0) candidates.push({ pixel: samplePixel(original, width, height, x, y0 - 1), weight: 1 / (y - y0 + 1) })
      if (y1 < height) candidates.push({ pixel: samplePixel(original, width, height, x, y1), weight: 1 / (y1 - y) })

      const sum = [0, 0, 0, 0]
      let total = 0
      candidates.forEach((candidate) => {
        for (let c = 0; c < 4; c += 1) sum[c] += candidate.pixel[c] * candidate.weight
        total += candidate.weight
      })
      if (!total) {
        const pixel = samplePixel(original, width, height, Math.max(0, x0 - 1), Math.max(0, y0 - 1))
        for (let c = 0; c < 4; c += 1) sum[c] = pixel[c]
        total = 1
      }

      const edgeDistance = Math.min(x - x0, x1 - 1 - x, y - y0, y1 - 1 - y)
      const mix = feather <= 0 ? 1 : clamp((edgeDistance + 1) / feather, 0.18, 1)
      const index = (y * width + x) * 4
      for (let c = 0; c < 4; c += 1) {
        const repaired = sum[c] / total
        output[index + c] = Math.round(original[index + c] * (1 - mix) + repaired * mix)
      }
    }
  }
}

function softFill(original, output, width, height, x0, y0, x1, y1, feather) {
  const average = averageBorder(original, width, height, x0, y0, x1, y1)
  for (let y = y0; y < y1; y += 1) {
    for (let x = x0; x < x1; x += 1) {
      const index = (y * width + x) * 4
      const edgeDistance = Math.min(x - x0, x1 - 1 - x, y - y0, y1 - 1 - y)
      const mix = feather <= 0 ? 1 : clamp((edgeDistance + 1) / feather, 0.22, 1)
      const grain = (((x * 17 + y * 31) % 11) - 5) * 0.35
      for (let c = 0; c < 3; c += 1) {
        const repaired = clamp(average[c] + grain, 0, 255)
        output[index + c] = Math.round(original[index + c] * (1 - mix) + repaired * mix)
      }
      output[index + 3] = original[index + 3]
    }
  }
}

function blurRegion(original, output, width, height, x0, y0, x1, y1, radius) {
  const r = clamp(Math.round(radius), 2, 20)
  const step = Math.max(1, Math.floor(r / 2))
  for (let y = y0; y < y1; y += 1) {
    for (let x = x0; x < x1; x += 1) {
      const sum = [0, 0, 0, 0]
      let count = 0
      for (let sy = y - r; sy <= y + r; sy += step) {
        for (let sx = x - r; sx <= x + r; sx += step) {
          const pixel = samplePixel(original, width, height, sx, sy)
          for (let c = 0; c < 4; c += 1) sum[c] += pixel[c]
          count += 1
        }
      }
      const index = (y * width + x) * 4
      for (let c = 0; c < 4; c += 1) output[index + c] = Math.round(sum[c] / count)
    }
  }
}

async function processImage(sourceUrl) {
  const image = await loadImage(sourceUrl)
  const canvas = document.createElement('canvas')
  canvas.width = image.naturalWidth
  canvas.height = image.naturalHeight
  const context = canvas.getContext('2d', { willReadFrequently: true })
  if (!context) throw new Error('Canvas unavailable')
  context.drawImage(image, 0, 0)

  const width = canvas.width
  const height = canvas.height
  const x0 = clamp(Math.floor(state.selection.x * width), 0, width - 1)
  const y0 = clamp(Math.floor(state.selection.y * height), 0, height - 1)
  const x1 = clamp(Math.ceil((state.selection.x + state.selection.width) * width), x0 + 1, width)
  const y1 = clamp(Math.ceil((state.selection.y + state.selection.height) * height), y0 + 1, height)
  const imageData = context.getImageData(0, 0, width, height)
  const original = new Uint8ClampedArray(imageData.data)
  const output = imageData.data

  if (state.mode === 'edge') edgeBlend(original, output, width, height, x0, y0, x1, y1, state.feather)
  if (state.mode === 'soft') softFill(original, output, width, height, x0, y0, x1, y1, state.feather)
  if (state.mode === 'blur') blurRegion(original, output, width, height, x0, y0, x1, y1, state.feather + 3)

  context.putImageData(imageData, 0, 0)
  const blob = await new Promise((resolve, reject) => {
    canvas.toBlob((value) => value ? resolve(value) : reject(new Error('Export failed')), 'image/png', 1)
  })
  return { blob, url: URL.createObjectURL(blob) }
}

function validateImageProcessing() {
  if (!$('#rightsCheckbox').checked) {
    showToast(t().rightsNeeded)
    return false
  }
  if (state.selection.width < 0.015 || state.selection.height < 0.015) {
    showToast(t().selectionSmall)
    return false
  }
  return true
}

async function runForItem(item) {
  item.status = 'processing'
  item.error = null
  renderAll()
  await new Promise((resolve) => requestAnimationFrame(resolve))
  try {
    const result = await processImage(item.sourceUrl)
    if (item.resultUrl) URL.revokeObjectURL(item.resultUrl)
    item.resultBlob = result.blob
    item.resultUrl = result.url
    item.status = 'done'
    state.compare = 55
  } catch (error) {
    item.status = 'error'
    item.error = error instanceof Error ? error.message : t().processingError
  }
  renderAll()
}

async function cleanCurrent() {
  const item = activeItem()
  if (!item || !validateImageProcessing()) return
  await runForItem(item)
}

async function cleanAll() {
  if (!state.items.length || !validateImageProcessing()) return
  for (const item of state.items) await runForItem(item)
}

function imageFilename(filename) {
  const dot = filename.lastIndexOf('.')
  const base = dot > -1 ? filename.slice(0, dot) : filename
  return `${base}-kai-ai-removes.png`
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

const crcTable = (() => {
  const table = new Uint32Array(256)
  for (let n = 0; n < 256; n += 1) {
    let c = n
    for (let k = 0; k < 8; k += 1) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    table[n] = c >>> 0
  }
  return table
})()

function crc32(bytes) {
  let crc = 0xffffffff
  for (const byte of bytes) crc = crcTable[(crc ^ byte) & 255] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function dosDateTime(date = new Date()) {
  const year = Math.max(1980, date.getFullYear())
  return {
    time: (date.getHours() << 11) | (date.getMinutes() << 5) | (date.getSeconds() >> 1),
    day: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate()
  }
}

function u16(value) {
  const array = new Uint8Array(2)
  new DataView(array.buffer).setUint16(0, value, true)
  return array
}

function u32(value) {
  const array = new Uint8Array(4)
  new DataView(array.buffer).setUint32(0, value >>> 0, true)
  return array
}

function concat(parts) {
  const size = parts.reduce((sum, part) => sum + part.length, 0)
  const output = new Uint8Array(size)
  let offset = 0
  for (const part of parts) {
    output.set(part, offset)
    offset += part.length
  }
  return output
}

async function createZip(files) {
  const encoder = new TextEncoder()
  const locals = []
  const centrals = []
  let offset = 0
  const { time, day } = dosDateTime()

  for (const file of files) {
    const name = encoder.encode(file.name)
    const data = new Uint8Array(await file.blob.arrayBuffer())
    const crc = crc32(data)
    const local = concat([u32(0x04034b50), u16(20), u16(0x0800), u16(0), u16(time), u16(day), u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0), name, data])
    locals.push(local)
    const central = concat([u32(0x02014b50), u16(20), u16(20), u16(0x0800), u16(0), u16(time), u16(day), u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(offset), name])
    centrals.push(central)
    offset += local.length
  }

  const centralData = concat(centrals)
  const localData = concat(locals)
  const end = concat([u32(0x06054b50), u16(0), u16(0), u16(files.length), u16(files.length), u32(centralData.length), u32(localData.length), u16(0)])
  return new Blob([localData, centralData, end], { type: 'application/zip' })
}

async function downloadZip() {
  const completed = state.items.filter((item) => item.resultBlob)
  if (!completed.length) {
    showToast(t().noCompleted)
    return
  }
  const blob = await createZip(completed.map((item) => ({ name: imageFilename(item.name), blob: item.resultBlob })))
  downloadBlob(blob, 'kai-ai-removes-images.zip')
}

function pointerPosition(event, stageSelector) {
  const bounds = $(stageSelector).getBoundingClientRect()
  return {
    x: clamp((event.clientX - bounds.left) / bounds.width, 0, 1),
    y: clamp((event.clientY - bounds.top) / bounds.height, 0, 1)
  }
}

function startImageSelection(event) {
  if (!activeItem()) return
  const point = pointerPosition(event, '#imageStage')
  event.currentTarget.setPointerCapture(event.pointerId)
  state.dragStart = point
  state.dragging = true
  state.selection = { x: point.x, y: point.y, width: 0, height: 0 }
  renderPreview()
}

function updateImageSelection(event) {
  if (!state.dragging || !state.dragStart) return
  const point = pointerPosition(event, '#imageStage')
  state.selection = {
    x: Math.min(state.dragStart.x, point.x),
    y: Math.min(state.dragStart.y, point.y),
    width: Math.abs(point.x - state.dragStart.x),
    height: Math.abs(point.y - state.dragStart.y)
  }
  renderPreview()
}

function endImageSelection() {
  state.dragging = false
  state.dragStart = null
  renderPreview()
}

function videoModeLabel() {
  if (state.video.mode === 'restore') return t().videoRestore
  if (state.video.mode === 'inpaint') return t().frameInpaint
  return t().videoBlur
}

function formatDuration(seconds) {
  if (!Number.isFinite(seconds)) return '—'
  const minutes = Math.floor(seconds / 60)
  const remaining = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${minutes}:${remaining}`
}

function renderVideoState() {
  const video = state.video
  const hasVideo = Boolean(video.file)
  $('#videoEditor').classList.toggle('hidden', !hasVideo)
  $('#videoResultCard').classList.toggle('hidden', !video.resultUrl)

  if (!hasVideo) return

  $('#videoName').textContent = video.file.name
  $('#videoMeta').textContent = `${video.width} × ${video.height} · ${formatDuration(video.duration)}`
  $('#videoProgress').value = Math.round(video.progress * 100)
  const frameText = video.processedFrames ? ` · ${video.processedFrames.toLocaleString()} frames` : ''
  $('#videoProgressText').textContent = `${Math.round(video.progress * 100)}%${frameText}`
  $('#processVideo').disabled = video.processing
  $('#autoVideoSelection').disabled = video.processing
  $('#stopVideo').disabled = !video.processing
  $('#replaceVideo').disabled = video.processing
  $('#videoInput').disabled = video.processing

  const statusTextValue = video.processing ? t().processing : video.resultBlob ? t().done : t().ready
  $('#videoStatus').textContent = statusTextValue
  const badge = $('#videoStatusBadge')
  badge.className = statusClass(video.processing ? 'processing' : video.resultBlob ? 'done' : 'ready')
  badge.textContent = statusTextValue

  const box = $('#videoSelectionBox')
  box.style.left = `${video.selection.x * 100}%`
  box.style.top = `${video.selection.y * 100}%`
  box.style.width = `${video.selection.width * 100}%`
  box.style.height = `${video.selection.height * 100}%`
  box.classList.toggle('drawing', video.dragging)
  $('#videoSelectionLabel').textContent = videoModeLabel()
}

function clearVideoResult() {
  if (state.video.resultUrl) URL.revokeObjectURL(state.video.resultUrl)
  state.video.resultUrl = null
  state.video.resultBlob = null
  $('#resultVideo').removeAttribute('src')
  $('#resultVideo').load()
}

function setAutoVideoSelection() {
  const { width, height } = state.video
  if (!width || !height) return
  const shortEdge = Math.min(width, height)
  const markSize = shortEdge >= 900 ? 72 : shortEdge >= 600 ? 56 : 44
  const padding = Math.max(14, Math.round(markSize * 0.28))
  const margin = Math.max(14, Math.round(markSize * 0.38))
  const boxWidth = Math.min(width - margin, Math.max(markSize + padding * 2, Math.min(260, width * 0.22)))
  const boxHeight = Math.min(height - margin, Math.max(markSize + padding * 2, Math.min(160, height * 0.16)))
  state.video.selection = {
    x: clamp((width - margin - boxWidth) / width, 0, 0.96),
    y: clamp((height - margin - boxHeight) / height, 0, 0.96),
    width: clamp(boxWidth / width, 0.025, 0.35),
    height: clamp(boxHeight / height, 0.025, 0.35)
  }
  renderVideoState()
}

async function addVideo(file) {
  if (!file || !supportedVideoTypes.has(file.type) || file.size > MAX_VIDEO_SIZE) {
    showToast(t().videoUnsupported)
    return
  }
  if (state.video.processing) return

  if (state.video.sourceUrl) URL.revokeObjectURL(state.video.sourceUrl)
  clearVideoResult()

  const sourceUrl = URL.createObjectURL(file)
  const sourceVideo = $('#sourceVideo')
  state.video.file = file
  state.video.sourceUrl = sourceUrl
  state.video.progress = 0
  state.video.processedFrames = 0
  sourceVideo.src = sourceUrl
  sourceVideo.load()
  $('#videoStatus').textContent = t().loadingVideo
  $('#videoEditor').classList.remove('hidden')

  try {
    await new Promise((resolve, reject) => {
      const onLoaded = () => { cleanup(); resolve() }
      const onError = () => { cleanup(); reject(new Error('Video decode failed')) }
      const cleanup = () => {
        sourceVideo.removeEventListener('loadedmetadata', onLoaded)
        sourceVideo.removeEventListener('error', onError)
      }
      sourceVideo.addEventListener('loadedmetadata', onLoaded)
      sourceVideo.addEventListener('error', onError)
    })
    state.video.width = sourceVideo.videoWidth
    state.video.height = sourceVideo.videoHeight
    state.video.duration = sourceVideo.duration
    sourceVideo.currentTime = 0
    const surface = $('#videoSurface')
    surface.style.aspectRatio = `${state.video.width} / ${state.video.height}`
    surface.style.setProperty('--video-ratio', String(state.video.width / state.video.height))
    setAutoVideoSelection()
    renderVideoState()
    $('#videoTool').scrollIntoView({ behavior: 'smooth', block: 'start' })
  } catch {
    URL.revokeObjectURL(sourceUrl)
    state.video.file = null
    state.video.sourceUrl = null
    showToast(t().videoUnsupported)
    renderVideoState()
  }
}

function startVideoSelection(event) {
  if (!state.video.file || state.video.processing) return
  const point = pointerPosition(event, '#videoSurface')
  event.currentTarget.setPointerCapture(event.pointerId)
  state.video.dragStart = point
  state.video.dragging = true
  state.video.selection = { x: point.x, y: point.y, width: 0, height: 0 }
  renderVideoState()
}

function updateVideoSelection(event) {
  if (!state.video.dragging || !state.video.dragStart) return
  const point = pointerPosition(event, '#videoSurface')
  state.video.selection = {
    x: Math.min(state.video.dragStart.x, point.x),
    y: Math.min(state.video.dragStart.y, point.y),
    width: Math.abs(point.x - state.video.dragStart.x),
    height: Math.abs(point.y - state.video.dragStart.y)
  }
  renderVideoState()
}

function endVideoSelection() {
  state.video.dragging = false
  state.video.dragStart = null
  renderVideoState()
}

function chooseRecorderType() {
  const options = [
    { mime: 'video/webm;codecs=vp9,opus', extension: 'webm' },
    { mime: 'video/webm;codecs=vp8,opus', extension: 'webm' },
    { mime: 'video/webm', extension: 'webm' },
    { mime: 'video/mp4', extension: 'mp4' }
  ]
  return options.find((option) => MediaRecorder.isTypeSupported(option.mime)) || null
}

function calculateVideoOutputSize(width, height) {
  const maxEdge = 1920
  const largest = Math.max(width, height)
  if (largest <= maxEdge) return { width, height }
  const scale = maxEdge / largest
  return { width: Math.max(2, Math.round(width * scale / 2) * 2), height: Math.max(2, Math.round(height * scale / 2) * 2) }
}

function selectionPixels(selection, width, height) {
  const x = clamp(Math.floor(selection.x * width), 0, width - 1)
  const y = clamp(Math.floor(selection.y * height), 0, height - 1)
  const right = clamp(Math.ceil((selection.x + selection.width) * width), x + 1, width)
  const bottom = clamp(Math.ceil((selection.y + selection.height) * height), y + 1, height)
  return { x, y, width: right - x, height: bottom - y }
}

function getPatchSource(canvas, region) {
  const gap = Math.max(2, Math.round(Math.min(region.width, region.height) * 0.05))
  const room = {
    left: region.x,
    right: canvas.width - region.x - region.width,
    top: region.y,
    bottom: canvas.height - region.y - region.height
  }
  if (region.x + region.width / 2 > canvas.width * 0.62 && room.left >= region.width + gap) {
    return { x: region.x - region.width - gap, y: region.y }
  }
  if (region.y + region.height / 2 > canvas.height * 0.62 && room.top >= region.height + gap) {
    return { x: region.x, y: region.y - region.height - gap }
  }
  const candidates = [
    room.left >= region.width + gap && { score: room.left, x: region.x - region.width - gap, y: region.y },
    room.right >= region.width + gap && { score: room.right, x: region.x + region.width + gap, y: region.y },
    room.top >= region.height + gap && { score: room.top, x: region.x, y: region.y - region.height - gap },
    room.bottom >= region.height + gap && { score: room.bottom, x: region.x, y: region.y + region.height + gap }
  ].filter(Boolean).sort((a, b) => b.score - a.score)
  const best = candidates[0]
  return best ? { x: best.x, y: best.y } : { x: clamp(region.x - region.width, 0, canvas.width - region.width), y: clamp(region.y, 0, canvas.height - region.height) }
}

function featherWeight(x, y, width, height, feather) {
  if (feather <= 0) return 1
  const distance = Math.min(x, y, width - 1 - x, height - 1 - y)
  return clamp((distance + 1) / feather, 0.08, 1)
}

function drawFrameInpaint(context, temp, region, strength) {
  const source = getPatchSource(context.canvas, region)
  temp.width = region.width
  temp.height = region.height
  const tempContext = temp.getContext('2d', { willReadFrequently: true })
  tempContext.clearRect(0, 0, region.width, region.height)
  tempContext.drawImage(context.canvas, source.x, source.y, region.width, region.height, 0, 0, region.width, region.height)

  const original = context.getImageData(region.x, region.y, region.width, region.height)
  const patch = tempContext.getImageData(0, 0, region.width, region.height)
  const output = new ImageData(new Uint8ClampedArray(original.data), region.width, region.height)
  const feather = Math.max(3, Math.round(Math.min(region.width, region.height) * (0.08 + strength / 500)))
  for (let y = 0; y < region.height; y += 1) {
    for (let x = 0; x < region.width; x += 1) {
      const i = (y * region.width + x) * 4
      const mix = featherWeight(x, y, region.width, region.height, feather)
      for (let c = 0; c < 3; c += 1) output.data[i + c] = Math.round(original.data[i + c] * (1 - mix) + patch.data[i + c] * mix)
      output.data[i + 3] = 255
    }
  }
  context.putImageData(output, region.x, region.y)
}

function createBorderEstimate(context, region, patchData) {
  const { x, y, width, height } = region
  const left = x > 0 ? context.getImageData(x - 1, y, 1, height).data : null
  const right = x + width < context.canvas.width ? context.getImageData(x + width, y, 1, height).data : null
  const top = y > 0 ? context.getImageData(x, y - 1, width, 1).data : null
  const bottom = y + height < context.canvas.height ? context.getImageData(x, y + height, width, 1).data : null
  const estimate = new ImageData(width, height)

  for (let py = 0; py < height; py += 1) {
    for (let px = 0; px < width; px += 1) {
      const target = (py * width + px) * 4
      const sum = [0, 0, 0]
      let total = 0
      const add = (data, index, weight) => {
        if (!data || weight <= 0) return
        for (let c = 0; c < 3; c += 1) sum[c] += data[index + c] * weight
        total += weight
      }
      add(left, py * 4, 1 / (px + 1))
      add(right, py * 4, 1 / (width - px))
      add(top, px * 4, 1 / (py + 1))
      add(bottom, px * 4, 1 / (height - py))
      add(patchData, target, 0.08)
      for (let c = 0; c < 3; c += 1) estimate.data[target + c] = Math.round(sum[c] / Math.max(total, 0.001))
      estimate.data[target + 3] = 255
    }
  }
  return estimate
}

function drawGeminiRestore(context, temp, region, strength) {
  const source = getPatchSource(context.canvas, region)
  temp.width = region.width
  temp.height = region.height
  const tempContext = temp.getContext('2d', { willReadFrequently: true })
  tempContext.clearRect(0, 0, region.width, region.height)
  tempContext.drawImage(context.canvas, source.x, source.y, region.width, region.height, 0, 0, region.width, region.height)

  const observed = context.getImageData(region.x, region.y, region.width, region.height)
  const patch = tempContext.getImageData(0, 0, region.width, region.height)
  const estimate = createBorderEstimate(context, region, patch.data)
  const count = region.width * region.height
  const rawMask = new Float32Array(count)
  const threshold = 0.028 + (40 - strength) * 0.0015

  for (let p = 0; p < count; p += 1) {
    const i = p * 4
    const ratios = []
    let minUplift = Infinity
    let maxObserved = 0
    for (let c = 0; c < 3; c += 1) {
      const o = observed.data[i + c]
      const b = estimate.data[i + c]
      minUplift = Math.min(minUplift, o - b)
      maxObserved = Math.max(maxObserved, o)
      ratios.push((o - b) / Math.max(16, 255 - b))
    }
    const sorted = [...ratios].sort((a, b) => a - b)
    const alpha = sorted[1]
    const spread = sorted[2] - sorted[0]
    const consistency = clamp(1 - spread / 0.18, 0, 1)
    const upliftScore = clamp((minUplift - 1.5) / 22, 0, 1)
    const alphaScore = clamp((alpha - threshold) / 0.14, 0, 1)
    const brightness = clamp((maxObserved - 72) / 150, 0.25, 1)
    rawMask[p] = alphaScore * consistency * upliftScore * brightness
  }

  const dilated = new Float32Array(count)
  const radius = strength >= 28 ? 2 : 1
  for (let y = 0; y < region.height; y += 1) {
    for (let x = 0; x < region.width; x += 1) {
      let max = 0
      for (let oy = -radius; oy <= radius; oy += 1) {
        for (let ox = -radius; ox <= radius; ox += 1) {
          const sx = clamp(x + ox, 0, region.width - 1)
          const sy = clamp(y + oy, 0, region.height - 1)
          max = Math.max(max, rawMask[sy * region.width + sx])
        }
      }
      dilated[y * region.width + x] = max
    }
  }

  const output = new ImageData(new Uint8ClampedArray(observed.data), region.width, region.height)
  const feather = Math.max(3, Math.round(Math.min(region.width, region.height) * 0.07))
  for (let y = 0; y < region.height; y += 1) {
    for (let x = 0; x < region.width; x += 1) {
      const p = y * region.width + x
      const i = p * 4
      let smooth = 0
      let samples = 0
      for (let oy = -1; oy <= 1; oy += 1) {
        for (let ox = -1; ox <= 1; ox += 1) {
          const sx = clamp(x + ox, 0, region.width - 1)
          const sy = clamp(y + oy, 0, region.height - 1)
          smooth += dilated[sy * region.width + sx]
          samples += 1
        }
      }
      const edge = featherWeight(x, y, region.width, region.height, feather)
      const mix = clamp((smooth / samples) * edge * 1.35, 0, 1)
      for (let c = 0; c < 3; c += 1) output.data[i + c] = Math.round(observed.data[i + c] * (1 - mix) + estimate.data[i + c] * mix)
      output.data[i + 3] = 255
    }
  }
  context.putImageData(output, region.x, region.y)
}

function drawBlurPatch(context, temp, region, strength) {
  const padding = Math.min(Math.max(strength * 2, 12), Math.max(region.width, region.height))
  const sx = clamp(region.x - padding, 0, context.canvas.width)
  const sy = clamp(region.y - padding, 0, context.canvas.height)
  const sr = clamp(region.x + region.width + padding, 0, context.canvas.width)
  const sb = clamp(region.y + region.height + padding, 0, context.canvas.height)
  const sw = Math.max(1, sr - sx)
  const sh = Math.max(1, sb - sy)
  temp.width = sw
  temp.height = sh
  const tempContext = temp.getContext('2d')
  tempContext.clearRect(0, 0, sw, sh)
  tempContext.drawImage(context.canvas, sx, sy, sw, sh, 0, 0, sw, sh)
  context.save()
  context.beginPath()
  context.rect(region.x, region.y, region.width, region.height)
  context.clip()
  context.filter = `blur(${Math.max(3, strength)}px)`
  context.drawImage(temp, sx, sy)
  context.restore()
}

function drawProcessedVideoFrame() {
  const sourceVideo = $('#sourceVideo')
  const canvas = $('#videoCanvas')
  const temp = $('#videoTempCanvas')
  const context = canvas.getContext('2d', { alpha: false, willReadFrequently: true })
  context.filter = 'none'
  context.imageSmoothingEnabled = true
  context.drawImage(sourceVideo, 0, 0, canvas.width, canvas.height)
  const region = selectionPixels(state.video.selection, canvas.width, canvas.height)
  if (state.video.mode === 'restore') drawGeminiRestore(context, temp, region, state.video.strength)
  else if (state.video.mode === 'inpaint') drawFrameInpaint(context, temp, region, state.video.strength)
  else drawBlurPatch(context, temp, region, state.video.strength)
}

function seekVideo(video, time) {
  return new Promise((resolve, reject) => {
    const onSeeked = () => { cleanup(); resolve() }
    const onError = () => { cleanup(); reject(new Error('Seek failed')) }
    const cleanup = () => {
      video.removeEventListener('seeked', onSeeked)
      video.removeEventListener('error', onError)
    }
    video.addEventListener('seeked', onSeeked)
    video.addEventListener('error', onError)
    video.currentTime = time
    if (Math.abs(video.currentTime - time) < 0.01) { cleanup(); resolve() }
  })
}

async function processVideo() {
  const videoState = state.video
  const sourceVideo = $('#sourceVideo')

  if (!videoState.file) { showToast(t().videoNoFile); return }
  if (!$('#videoRightsCheckbox').checked) { showToast(t().rightsNeeded); return }
  if (videoState.selection.width < 0.015 || videoState.selection.height < 0.015) { showToast(t().videoSelectionSmall); return }
  if (!window.MediaRecorder || !HTMLCanvasElement.prototype.captureStream) { showToast(t().videoApiUnsupported); return }

  const recorderType = chooseRecorderType()
  if (!recorderType) { showToast(t().videoApiUnsupported); return }

  clearVideoResult()
  videoState.processing = true
  videoState.abort = false
  videoState.progress = 0
  videoState.processedFrames = 0
  videoState.outputExtension = recorderType.extension
  renderVideoState()

  const canvas = $('#videoCanvas')
  const outputSize = calculateVideoOutputSize(videoState.width, videoState.height)
  canvas.width = outputSize.width
  canvas.height = outputSize.height

  let outputStream = canvas.captureStream(0)
  let canvasTrack = outputStream.getVideoTracks()[0]
  const manualFrames = Boolean(canvasTrack && typeof canvasTrack.requestFrame === 'function')
  if (!manualFrames) {
    outputStream.getTracks().forEach((track) => track.stop())
    outputStream = canvas.captureStream(30)
    canvasTrack = outputStream.getVideoTracks()[0]
  }

  let sourceStream = null
  try {
    const capture = sourceVideo.captureStream || sourceVideo.mozCaptureStream
    if (capture) {
      sourceStream = capture.call(sourceVideo)
      sourceStream.getAudioTracks().forEach((track) => outputStream.addTrack(track))
    }
  } catch { sourceStream = null }

  const chunks = []
  let recorder
  try {
    recorder = new MediaRecorder(outputStream, {
      mimeType: recorderType.mime,
      videoBitsPerSecond: outputSize.width * outputSize.height > 1280 * 720 ? 8_000_000 : 4_500_000
    })
  } catch {
    videoState.processing = false
    renderVideoState()
    showToast(t().videoApiUnsupported)
    outputStream.getTracks().forEach((track) => track.stop())
    return
  }

  videoState.recorder = recorder
  recorder.addEventListener('dataavailable', (event) => { if (event.data && event.data.size > 0) chunks.push(event.data) })
  const stopped = new Promise((resolve) => recorder.addEventListener('stop', resolve, { once: true }))
  sourceVideo.pause()
  sourceVideo.muted = true
  sourceVideo.playbackRate = 1

  try {
    await seekVideo(sourceVideo, 0)
    drawProcessedVideoFrame()
    if (manualFrames) canvasTrack.requestFrame()
    recorder.start(500)

    let frameRequest = null
    let active = true
    const schedule = () => {
      if (!active || !videoState.processing || videoState.abort || sourceVideo.ended) return
      if ('requestVideoFrameCallback' in sourceVideo) frameRequest = sourceVideo.requestVideoFrameCallback(onFrame)
      else frameRequest = requestAnimationFrame(onFrame)
    }
    const onFrame = (_now, metadata = {}) => {
      if (!active || !videoState.processing || videoState.abort) return
      drawProcessedVideoFrame()
      if (manualFrames) canvasTrack.requestFrame()
      videoState.processedFrames += 1
      const mediaTime = Number.isFinite(metadata.mediaTime) ? metadata.mediaTime : sourceVideo.currentTime
      videoState.progress = videoState.duration > 0 ? clamp(mediaTime / videoState.duration, 0, 1) : 0
      if (videoState.processedFrames % 2 === 0) renderVideoState()
      schedule()
    }

    const ended = new Promise((resolve) => {
      const onEnded = () => resolve('ended')
      sourceVideo.addEventListener('ended', onEnded, { once: true })
      const pollAbort = () => {
        if (videoState.abort) resolve('aborted')
        else if (!sourceVideo.ended) setTimeout(pollAbort, 80)
      }
      pollAbort()
    })

    await sourceVideo.play()
    schedule()
    const finishReason = await ended
    active = false
    sourceVideo.pause()
    if (frameRequest !== null) {
      if ('cancelVideoFrameCallback' in sourceVideo) sourceVideo.cancelVideoFrameCallback(frameRequest)
      else cancelAnimationFrame(frameRequest)
    }
    if (!videoState.abort) {
      drawProcessedVideoFrame()
      if (manualFrames) canvasTrack.requestFrame()
    }
    await new Promise((resolve) => setTimeout(resolve, 120))
    if (recorder.state !== 'inactive') recorder.stop()
    await stopped

    if (finishReason === 'aborted' || videoState.abort) {
      videoState.progress = 0
      showToast(t().videoStopped)
    } else {
      const blob = new Blob(chunks, { type: recorder.mimeType || recorderType.mime })
      if (!blob.size) throw new Error('Empty video result')
      videoState.resultBlob = blob
      videoState.resultUrl = URL.createObjectURL(blob)
      videoState.progress = 1
      $('#resultVideo').src = videoState.resultUrl
      $('#resultVideo').load()
      showToast(t().videoComplete)
      $('#videoResultCard').classList.remove('hidden')
      $('#videoResultCard').scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  } catch (error) {
    try { sourceVideo.pause(); if (recorder.state !== 'inactive') recorder.stop() } catch {}
    console.error(error)
    showToast(t().videoProcessingError)
  } finally {
    outputStream.getTracks().forEach((track) => track.stop())
    if (sourceStream) sourceStream.getTracks().forEach((track) => track.stop())
    videoState.processing = false
    videoState.abort = false
    videoState.recorder = null
    sourceVideo.muted = false
    renderVideoState()
  }
}

function stopVideoProcessing() {
  if (!state.video.processing) return
  state.video.abort = true
  $('#sourceVideo').pause()
  if (state.video.recorder && state.video.recorder.state !== 'inactive') {
    try { state.video.recorder.requestData() } catch {}
  }
}

function videoFilename() {
  const filename = state.video.file?.name || 'video'
  const dot = filename.lastIndexOf('.')
  const base = dot > -1 ? filename.slice(0, dot) : filename
  return `${base}-kai-ai-removes.${state.video.outputExtension}`
}

$('#languageButton').addEventListener('click', () => {
  state.language = state.language === 'en' ? 'bn' : 'en'
  translate()
})

$('#themeButton').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = state.theme
  $('#themeButton').textContent = state.theme === 'dark' ? '☀' : '☾'
})

$('#dropzone').addEventListener('click', () => $('#fileInput').click())
$('#dropzone').addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    $('#fileInput').click()
  }
})
$('#fileInput').addEventListener('change', (event) => {
  addFiles([...event.target.files])
  event.target.value = ''
})

for (const type of ['dragenter', 'dragover']) {
  $('#dropzone').addEventListener(type, (event) => {
    event.preventDefault()
    $('#dropzone').classList.add('is-dropping')
  })
  $('#videoDropzone').addEventListener(type, (event) => {
    event.preventDefault()
    $('#videoDropzone').classList.add('is-dropping')
  })
}
for (const type of ['dragleave', 'drop']) {
  $('#dropzone').addEventListener(type, (event) => {
    event.preventDefault()
    $('#dropzone').classList.remove('is-dropping')
  })
  $('#videoDropzone').addEventListener(type, (event) => {
    event.preventDefault()
    $('#videoDropzone').classList.remove('is-dropping')
  })
}
$('#dropzone').addEventListener('drop', (event) => addFiles([...event.dataTransfer.files]))

$$('.mode-card:not(.video-mode-card)').forEach((button) => button.addEventListener('click', () => {
  $$('.mode-card:not(.video-mode-card)').forEach((node) => node.classList.remove('active'))
  button.classList.add('active')
  state.mode = button.dataset.mode
  renderPreview()
}))

$('#feather').addEventListener('input', (event) => {
  state.feather = Number(event.target.value)
  $('#featherValue').textContent = `${state.feather}px`
})
$('#cleanCurrent').addEventListener('click', cleanCurrent)
$('#cleanAll').addEventListener('click', cleanAll)
$('#resetSelection').addEventListener('click', () => {
  state.selection = { x: 0.72, y: 0.72, width: 0.22, height: 0.2 }
  renderPreview()
})
$('#previousImage').addEventListener('click', () => navigate(-1))
$('#nextImage').addEventListener('click', () => navigate(1))
$('#compareSlider').addEventListener('input', (event) => {
  state.compare = Number(event.target.value)
  renderPreview()
})
$('#downloadCurrent').addEventListener('click', () => {
  const item = activeItem()
  if (item?.resultBlob) downloadBlob(item.resultBlob, imageFilename(item.name))
})
$('#downloadZip').addEventListener('click', downloadZip)
$('#imageStage').addEventListener('pointerdown', startImageSelection)
$('#imageStage').addEventListener('pointermove', updateImageSelection)
$('#imageStage').addEventListener('pointerup', endImageSelection)
$('#imageStage').addEventListener('pointercancel', endImageSelection)

$('#videoDropzone').addEventListener('click', () => $('#videoInput').click())
$('#videoDropzone').addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    $('#videoInput').click()
  }
})
$('#videoInput').addEventListener('change', (event) => {
  addVideo(event.target.files[0])
  event.target.value = ''
})
$('#videoDropzone').addEventListener('drop', (event) => addVideo(event.dataTransfer.files[0]))
$$('.video-mode-card').forEach((button) => button.addEventListener('click', () => {
  $$('.video-mode-card').forEach((node) => node.classList.remove('active'))
  button.classList.add('active')
  state.video.mode = button.dataset.videoMode
  renderVideoState()
}))
$('#videoStrength').addEventListener('input', (event) => {
  state.video.strength = Number(event.target.value)
  $('#videoStrengthValue').textContent = String(state.video.strength)
})
$('#processVideo').addEventListener('click', processVideo)
$('#stopVideo').addEventListener('click', stopVideoProcessing)
$('#autoVideoSelection').addEventListener('click', setAutoVideoSelection)
$('#resetVideoSelection').addEventListener('click', setAutoVideoSelection)
$('#replaceVideo').addEventListener('click', () => $('#videoInput').click())
$('#downloadVideo').addEventListener('click', () => {
  if (state.video.resultBlob) downloadBlob(state.video.resultBlob, videoFilename())
})
$('#videoSurface').addEventListener('pointerdown', startVideoSelection)
$('#videoSurface').addEventListener('pointermove', updateVideoSelection)
$('#videoSurface').addEventListener('pointerup', endVideoSelection)
$('#videoSurface').addEventListener('pointercancel', endVideoSelection)

window.addEventListener('beforeunload', () => {
  state.items.forEach((item) => {
    URL.revokeObjectURL(item.sourceUrl)
    if (item.resultUrl) URL.revokeObjectURL(item.resultUrl)
  })
  if (state.video.sourceUrl) URL.revokeObjectURL(state.video.sourceUrl)
  if (state.video.resultUrl) URL.revokeObjectURL(state.video.resultUrl)
})

$('#copyright').textContent = `© ${new Date().getFullYear()} KAI AI`
translate()
renderAll()
renderVideoState()
