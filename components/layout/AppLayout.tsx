import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface AppLayoutProp {
    children: ReactNode
}

const AppLayout = ({children}: AppLayoutProp) => {
  return (
    <div>
        <Header />
        <>
            {children}
        </>
        <Footer />
    </div>
  )
}

export default AppLayout
