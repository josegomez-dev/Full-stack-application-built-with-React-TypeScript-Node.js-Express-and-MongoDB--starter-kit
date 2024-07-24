import axios from 'axios';
import { useEffect, useState } from 'react';
import './globals.css';
import './index.css';


const App: React.FC = () => {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    axios.get('/api')
      .then(response => setMessage(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <main className={'main'}>
      <div className={'description'}>
        <p>
        Full-stack application built with <br /> React, TypeScript, Node.js, Express, and MongoDB
          <code>
            <a href="#"> <b><u>starter-kit</u></b> </a>
          </code><br />
          Database Conection: <b>{message}</b>
        </p>
        <ul>
          <li>React Frontend: Built with React and TypeScript for a robust and scalable user interface.</li>
          <li>Express Backend: Node.js and Express for handling backend logic and API routes.</li>
          <li>MongoDB Integration: Mongoose for managing database connections and schemas.</li>
          <li>Cross-Origin Resource Sharing: Configured with CORS for secure cross-origin requests.</li>
          <li>API Testing: Postman and Axios for testing and consuming API endpoints.</li>
        </ul>
        <div>
          <a
            href="https://app.daily.dev/josegomezdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            José Alejandro Gómez Castro
          </a>
        </div>
      </div>

      <div className={'center'}>
        <a href="https://app.daily.dev/josegomezdev"><img src="https://api.daily.dev/devcards/v2/abPOwdz0L9yYL5Tmgqo8B.png?r=kdl&type=wide" width="652" alt="José Alejandro Gómez Castro's Dev Card"/></a>
      </div>

      <div className={'grid'}>
        <a
          href="https://josegomez-dev.github.io/resume/"
          className={'card'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About Me <span>-&gt;</span>
          </h2>
          <p>Go to my Digital Portfolio <b><u>(Skills, Projects, Medium Blog)</u></b></p>
        </a>

        <a
          href="https://docs.google.com/document/d/1UjE945TJb80y2qqFuv4PoyNrpEvcCNBEh4l57O15rKw/edit#heading=h.k6qiab3zw8tj"
          className={'card'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Project Docs <span>-&gt;</span>
          </h2>
          <p>Check the whole project docs (<b><u>powered by ChatGPT</u></b>)</p>
        </a>

        {/* <a
          href="https://excalidraw.com/#json=mIQEAXBnGmgeM2JsBBMYN,t8975NcOKyhdQibVeMBDBA"
          className={'card'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Tech Stack <span>-&gt;</span>
          </h2>
          <p>Check our hand-drawn sketch diagram from <b><u>Excalidraw</u></b></p>
        </a> */}

        <a
          href="https://github.com/josegomez-dev/Full-stack-application-built-with-React-TypeScript-Node.js-Express-and-MongoDB--starter-kit"
          className={'card'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Start your project <span>-&gt;</span>
          </h2>
          <p>
            Follow <b> <u>README</u> </b> steps to getting your project up.
          </p>
        </a>
      </div>
      <div className="custom-nav-spacer" />
    </main>
  );
};

export default App

