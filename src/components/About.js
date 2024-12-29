import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#173b5f' : 'white',
        // border: '1px solid',
        // borderColor: props.mode === 'dark' ? 'white' : 'black',
    }
    // let [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
        
    // })

    // const [btnText, setBtnText] = useState("Enable dark mode")

//  const toggleStyle = () => {
//         if (myStyle.color === 'black') {
//             setMyStyle({
//                 color: 'white',
//                 backgroundColor: 'black',
//                  border: '0.1px solid white'
//             });
//             setBtnText("Enable light mode");
//         } else {
//             setMyStyle({
//                 color: 'black',
//                 backgroundColor: 'white',
                 
//             });
//             setBtnText("Enable dark mode")
//         }
//     }    

  return (
      <div className='container' style={myStyle}>
          <h1 className='my-2'>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                   <strong>Analyze your text</strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          TextUtils gives you a way to analyze your text quickly and efficiently. Be it word cont, character count or more.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                 <strong>Free to use</strong>  
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          TextUtils is a free character counter tool that provides instant character count & word count statctics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                  <strong> Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          This word counter software works in any web browsers such as Chrome, Firefox, Internet explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="contaoner my-3">
              <button onClick={toggleStyle} type="button" className="btn btn-primary">{ btnText}</button>
        </div> */}
    </div>
  )
}
