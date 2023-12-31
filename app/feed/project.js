import React from 'react';

const Projects = () => {
  return (
    
    <div className="mt-3">

        <h2 className="text-xl font-semibold">PROJECTS</h2>
        <hr/>
        <hr/>
            <div>
                <h3 className="text-lg font-bold text-lime-700">Machine Learning 👽</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p className="text-justify"><span className="text-sm font-semibold">💻 [February, 2023]</span> <span className="text-sky-700 font-bold">Bangla-KeywordExtractor</span></p>
                    <p className="text-justify"><span className="font-semibold">Description: </span>BanglaBERT based keywords extractor of Bangla Sentences. This extractor works calculating cosine similarity of each word embedding with the mean embedding.</p>
                    <p className="text-justify">[<span className="text-sky-400 hover:text-orange-400 hover:underline"><a href="#" target="_blank" rel="noreferrer">PyPl</a></span>] [<span className="text-sky-400 hover:text-orange-400 hover:underline"><a href="https://github.com/TonmoyTalukder/Bangla-KeywordExtractor" target="_blank" rel="noreferrer">GitHub Repository</a></span>]</p>
                    </li>
                </ul>     
                <br></br>       
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p className="text-justify"><span className="text-sm font-semibold">💻 [January, 2023]</span> <span className="text-sky-700 font-bold">Bengali Hate Speech classification</span></p>
                    <p className="text-justify"><span className="font-semibold">Description: </span>NLP classification with different machine learning algorithms with hyperparameter fine tuning, Ensemble approaches.</p>
                    <p className="text-justify">[<span className="text-sky-400 hover:text-orange-400 hover:underline"><a href="https://github.com/TonmoyTalukder/Analysis-on-ML-Model-s-Classification-of-Bengali-Hate-Speech-in-Different-Social-Contexts" target="_blank" rel="noreferrer">GitHub Repository</a></span>]</p>
                    </li>
                </ul>                
            </div>
            <hr/>
            <br></br>
            <div>
            <h3 className="text-lg font-bold text-lime-700">Data Science 💹</h3>
            <ul style={{listStyleType: "none"}}>
                    <li>
                    <p><span className="text-sm font-semibold">💻 [July, 2021]</span> <span className="text-sky-700 font-bold">Audi used car EDA</span></p>
                    <p className="text-justify"><span className="font-semibold">Description: </span>An overview on a dataset of AUDI Cars. Analysis of the data set with comparing different columns with each other, using Histogram, Scatterplot, Distribution, ECDF, Barplot, Violin plot along with proper naming and plot analysis.</p>
                    <p>[<span className="text-sky-400 hover:text-orange-400 hover:underline"><a href="https://github.com/TonmoyTalukder/audi_used_car_EDA" target="_blank" rel="noreferrer">GitHub Repository</a></span>]</p>
                    </li>
                </ul>               
            </div>
            <hr/>
            <br></br>
            <div>
            <h3 className="text-lg font-bold text-lime-700">Software 🖥️</h3>   
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p className="text-justify"><span className="text-sm font-semibold">💻 [March, 2022]</span> <span className="text-sky-700 font-bold">BookPedia Prototype - A Social Media (React + ASP.NET Framework Project)</span></p>
                    <p className="text-justify"><span className="font-semibold">Description: </span>BookPedia is a social media for the literary and academia personals. In this platform everyone can upload book and blogs and give rating them. It&apos;s just a prototype version as a university software development lab project. We are developing it in large scale. <br></br>
                    <b className="text-justify">Frontend:</b> JavaScript, React JS, Material UI <br></br>
                    <b className="text-justify">Backend:</b> C#, ASP.NET Framework <br></br>
                    <b className="text-justify">Database:</b> Entity Framework </p>
                    <p className="text-justify">[<span className="text-sky-400 hover:text-orange-400 hover:underline"><a href="https://github.com/TonmoyTalukder/bookpedia-frontend" target="_blank" rel="noreferrer">Frontend GitHub Repository</a></span>] [<span className="text-sky-400 hover:text-orange-400 hover:underline"><a href="https://github.com/InfiniteY-Lab/BookPediaAPIV0.0.12" target="_blank" rel="noreferrer">Backend GitHub Repository</a></span>] [<span className="text-sky-400 hover:text-orange-400 hover:underline"><a href="https://youtu.be/TB-UPQwxOvo" target="_blank" rel="noreferrer">YouTube</a></span>]</p>
                    </li>
                </ul>                     
            </div>
            <hr/>
            {/* <br></br> */}
    </div>

  );
};

export default Projects;
