'use client';
import { React, useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';
// import Typewriter from 'typewriter-effect';

const Intro = () => {
  const el = useRef(null);

  useEffect(() => {
    // Check if el.current is not null before initializing the Typed instance
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          '<span style="font-weight: 500;">I am an Aspiring PhD Candidate</span>',
          '<span style="font-weight: 500;">I am a NLP &amp; Computer Vision Research Enthusiast</span>',
          '<span style="font-weight: 500;">I am a Full Stack Developer</span>',
        ],
        typeSpeed: 150,
        loop: true,
        contentType: 'html',
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, []);

  // const [textToSpeak, setTextToSpeak] = useState('तन्मय तालुकदार');

  // const speak = () => {
  //   const utterance = new SpeechSynthesisUtterance(textToSpeak);
  //   window.speechSynthesis.speak(utterance);
  // };

  const [textToSpeak, setTextToSpeak] = useState('Tohn-moy Tah-LOOk-dahr');

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(utterance);
  };

  return (
    // <div style={{margin: '2rem'}}>
    //   <h2 className="text-lg font-semibold">Tonmoy Talukder</h2>

    //   <p>This is the content of the first column.</p>
    // </div>
    <div className="container mx-auto flex justify-center">
      <div className="w-full md:w-50">
        <div className="bg-gray-200 rounded-md p-2">
          <p>
            &#34;Programming isn&#39;t about what you know, it&#39;s about what
            you can figure out.&#34;
          </p>
          <p className="text-right">—Chris Pine, Learn to Program</p>
        </div>
        <br></br>
        <div className="mt-2">
          <h1 className="text-2xl font-bold text-center">
            Tonmoy Talukder{' '}
            <span className="font-normal text-sm text-stone-600">(He/Him)</span>
          </h1>
          <h3 className="text-center">
            [tɒnˈmɔɪ təˈluːkdər] <button onClick={speak}>🔊</button>
          </h3>{' '}
          <br></br>
          {/* <Image src="https://i.ibb.co/X7QwZ6Y/Tonmoy-Talukder.jpg" className="h-60 w-60 rounded-full mx-auto" 
      width={800}
      height={500}
      alt="Image"/> */}
          <p className="text-center h-7">
            <span style={{ text: 'bold' }} ref={el} />
          </p>
          <br></br>
          <Image
            src="https://i.ibb.co/X7QwZ6Y/Tonmoy-Talukder.jpg"
            alt="Photograph of Tonmoy Talukder"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
          <br></br>
          <p className="text-center">
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <span className="text-center text-orange-700 hover:text-orange-400 hover:underline">
              <a
                href="https://drive.google.com/file/d/1nb4uVV8NDuStjwUTlEvjR7OziyaP9RsR/view"
                target="_blank" rel="noreferrer"
              >
                Resume
              </a>
            </span>{' '}
            |{' '}
            <span className="text-center text-orange-700 hover:text-orange-400 hover:underline">
              <a
                href="https://www.linkedin.com/in/tonmoytalukder/"
                target="_blank" rel="noreferrer"
              >
                LinkedIn
              </a>
            </span>{' '}
            |{' '}
            <span className="text-center text-orange-700 hover:text-orange-400 hover:underline">
              <a href="https://github.com/TonmoyTalukder" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </span>{' '}
            |{' '}
            <span className="text-center text-orange-700 hover:text-orange-400 hover:underline">
              <a
                href="https://scholar.google.com/citations?user=_6Nj60QAAAAJ&hl=en"
                target="_blank" rel="noreferrer"
              >
                Google Scholar
              </a>
            </span>
          </p>
          <p className="text-justify">
            <br></br>I pursued my Bachelor of Science degree in Computer Science
            and Engineering from{' '}
            <span className="text-orange-700 hover:text-orange-400 hover:underline">
              <a href="https://www.aust.edu/" target="_blank" rel="noreferrer">
                Ahsanullah University of Science and Technology
              </a>
            </span>
            . Currently, I am a{' '}
            <bold className="font-medium">Software Engineer</bold> at{' '}
            <span className="text-orange-700 hover:text-orange-400 hover:underline">
              <a
                href="https://worldtechsoft.com/"
                target="_blank"
                rel="noreferrer"
              >
                WorldTech
              </a>
            </span>{' '}
            Dhaka, where I apply my technical expertise to develop innovative
            solutions, further enhancing my skills in real-world applications.
            Alongside my professional work, I am deeply involved in research on
            Machine Learning, advised by{' '}
            <span className="text-orange-700 hover:text-orange-400 hover:underline">
              <a
                href="https://shahariar-shibli.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Mr. G. M. Shahariar Shibli
              </a>
            </span>
            . My aspiration is to specialize in research, aiming to work in
            renowned AI research institutions as a scientist. These days I am
            specifically dedicated to advancing{' '}
            <span className="font-medium italic">NLP</span> and{' '}
            <span className="font-medium italic">Computer Vision</span>{' '}
            solutions that intersect with{' '}
            <span className="font-medium italic">human interaction</span>.
            <br></br>
            <br></br>
            <strong className="font-extrabold">Research.</strong> Broadly, my
            research explores how to enhance various aspects of{' '}
            <span className="font-medium italic">
              Natural Language Processing
            </span>
            , particularly in{' '}
            <span className="font-medium italic">&quot;low resource&quot;</span>{' '}
            languages like Bangla. Throughout my work, I thoroughly investigate
            the primary challenges faced by these languages, which mainly arise
            from constraints in data processing techniques. My constant devotion
            lies in the innovation of state-of-the-art solutions aimed at
            tackling these challenges head-on, thereby amplifying the data
            processing capabilities of{' '}
            <span className="font-medium italic">&quot;low resource&quot;</span>{' '}
            languages, particularly Bangla. Additionally, I think about how to
            integrate{' '}
            <span className="font-medium italic">Computer Vision</span>{' '}
            techniques with{' '}
            <span className="font-medium italic">
              Natural Language Processing
            </span>{' '}
            solutions for these resource-constrained languages. I am curious
            about the prospect of creating generative models that combine{' '}
            <span className="font-medium italic">NLP</span> and{' '}
            <span className="font-medium italic">Computer Vision</span>, driven
            by <span className="font-medium italic">human interaction</span>.
            <br></br>
            <br></br>
            {/* <br></br> */}
            <strong className="font-extrabold">Collaboration.</strong> From a
            collaborative perspective, there are numerous opportunities to learn
            from others. As of now, I am actively engaged in research with my
            undergraduate advisor. Additionally, I have experience in
            collaborative research with various faculty members at my
            undergraduate institution, including{' '}
            <span className="text-orange-700 hover:text-orange-400 hover:underline">
              <a
                href="https://www.aust.edu/cse/faculty_member/mr_md_tanvir_rouf_shawo"
                target="_blank"
                rel="noreferrer"
              >
                Md. Tanvir Rouf Shawon
              </a>
            </span>
            . <br></br> <br></br>
            <i>
              I would greatly appreciate receiving an invitation for a{' '}
              <span className="font-medium">research collaboration</span> in the
              fields of Natural Language Generation, Computer Vision, and
              Human-Computer Interaction.
            </i>
          </p>
        </div>
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default Intro;
