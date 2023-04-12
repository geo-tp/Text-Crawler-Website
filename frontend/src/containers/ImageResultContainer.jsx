export const ImageResultContainer = ({children}) => {

    return(
        <div className="image-result-container">
            {/* <p>String pattern found in screenshots</p> */}
            <span className="image-result-container__mention">Image Text</span>
            <div className="image-result-container__images">
                {children}
            </div>
        </div>
    )
}