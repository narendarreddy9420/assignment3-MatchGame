const MatchGameImages = props => {
  const {imagesList, key} = props
  const {id, imageUrl, thumbnailUrl, category} = imagesList

  const onClickImage = () => {
    onClickImageButton(id)
  }

  return (
    <li>
      <button onClick={onClickImage}>
        <img src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default MatchGameImages
