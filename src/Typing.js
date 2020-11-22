import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

function Typing() {
    return (
        <div>
          
          <ReactTypingEffect
            text={["Developer.", "Free Lancer.", "Success Coach."]}
            cursorRenderer={cursor => <h1>{cursor}</h1>}
            speed={250}
            typingDelay={1000}
            eraseSpeed={200}
            displayTextRenderer={(text, i) => {
              return (
                
               <h2> I am a &nbsp;
                <span>
                  {text.split('').map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                        // style={i%2 === 0 ? { color: 'yellow'} : {}}
                      >{char}</span>
                    );
                  })}
                </span>
                </h2>
              );
            }}        
          />
        </div>
      );
    };

export default Typing
