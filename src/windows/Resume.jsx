import { WindowControlls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import { Download, Loader } from 'lucide-react'
import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControlls target="resume" />
        <h2>Resume</h2>

        <a href="files/Ahsan_Gulzar.pdf" download className='cursor-pointer '>
          <Download className='icon cursor-pointer size-8' />
        </a>
      </div>

      <section className='h-[calc(100vh-60px)] overflow-auto px-1 flex flex-col items-center'>
        <Document
          file="/files/Ahsan_Gulzar.pdf"
          className='-mt-7'
          loading={<span><Loader className='size-4 text-blue-400'/>Loading pdf</span>}
        >
          <Page
            pageNumber={1}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </section>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, "resume")
export default ResumeWindow