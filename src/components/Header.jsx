import React, { useState} from 'react';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import styled from 'styled-components';
import { Home } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
import FaceIcon from '@mui/icons-material/Face';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




function Header({ onSubmit }) {  // Added onSubmit as a prop
    const [input, setInput] = useState('');

    const onSearchSubmit = (e) => {
        e.preventDefault();
        onSubmit(input);
    }
    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <PinterestIcon />
                </IconButton>
            </LogoWrapper>
            <HomeButtons>
                <HomePageButton>
                    <a href="/">Homepage</a>
                </HomePageButton>
                <FollowingButton>
                    <a href="/">Following</a>
                </FollowingButton>
            </HomeButtons>
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                        />
                        <button type="submit" ></button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <TextsmsIcon />
                </IconButton>
                <IconButton>
                    <FaceIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </IconsWrapper>
        </Wrapper>
    );
}

export default Header;

// Styled-components remain the same

const Wrapper =styled.div

`
display:flex;
align-items:center;
height:56px;
padding:12px 4px 4px 16px;
background-color:white;
color:black;
`

const LogoWrapper=styled.div`
    .MuiSvgIcon-root{
        color:#e60023;
        font-size:32px;
        cursor:pointer;
    }
`
const HomeButtons=styled.div`
    display:flex;
    height: 48px;
    min-width:123px;
    align-items:center;
    justify-content:center;
    border-radius:24px;
    cursor:pointer;
`
const HomePageButton=styled(HomeButtons)`
   
    background-color: rgb(17,17,17);

    a{
        text-decoration:none;
        color:white;
        font-weight:700;
    }
`
const FollowingButton=styled(HomeButtons)`
    background-color: white;

    a{
        text-decoration:none;
        color:black;
        font-weight:700;
    }
    &:hover{
        background-color:#e1e1e1;
    }
`

const SearchWrapper=styled.div`
    flex:1;
`

const SearchBarWrapper=styled.div`
    background-color:#efefef;
    display:flex;
    height:48px;
    width:100%;
    border-radius:50px;
    border:none;
    padding-left:10px;
    
    form{
        display:flex;
        flex:1;
    }

    form > input{
        background-color:transparent;
        border:none;
        width:100%;
        margin-left:5px;
        font-size:16px;
    }

    form > button{
        display:none;
    }

    input:focus{
        outline:none;
    }

    input:active{
        outline:none;
    }
    `

    const IconsWrapper=styled.div``