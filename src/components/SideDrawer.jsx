import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure, IconButton, Menu, MenuButton, Text, useColorMode } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { FaArrowRight, FaBell, FaBook, FaBoxOpen, FaFirstOrder, FaHome, FaInbox, FaMoon, FaPen, FaPlug, FaProductHunt, FaRecycle, FaSun, FaUserCog } from 'react-icons/fa'
import { FaHamburger } from 'react-icons/fa'
import ALertItem from './ALertItem'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'

export default function SideDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [state, setState] = useState('notifications');
    const { colorMode, toggleColorMode } = useColorMode();
    const btnRef = useRef()
        return (
          <div>
            <Menu >
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<FaHamburger />}
                  title='open'
                  variant='outline'
                  margin={4}
                  colorScheme='teal' onClick={() => {
                    setState('navigation');
                    onOpen()
                  }}
                />
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<FaBell />}
                  title='inbox'
                  variant='outline'
                  margin={2}
                  ref={btnRef} colorScheme='teal' onClick={() => {
                    setState('notifications')
                    onOpen()
                  }}
                />
                
            </Menu>
            { state === 'notifications' &&
            <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Button leftIcon={<FaRecycle/>} colorScheme='red'>
                  Clear
                </Button>
              </DrawerHeader>
                
              <DrawerBody>
                  <ALertItem status={"success"}/>
              </DrawerBody>
    
              <DrawerFooter>
                <Button leftIcon={<FaBoxOpen/>} colorScheme='teal'>
                  Mark all as read
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          }
          { state === 'navigation' &&
            <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                  <Button leftIcon={<FaPlug />}  colorScheme='blue' onClick={onOpen}>
                    Add Plugin
                  </Button>
                </DrawerHeader>
      
                <DrawerBody>
                  <NavLink to={'/'} colorScheme='teal' onClick={onOpen} className='side-nav'>
                    <FaHome /> Home
                  </NavLink>
                  <NavLink to={'/products'} colorScheme='teal' onClick={onOpen} className='side-nav'>
                    <FaProductHunt /> Products
                  </NavLink>
                  <NavLink  to={"/orders"} colorScheme='teal' className='side-nav'>
                    <FaCartShopping /> Orders
                  </NavLink>
                  <NavLink to={'/blogs'} colorScheme='teal' onClick={onOpen} className='side-nav'>
                    <FaBook /> Blogs
                  </NavLink>
                  <NavLink to={'/users'}  leftIcon={<FaPlug />} colorScheme='teal' onClick={onOpen} className='side-nav'>
                    <FaUserCog /> Manage Users
                  </NavLink>
                  <NavLink to={'/publish'} leftIcon={<FaPlug />} colorScheme='teal' onClick={onOpen} className='side-nav'>
                    <FaPen /> Publish
                  </NavLink>
                </DrawerBody>
      
                <DrawerFooter>
                  <Button variant='outline' mr={3} onClick={() => {
                    onClose
                    toggleColorMode()
                    
                  }} title='theme'>
                    {
                      colorMode !== 'light'?  <FaMoon color='#E4D00A'/>: <FaSun color='black'/>
                    }
                  </Button>
                  <Button rightIcon={<FaArrowRight />}  colorScheme='blue' onClick={() => {
                    setState('login');
                    onOpen()
                  }}>
                    Login
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          }
          </div>
                  
        )
    }
