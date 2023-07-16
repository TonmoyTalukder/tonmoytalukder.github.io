'use client'
import React from 'react';
import { useState, useRef } from "react";

const Research = () => {
    let [openAbstract, setOpenAbstract] = useState(1);

    const handleOpenAbstract = () => {
        if(openAbstract == 1){
            setOpenAbstract(0);
        }
        else{
            setOpenAbstract(1);
        }
        console.log(openAbstract)
      };

      const spanRef = useRef(null);

    const handleCopy = () => {
        const spanText = spanRef.current.innerText;
        navigator.clipboard.writeText(spanText)
        .then(() => {
            console.log('Text copied successfully!');
            alert('Copied successfully!');
        })
        .catch((error) => {
            console.error('Error copying text:', error);
        });
    };
  return (
    
    <div id="research" class="mt-3">

        <div>
            <p class="text-justify">
            Most recent publication updates can be found on the following profiles:
            <ul>
                <li><a target="_blank" rel="noreferrer" href="https://scholar.google.com/citations?user=_6Nj60QAAAAJ&amp;hl=en"><span class="text-sky-400 hover:text-orange-400">Google Scholar</span></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.researchgate.net/profile/Tonmoy-Talukder-2"><span class="text-sky-400 hover:text-orange-400">ResearchGate</span></a></li>
            </ul>
            </p>
        </div>
        <br></br>    
        <hr/>
        <br></br>

        <h2 class="text-xl font-semibold">PUBLICATIONS</h2>
        <hr/>
        <hr/>
            <div>
                {/* <br></br>
                <code style={{color:'black'}} class="rounded border-2 bg-slate-200">Most recent publication updates can be found on my <a target="_blank" rel="noreferrer" href="https://scholar.google.com/citations?user=_6Nj60QAAAAJ&amp;hl=en"><em class="text-sky-400 hover:text-orange-400">[Google Scholar]</em></a> profile.</code>
                <hr/> */}
                <br></br>
                {/* <br></br> */}
                <h3 class="text-lg font-bold text-green-700">Academic Publications 📄</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p class="text-justify"><span class="text-sm font-semibold">📌 [September, 2023]</span> <span class="text-sky-700 font-bold">Rank Your Summaries: Enhancing Bengali Text Summarization via Ranking-based Approach</span></p>
                    <p class="text-justify"><span class="font-semibold">Authors: </span> G. M. Shahariar*, <span class="font-semibold text-orange-500">Tonmoy Talukder</span>*, Rafin Alam Khan Sotez, and Md. Tanvir Rouf Shawon</p> 
                    <span class="text-xs italic">(* denotes equal contribution, names are listed in alphabetical order).</span>
                    <p class="text-justify"><span class="text-sm font-semibold">Conference: </span> <span class="italic">International Conference on Big Data, IoT and Machine Learning (BIM 2023)</span></p>
                    <p class="text-justify">[<span class="text-sky-400 hover:text-orange-400" onClick={handleOpenAbstract}>Abstract</span>] [<span class="text-sky-400 hover:text-orange-400">PDF</span>] [<span class="text-sky-400 hover:text-orange-400"><a href="https://github.com/TonmoyTalukder/Rank-Your-Summaries-Enhancing-Bengali-Text-Summarization-via-Ranking-based-Approach" target="_blank" rel="noreferrer">Code & Dataset</a></span>] [<span class="text-sky-400 hover:text-orange-400">Presentation</span>] [<span class="text-sky-400 hover:text-orange-400">Citation bib</span>]</p>
                    {openAbstract == 0 &&
                        <div className="" style={{paddingLeft: '15%', paddingRight: '5%'}}>
                    <div className='accordion-container bg-zinc-300 rounded-md p-2'>
                            <div><button className='bg-zinc-700 text-white hover:bg-orange-400 rounded-md p-1' onClick={handleCopy}>Copy Abstract</button></div>
                            <br></br>
                        <p className="text-justify"><span ref={spanRef}>With the increasing need for text summarization techniques that are both efficient and accurate, it becomes crucial to explore avenues that enhance the quality and precision of pre-trained models specifically tailored for summarizing Bengali texts. When it comes to text summarization tasks, there are numerous pre-trained transformer models at one&apos;s disposal. Consequently, it becomes quite a challenge to discern the most informative and relevant summary for a given text among the various options generated by these pre-trained summarization models. This paper aims to identify the most accurate and informative summary for a given text by utilizing a simple but effective ranking-based approach that compares the output of four different pre-trained Bengali text summarization models. The process begins by carrying out preprocessing of the input text that involves eliminating unnecessary elements such as special characters and punctuation marks. Next, we utilize four pre-trained summarization models to generate summaries, followed by applying a text ranking algorithm to identify the most suitable summary. Ultimately, the summary with the highest ranking score is chosen as the final one. To evaluate the effectiveness of this approach, the generated summaries are compared against human-annotated summaries using standard NLG metrics such as <i>BLEU, ROUGE, BERTScore, WIL, WER,</i> and <i>METEOR</i>. Experimental results suggest that by leveraging the strengths of each pre-trained transformer model and combining them using a ranking-based approach, our methodology significantly improves the accuracy and effectiveness of the Bengali text summarization.</span> 
                        <br></br>
                        <br></br>
                        <span className="font-semibold">Keywords</span>: Bengali, Text Summarization, Summary, TextRank, Transformers, Ranking, BERT, mT5</p>
                        
                        </div>
                        <br></br>
                        </div>
                    }
                    </li>
                </ul>
            </div>
            <hr/>
            <br></br>
        <hr/>

    </div>

  );
};

export default Research;
