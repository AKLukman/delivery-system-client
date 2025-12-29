import logo from "../../../assets/logo.png"

const Logo = () => {
    return (
        <div className="flex items-center">
            <img className="mb-2" src={logo} alt="" />
            <p className="text-3xl -ml-2 font-extrabold">Delivery</p>
        </div>
    )
}

export default Logo
