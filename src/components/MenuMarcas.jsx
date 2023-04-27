import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom"; 

const MenuMarcas = () => {
  return (
    <div className="flex items-center text-[#4B0082] font-bold bg-white">
    <Menu >
      <MenuHandler>
        <Button className="flex items-center text-[#4B0082] font-bold bg-white text-sm normal-case not-italic" variant="gradient">Marcas</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>
        <Link to="/zapatillas-marca/adidas">
            ADIDAS
          </Link></MenuItem>
        <MenuItem>
        <Link to="/zapatillas-marca/nike">
            NIKE
          </Link></MenuItem>
        <MenuItem>
        <Link to="/zapatillas-marca/puma">
            PUMA
          </Link></MenuItem>
          <MenuItem>
        <Link to="/zapatillas-marca/converse">
            CONVERSE
          </Link></MenuItem>
      </MenuList>
    </Menu>
    </div>
  );
}

export default MenuMarcas