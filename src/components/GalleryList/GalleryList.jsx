import {GalleryListItem} from '../../components/GalleryListItem/GalleryListItem'
import { ListImages } from './GalleryList.styled'
export const GalleryList = ({list}) => {
    return (
        <ListImages> 
          {list.map(({previewURL}) => {
            return (
                <GalleryListItem key={previewURL} previewURL={previewURL}/>
            )
          })}
        </ListImages>
    )
}

