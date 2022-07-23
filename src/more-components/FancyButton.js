import React, { Component, useState } from 'react'

const FancyButton = React.forwardRef((props, ref) => {
    console.log(ref.current)
    const [value, setValue] = useState(ref.current)
    return (<>
        <input type="text" 
            ref={ref}
            value={value}
            onChange={(e) => {setValue(e.target.value); console.log('button clicked')}}/>
        </>
    )
})

export default FancyButton

// export class FancyButton extends Component {
//     constructor(props) {
//         super(props)
//         this.ref = React.createRef()
//     }

//     clickButton() {
//         this.ref.current.click()
//     }

//     render() {
//         return (
//             <button ref={this.ref}
//                     onClick={() => console.log('button clicked')}>
//                 {this.props.children}
//             </button>
//         )
//     }
// }

// export default FancyButton