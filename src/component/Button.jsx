function Button ({isDisabled, type, version, children}) {	
    return(
        <button className={`btn btn-${version} btn-${type}`} disabled={isDisabled}>
            {children}
        </button>
    )

}

export default Button;