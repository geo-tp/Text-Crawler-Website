export const ImageResult = ({json, handleImageClick}) => {

    return (
        <div onClick={handleImageClick} className="image-result">
            <img onClick={() => handleImageClick()} src={json.image_thumbnail} alt="result for keywords" />
        </div>
    )
}