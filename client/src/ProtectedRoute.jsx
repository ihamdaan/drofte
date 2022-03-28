
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import SignIn from './Pages/SignIn.page'

const ProtectedRoute = () => {
    const { loading, isAuthenticated } = useSelector(state => state.user)
    // const x = useSelector(state => state)

    return (
        <>
            {
                loading === false && (isAuthenticated === true ?
                    <Outlet /> :
                    <SignIn />)
            }
        </>
    )
}

export default ProtectedRoute