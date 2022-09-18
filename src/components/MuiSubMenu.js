import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './MuiSubMenu.css'

export default function MuiSubMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (route) => {
        setAnchorEl(null);
    };

    const menuItem = (i, name) => {
        return (
            <MenuItem key={i} className="MuiMenuItemCustom" onClick={handleClose}>{name}</MenuItem>
        );
    }

    return (
        <div>
            <Button
                className={open ? 'opening' : undefined}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                {props.data.name}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}

            >
                <div className={'row'}>
                    <div className="col-md-4">
                        {props.data.submenus.filter((m, i) => i < 10).map((sub, index) => {
                            return menuItem(index, sub.name);
                        })}
                    </div>
                    {props.data.submenus.length > 10 && <div className="col-md-4">
                        {props.data.submenus.filter((m, i) => i >= 10 && i < 20).map((sub, index) => {
                            return menuItem(index, sub.name);
                        })}
                    </div>}
                    {props.data.submenus.length > 10 && <div className="col-md-4">
                        {props.data.submenus.filter((m, i) => i >= 20 && i < 30).map((sub, index) => {
                            return menuItem(index, sub.name);
                        })}
                    </div>}

                </div>
            </Menu>
        </div>
    );
}
