import type {ReactNode} from "react"


interface Props{
    children: ReactNode
}
export function Container({children}:Props){
    return (
    <div style={styles.container}>
        {children}
    </div>
    )
}
const styles ={
    container:{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem"
    }
}