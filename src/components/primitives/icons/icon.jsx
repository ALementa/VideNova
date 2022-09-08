/* eslint-disable */
import React from "react"
import PropTypes from "prop-types"
import CustomIcons from "./custom-icons"

export default function Icon(props) {
  const allowedIconLibs = {
    Custom: CustomIcons,
  }

  // separates lib name prefix from {props.name} value
  // library name key cutter by second uppercase letter from props.name string
  const libKey = (str) => {
    let key = str[0]
    for (let i = 1; i < str.length; i += 1) {
      if (str[i] === str[i].toUpperCase()) break
      key += str[i]
    }
    return key
  }
  function getCustomIcon(arg, key) {
    const customLib = allowedIconLibs[key]
    const CustomIcon = customLib[arg.name]
    const customProps = {
      ...arg,
      width: arg.size || arg.width || "16px",
      height: arg.size || arg.height || arg.width,
      stroke: arg.color || arg.stroke || "#4A4847",
    }
    return <CustomIcon {...customProps} />
    if (libKey(props.name) === "Custom")
      return getCustomIcon(props, libKey(props.name))
    const CustomI=props.nameIcon;
    return <CustomI {...props}/>
  // switch ({nameIcon}){
  //   case 'Discord':
  //     return( <Discord with={props.size}/>);
  //   case 'Telegram':
  //     return( <Telegram/>);
  //   case 'Twitter':
  //     return( <Twitter/>);
  //   case 'Videonova':
  //     return( <Videonova fill={props.color}/>);
  //
  //   default:
  //     return <swg></swg>;
  }

}

Icon.propTypes = {
  /**
   * Назва іконки
   */
  nameIcon: PropTypes.string.isRequired,
  /**
   * Розмір іконки
   */
  size: PropTypes.string,
  /**
   * Колір іконки
   */
  color: PropTypes.string,
}
