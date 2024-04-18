import { Text } from 'react-native'
import React from 'react'
import { Menu, MenuOption, MenuOptions, MenuTrigger, renderers } from 'react-native-popup-menu';
import { Entypo,} from '@expo/vector-icons';



interface IPostMenu {
    isMyPost: boolean,
    onDeleteButtonPressed: () => void
    onEditButtonPressed: () => void
}

const PostMenu = ({isMyPost,onDeleteButtonPressed,onEditButtonPressed}: IPostMenu) => {

  return (
    <Menu renderer={renderers.SlideInMenu}>
              <MenuTrigger>
                <Entypo name="dots-three-horizontal" size={20} color="gray" />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption onSelect={() => alert(`Report`)} >
                  <Text className=' p-2 text-xl text-center'>Report</Text>
                </MenuOption>
                {isMyPost &&  
                <>
                  <MenuOption onSelect={onEditButtonPressed} >
                    <Text className=' p-2 text-xl text-center'>Edit</Text>
                  </MenuOption>
                  <MenuOption onSelect={onDeleteButtonPressed} >
                    <Text className='text-accent p-2 text-xl text-center'>Delete</Text>
                  </MenuOption>
                </> 
                   }
              </MenuOptions>
            </Menu>
  )
}

export default PostMenu