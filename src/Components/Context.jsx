import { createContext, useState } from "react"

const Stdlistcontext = createContext()

function Context(props) {
    const [stdlist,setstdlist] = useState(
        [
            {
                id:1,
                stdname:"Mathi",
                favourite:false
            },
            {
                id:2,
                stdname:"Praba",
                favourite:false
            },
            {
                id:3,
                stdname:"Ram",
                favourite:false
            },
            {
                id:4,
                stdname:"Kumar",
                favourite:false
            },
            {
                id:5,
                stdname:"Blessed",
                favourite:false
            },
        ]
    )

    return(
        <>
            <Stdlistcontext.Provider value={{stdlist,setstdlist,}}>
                {props.children}
            </Stdlistcontext.Provider>
        </>
    )
}

export default Context
export {Stdlistcontext}
