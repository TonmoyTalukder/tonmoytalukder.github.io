'use client'
import React from 'react';
import { useState, useRef } from "react";

const Publications = () => {

    let [openAbstract, setOpenAbstract] = useState(1);
    let [openBib, setOpenBib] = useState(1);

    const handleOpenAbstract = () => {
        if(openAbstract == 1){
            setOpenAbstract(0);
            if(openBib == 0){
                setOpenBib(1);
            }
        }
        else{
            setOpenAbstract(1);
        }
        console.log(openAbstract)
      };
    const handleOpenBib = () => {
        if(openBib == 1){
            setOpenBib(0);
            if(openAbstract == 0){
                setOpenAbstract(1);
            }
        }
        else{
            setOpenBib(1);
        }
        console.log(openBib)
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
    
    <div className="mt-3">

        <h2 className="text-xl font-semibold">RESEARCH & PUBLICATIONS</h2>
        <hr/>
        <hr/>
            <div>
                <h3 className="text-lg font-bold text-green-700">Publications 📄</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p className="text-justify"><span className="text-sm font-semibold">📌 [September, 2023]</span> <span className="text-sky-700 font-bold">Rank Your Summaries: Enhancing Bengali Text Summarization via Ranking-based Approach</span></p>
                    <p className="text-justify"><span className="font-semibold">Authors: </span> G. M. Shahariar*, <span className="font-semibold text-orange-500 hover:text-orange-400">Tonmoy Talukder</span>*, Rafin Alam Khan Sotez, and Md. Tanvir Rouf Shawon</p> 
                    <span className="text-xs italic">(* denotes equal contribution, names are listed in alphabetical order).</span>
                    <p className="text-justify"><span className="text-sm font-semibold">Conference: </span> <span className="italic">International Conference on Big Data, IoT and Machine Learning </span><span  className="text-sky-400 hover:text-orange-400 hover:underline"> <a href="https://confbim.com/">[BIM 2023]</a></span></p>
                    <p className="text-justify">[<span className="text-sky-400 hover:text-orange-400" onClick={handleOpenAbstract}>Abstract</span>] [<span className="text-sky-400 hover:text-orange-400 hover:underline"><a href="https://arxiv.org/pdf/2307.07392.pdf" target="_blank" rel="noreferrer">PDF</a></span>] [<span className="text-sky-400 hover:text-orange-400 hover:underline"><a href="https://github.com/TonmoyTalukder/Rank-Your-Summaries-Enhancing-Bengali-Text-Summarization-via-Ranking-based-Approach" target="_blank" rel="noreferrer">Code & Dataset</a></span>] [<span className="text-sky-400 hover:text-orange-400 hover:underline"><a href="https://docs.google.com/presentation/d/1YRNeg_6ysdHT_jvIWER0AqLvVGvKqkPQ/" target="_blank" rel="noreferrer">Presentation</a></span>] [<span className="text-sky-400 hover:text-orange-400" onClick={handleOpenBib}>Citation bib</span>]</p>
                    {openAbstract == 0 &&
                        <div className="" style={{paddingLeft: '15%', paddingRight: '5%'}}>
                    <div className='accordion-container bg-zinc-300 rounded-md p-2'>
                            <div><button className='bg-zinc-700 text-white hover:bg-orange-400 rounded-md p-1' onClick={handleCopy}>Copy Abstract</button></div>
                            <br></br>
                        <p className="text-justify font-mono text-neutral-800"><span ref={spanRef}>With the increasing need for text summarization techniques that are both efficient and accurate, it becomes crucial to explore avenues that enhance the quality and precision of pre-trained models specifically tailored for summarizing Bengali texts. When it comes to text summarization tasks, there are numerous pre-trained transformer models at one&apos;s disposal. Consequently, it becomes quite a challenge to discern the most informative and relevant summary for a given text among the various options generated by these pre-trained summarization models. This paper aims to identify the most accurate and informative summary for a given text by utilizing a simple but effective ranking-based approach that compares the output of four different pre-trained Bengali text summarization models. The process begins by carrying out preprocessing of the input text that involves eliminating unnecessary elements such as special characters and punctuation marks. Next, we utilize four pre-trained summarization models to generate summaries, followed by applying a text ranking algorithm to identify the most suitable summary. Ultimately, the summary with the highest ranking score is chosen as the final one. To evaluate the effectiveness of this approach, the generated summaries are compared against human-annotated summaries using standard NLG metrics such as <i>BLEU, ROUGE, BERTScore, WIL, WER,</i> and <i>METEOR</i>. Experimental results suggest that by leveraging the strengths of each pre-trained transformer model and combining them using a ranking-based approach, our methodology significantly improves the accuracy and effectiveness of the Bengali text summarization.</span> 
                        <br></br>
                        <br></br>
                        <span className="font-semibold">Keywords</span>: Bengali, Text Summarization, Summary, TextRank, Transformers, Ranking, BERT, mT5</p>
                        
                        </div>
                        <br></br>
                        </div>
                    }
                    {openBib == 0 &&
                        <div className="" style={{paddingLeft: '15%', paddingRight: '5%'}}>
                    <div className='accordion-container bg-zinc-300 rounded-md p-2'>
                            <div><button className='bg-zinc-700 text-white hover:bg-orange-400 rounded-md p-1' onClick={handleCopy}>Copy Citation</button></div>
                            <br></br>
                        <p className="text-left text-sm font-mono text-neutral-800"><span ref={spanRef}>

                        @article&#123;shahariar2023rank,<br></br>
                            &emsp;title=&#123;Rank Your Summaries: Enhancing Bengali Text Summarization via Ranking-based Approach&#125;,<br></br>
                            &emsp;author=&#123;Shahariar, GM and Talukder, Tonmoy and Sotez, Rafin Alam Khan and Shawon, Md Tanvir Rouf&#125;,<br></br>
                            &emsp;journal=&#123;arXiv preprint arXiv:2307.07392&#125;,<br></br>
                            &emsp;year=&#123;2023&#125;<br></br>
                        &#125;
                        
                        {/* @misc&#123;shahariar2023rank,<br></br>
                                    &emsp;title=&#123;Rank Your Summaries: Enhancing Bengali Text Summarization via Ranking-based Approach&#125;,<br></br>
                                    &emsp;author=&#123;G. M. Shahariar and Tonmoy Talukder and Rafin Alam Khan Sotez and Md. Tanvir Rouf Shawon&#125;,<br></br>
                                    &emsp;year=&#123;2023&#125;,<br></br>
                                    &emsp;eprint=&#123;2307.07392&#125;,<br></br>
                                    &emsp;archivePrefix=&#123;arXiv&#125;,<br></br>
                                    &emsp;primaryClass=&#123;cs.CL&#125;<br></br>
                                &#125;  */}
                        {/* <code>
                            {`
                            @misc{shahariar2023rank,
                                title={Rank Your Summaries: Enhancing Bengali Text Summarization via Ranking-based Approach}, 
                                author={G. M. Shahariar and Tonmoy Talukder and Rafin Alam Khan Sotez and Md. Tanvir Rouf Shawon},
                                year={2023},
                                eprint={2307.07392},
                                archivePrefix={arXiv},
                                primaryClass={cs.CL}
                            }`}
                        </code> */}
                        </span></p>
                        
                        </div>
                        <br></br>
                        </div>
                    }
                    </li>
                </ul>
            </div>
            <hr/>
            <br></br>
            
            <div>
                {/* <h3 className="text-lg font-bold text-indigo-700">Under Review 🔎</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <div className="text-justify"> 
                            <span className="text-amber-800 font-semibold">⏳ Bangla Key2Text: Text Generation from Keywords in Bengali </span>
                            <p className="text-justify"><span className="font-semibold">Authors: </span> G. M. Shahariar*, and <span className="font-semibold text-orange-500 hover:text-orange-400">Tonmoy Talukder</span>*</p> 
                    <span className="text-xs italic">(* denotes equal contribution, names are listed in alphabetical order).</span>
                    </div> 
                    <p className="text-justify"><span className="text-sm font-semibold">Conference: </span> <span className="italic">The 2023 Conference on Empirical Methods in Natural Language Processing </span>
                    <span  className="text-sky-400 hover:text-orange-400 hover:underline"> <a href="https://2023.emnlp.org/">[EMNLP 2023]</a></span></p> 
                    </li>
                </ul> */}
            </div>
            <hr/>
            <br></br>
            <div>
                <h3 className="text-lg font-bold text-orange-500">Ongoing Works 📢</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                        <p className="text-left"> 
                            <span className="text-amber-800 font-semibold">🔨 Bangla Key2Text: Text Generation from Keywords in Bengali</span>
                        </p>
                    </li>
                    <li>
                        <p className="text-left"> 
                            <span className="text-amber-800 font-semibold">🔨 Image2Cap: Bengali Caption Generation from Images using Pre-trained Transformers</span>
                        </p>
                    </li>
                    {/* <li>
                        <p className="text-justify"> 
                            <span className="text-amber-800 font-semibold">🔨&#160;Cross Lingual Key2Text: Bengali Text Generation from Cross-Lingual Keywords</span>
                        </p>
                    </li> */}
                </ul>
            </div>
        <hr/>

    </div>

  );
};

export default Publications;
