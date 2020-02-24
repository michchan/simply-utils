import { LocationDescriptorObject, Location } from 'history';
import isObj from '../object/isObj'


const getPathname = (param: LocationDescriptorObject | Location | string): LocationDescriptorObject['pathname'] => (
    isObj<LocationDescriptorObject>(param)
        ? param.pathname 
        : param
)

export default getPathname
